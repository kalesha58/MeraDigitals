import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';

// To send real emails, you can use services like Resend, Nodemailer, or SendGrid.
// Start by installing the Resend SDK: npm install resend

// Initialize Resend lazily or handle missing key
const getResend = () => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return null;
    return new Resend(apiKey);
};


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
            } catch (readError) {
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

        const resend = getResend();
        if (!resend) {
            return NextResponse.json(
                { message: 'Form submitted (Email simulation - Key missing)' },
                { status: 200 }
            );
        }

        try {
            const data = await resend.emails.send({
                from: 'Contact Form <onboarding@resend.dev>',
                to: ['kalesha786kareem@gmail.com'],
                subject: `New Lead: ${name} - Mera Digitals`,
                html: `
              <h2>New Lead Capture Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Business Type:</strong> ${businessType || 'Not specified'}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Message:</strong></p>
              <p>${message || 'No message provided'}</p>
            `,
            });
            console.log('Email sent successfully:', data);
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
