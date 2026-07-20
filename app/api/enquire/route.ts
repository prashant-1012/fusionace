import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s-]{7,15}$/;

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(body: Partial<LeadPayload>): string | null {
  if (!body.name?.trim()) return "Name is required.";
  if (!body.email?.trim() || !EMAIL_REGEX.test(body.email.trim()))
    return "A valid email is required.";
  if (!body.phone?.trim() || !PHONE_REGEX.test(body.phone.trim()))
    return "A valid phone number is required.";
  if (!body.location?.trim()) return "Preferred location/budget is required.";
  return null;
}

export async function POST(request: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { name, email, phone, location } = body as LeadPayload;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("Missing SMTP env vars for /api/enquire");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Fusion Ace Website" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone.trim()}\nPreferred Location/Budget: ${location.trim()}`,
      html: `
        <h2>New enquiry from the Fusion Ace website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone.trim())}</p>
        <p><strong>Preferred Location/Budget:</strong> ${escapeHtml(location.trim())}</p>
      `,
    });
  } catch (err) {
    console.error("Failed to send enquiry email:", err);
    return NextResponse.json(
      { error: "Failed to send the enquiry. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
