import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use your own API Key from Resend (https://resend.com/)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const emailResponse = await resend.emails.send({
      from: `BC Cycling <bc.cycling@resend.dev>`,
      to: "joshua.traver1998@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    // Check for API errors
    if (emailResponse.error) {
      return NextResponse.json(
        {
          success: false,
          message: "Email sending failed.",
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
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
