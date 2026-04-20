import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import path from 'path';

const getTransporter = () => {
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) {
        return null;
    }

    return nodemailer.createTransport({
        host,
        port: Number(port),
        secure: Number(port) === 465,
        auth: {
            user,
            pass,
        },
    });
};

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, businessType, budget, message } = body;

        // Validate required fields
        if (!name || (!email && !phone)) {
            return NextResponse.json(
                { error: 'Missing required fields (Name and at least one contact method)' },
                { status: 400 }
            );
        }

        // Log the data for debugging
        console.log('----- Contact Form Submission -----');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Business Type:', businessType);
        console.log('Budget:', budget);
        console.log('Message:', message);
        console.log('-----------------------------------');

        // Save to JSON file
        try {
            const filePath = path.join(process.cwd(), 'src', 'data', 'contactSubmissions.json');
            let submissions = [];

            try {
                const fileData = await fs.readFile(filePath, 'utf8');
                submissions = JSON.parse(fileData);
            } catch {
                submissions = [];
            }

            const newSubmission = {
                id: Date.now().toString(),
                name,
                email,
                phone,
                businessType,
                budget,
                message,
                submittedAt: new Date().toISOString(),
                status: 'new'
            };

            submissions.unshift(newSubmission);
            await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
        } catch (fsError) {
            console.error('Error saving submission to file:', fsError);
        }

        const transporter = getTransporter();
        if (!transporter) {
            return NextResponse.json(
                { error: 'Email service is not configured' },
                { status: 500 }
            );
        }

        try {
            const safeName = escapeHtml(name || '');
            const safeEmail = escapeHtml(email || 'Not provided');
            const safePhone = escapeHtml(phone || 'Not provided');
            const safeBusinessType = escapeHtml(businessType || 'Not specified');
            const safeBudget = escapeHtml(budget || 'Not specified');
            const safeMessage = escapeHtml(message || 'No message provided');
            const submittedAt = new Date().toLocaleString('en-IN', {
                dateStyle: 'medium',
                timeStyle: 'short',
                timeZone: 'Asia/Kolkata',
            });

            await transporter.sendMail({
                from: `"Mera Digitals Contact Form" <${process.env.SMTP_USER}>`,
                to: 'kaleshabox8@gmail.com',
                replyTo: email || process.env.SMTP_USER,
                subject: `New Lead: ${name} - Mera Digitals`,
                text: `
New Lead Capture Form Submission
Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
Business Type: ${safeBusinessType}
Budget: ${safeBudget}
Submitted At: ${submittedAt}
Message: ${safeMessage}
                `,
                html: `
              <div style="background:#f6f8fc;padding:24px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
                  <tr>
                    <td style="padding:26px 28px 20px;background:#0b1020;border-bottom:1px solid #1f2a44;">
                      <img src="cid:meraDigitalsLogo" alt="Mera Digitals" style="max-width:240px;height:auto;display:block;margin:0 auto 16px;" />
                      <h2 style="margin:0;text-align:center;font-size:22px;line-height:1.3;color:#ffffff;">New Lead Capture Form Submission</h2>
                      <p style="margin:8px 0 0;text-align:center;color:#d1d5db;font-size:14px;">You received a new inquiry from the website form.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px 28px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                        <tr>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;background:#fafafa;width:180px;color:#4b5563;font-size:13px;font-weight:700;">Full Name</td>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${safeName}</td>
                        </tr>
                        <tr>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;background:#fafafa;color:#4b5563;font-size:13px;font-weight:700;">Email</td>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${safeEmail}</td>
                        </tr>
                        <tr>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;background:#fafafa;color:#4b5563;font-size:13px;font-weight:700;">Phone</td>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${safePhone}</td>
                        </tr>
                        <tr>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;background:#fafafa;color:#4b5563;font-size:13px;font-weight:700;">Business Type</td>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${safeBusinessType}</td>
                        </tr>
                        <tr>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;background:#fafafa;color:#4b5563;font-size:13px;font-weight:700;">Monthly Budget</td>
                          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${safeBudget}</td>
                        </tr>
                        <tr>
                          <td style="padding:12px 14px;background:#fafafa;color:#4b5563;font-size:13px;font-weight:700;">Submitted At</td>
                          <td style="padding:12px 14px;color:#111827;font-size:14px;">${submittedAt}</td>
                        </tr>
                      </table>

                      <div style="margin-top:16px;border:1px solid #e5e7eb;border-radius:10px;padding:14px;background:#fcfcfd;">
                        <p style="margin:0 0 8px;color:#4b5563;font-size:13px;font-weight:700;">Business Details</p>
                        <p style="margin:0;color:#111827;font-size:14px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 28px 22px;border-top:1px solid #e5e7eb;background:#fafafa;">
                      <p style="margin:0;color:#6b7280;font-size:12px;line-height:1.5;text-align:center;">
                        Mera Digitals Website Lead Notification
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            `,
                attachments: [
                    {
                        filename: 'MER_DIGITALS_LOGO.png',
                        path: path.join(process.cwd(), 'public', 'MER_DIGITALS_LOGO.png'),
                        cid: 'meraDigitalsLogo',
                    },
                ],
            });
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Lead received successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
