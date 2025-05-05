import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react"; // Needed for JSX in Resend

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("API KEY:", process.env.RESEND_API_KEY); // Debug
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: "hello",
      react: (
        <>
        <p>email body</p>
          {/* <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p> */}
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Send error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
