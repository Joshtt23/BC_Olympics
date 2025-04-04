import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use your own API Key from Resend (https://resend.com/)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    const emailResponse = await resend.emails.send({
      from: `BC Olympic Cycling <bc.cycling@resend.dev>`,
      to: "bcoviolympiccycling@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message}
          </div>
        </div>
      `,
    });

    // Check for API errors
    if (emailResponse.error) {
      console.error("Resend API Error:", emailResponse.error);
      return NextResponse.json(
        {
          success: false,
          message: "Email sending failed. Please try again later.",
          error: emailResponse.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data: emailResponse,
    });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
