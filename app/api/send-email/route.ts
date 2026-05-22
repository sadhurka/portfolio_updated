import { NextResponse } from "next/server";
import { Resend } from "resend";

import { CONTACT_INFO } from "@/lib/data";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL ?? "Sadhurka Portfolio <onboarding@resend.dev>";

interface ContactFormPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY environment variable." },
      { status: 500 }
    );
  }

  const payload = (await request.json().catch(() => null)) as ContactFormPayload | null;

  if (!payload) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);
  const testRecipient = process.env.RESEND_TEST_RECIPIENT;
  const toAddress = testRecipient ?? CONTACT_INFO.email;

  const { data, error } = await resend.emails.send({
    from: resendFromEmail,
    to: toAddress,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: [
      "New portfolio message",
      `Name: ${name}`,
      `Email: ${email}`,
      "Message:",
      message,
    ].join("\n\n"),
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message ?? "Resend rejected the message request." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id ?? null });
}