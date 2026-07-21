import nodemailer from "nodemailer";

const MAX_LENGTHS = { name: 100, email: 200, message: 5000 };

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; message?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json({ error: "Invalid form input." }, { status: 400 });
  }

  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  if (!user || !pass) {
    // Email delivery not configured on this deployment; the client falls back to mailto.
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Nowlny Website" <${user}>`,
      to: process.env.CONTACT_TO || "nowlnylb@gmail.com",
      replyTo: `"${name.replace(/"/g, "'")}" <${email}>`,
      subject: `Website contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return Response.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
