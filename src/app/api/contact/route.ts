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
        const { name, email, phone, service, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Log the data for debugging (this proves the dynamic data capture works)
        console.log('----- Contact Form Submission -----');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Service:', service);
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
                // If file doesn't exist or is empty, start fresh
                submissions = [];
            }

            const newSubmission = {
                id: Date.now().toString(),
                name,
                email,
                phone,
                service,
                message,
                submittedAt: new Date().toISOString(),
                status: 'new' // valuable for admin to track read/unread
            };

            submissions.unshift(newSubmission); // Add to top
            await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
            console.log('Saved submission to file');
        } catch (fsError) {
            console.error('Error saving submission to file:', fsError);
            // Continue execution - email is more critical
        }

        // ----------------------------------------------------------------------
        // EMAIL SENDING IMPLEMENTATION (Uncomment and configure to use)
        // ----------------------------------------------------------------------

        const resend = getResend();
        if (!resend) {
            console.error('Missing RESEND_API_KEY');
            // Don't crash in dev if key is missing, just log
            return NextResponse.json(
                { message: 'Form submitted (Email simulation - Key missing)' },
                { status: 200 }
            );
        }

        try {
            const data = await resend.emails.send({
                from: 'Contact Form <onboarding@resend.dev>', // Use verified domain in production
                to: ['kalesha786kareem@gmail.com'], // Updated to your personal email
                subject: `New Inquiry from ${name} - Mera Digitals`,
                html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
            });
            console.log('Email sent successfully:', data);
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            // We might still want to return 200 to the client if the data was logged/saved, 
            // but strictly speaking, if email failed, maybe alert the user.
            // For now, let's treat it as a server error.
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Message received successfully' },
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
