import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src', 'data', 'contactSubmissions.json');

        try {
            const fileData = await fs.readFile(filePath, 'utf8');
            const submissions = JSON.parse(fileData);
            return NextResponse.json(submissions, { status: 200 });
        } catch (readError) {
            // If file doesn't exist, return empty array
            return NextResponse.json([], { status: 200 });
        }
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
