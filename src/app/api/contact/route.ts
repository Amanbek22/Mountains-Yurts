import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, dates, tourType, comment } = body;

    // Format the email message
    const mailOptions = {
      from: `"Kyrgyzstan Tours" <${process.env.EMAIL_USER}>`,
      to: 'een9.aman@gmail.com',
      subject: 'New Tour Inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Tour Inquiry</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Preferred Dates:</strong> ${dates}</p>
            <p><strong>Tour Type:</strong> ${tourType}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${comment}</p>
          </div>
          <p style="color: #6b7280; font-size: 0.875rem; margin-top: 20px;">
            This message was sent from your website's contact form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 