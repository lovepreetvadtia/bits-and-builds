import nodemailer from "nodemailer";
import { AGENCY_EMAIL, AGENCY_PHONE, WHATSAPP_URL } from "./seo.js";

export function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim()?.replace(/\s+/g, "");
  const secure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === "true" : port === 465;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

export async function sendContactNotificationEmail(data) {
  const { name, email, phone, business, service, budget, message } = data;
  const transporter = getTransporter();
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || AGENCY_EMAIL;
  const sender = process.env.SMTP_FROM || `"Bits & Builds Inquiries" <${process.env.SMTP_USER || AGENCY_EMAIL}>`;

  if (!transporter) {
    console.log("ℹ️ SMTP credentials not detected in environment variables. Logging inquiry details to console:");
    console.log("==================================================");
    console.log(`[INQUIRY] Name: ${name}`);
    console.log(`[INQUIRY] Email: ${email}`);
    console.log(`[INQUIRY] Phone: ${phone}`);
    console.log(`[INQUIRY] Business: ${business || "N/A"}`);
    console.log(`[INQUIRY] Service: ${service || "Web Development"}`);
    console.log(`[INQUIRY] Budget: ${budget || "N/A"}`);
    console.log(`[INQUIRY] Message: ${message}`);
    console.log("==================================================");
    return { sent: false, reason: "SMTP not configured" };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f6; margin: 0; padding: 24px; color: #171e19; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e0e4e2; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
          .header { background: #171e19; padding: 32px; text-align: left; }
          .header h1 { font-size: 26px; font-weight: 800; color: #ffffff; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }
          .header span { color: #ffe17c; }
          .header p { color: #b7c6c2; font-size: 12px; margin-top: 6px; text-transform: uppercase; letter-spacing: 1px; font-family: monospace; }
          .content { padding: 32px; }
          .badge { display: inline-block; background: #ffe17c; color: #171e19; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 20px; font-family: monospace; }
          .table-info { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .table-info td { padding: 12px 14px; border-bottom: 1px solid #f0f2f1; font-size: 14px; }
          .table-info td.label { width: 35%; font-weight: 700; color: #66726d; font-size: 12px; text-transform: uppercase; font-family: monospace; }
          .table-info td.value { color: #171e19; font-weight: 600; }
          .message-box { background: #f8f9fa; border-left: 4px solid #ffe17c; padding: 18px; border-radius: 8px; margin: 20px 0; font-size: 14px; line-height: 1.6; color: #272727; }
          .cta-row { margin-top: 28px; padding-top: 20px; border-top: 1px solid #eef0ef; text-align: center; }
          .cta-btn { display: inline-block; background: #171e19; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 999px; font-weight: 700; font-size: 13px; text-transform: uppercase; margin: 6px; }
          .cta-whatsapp { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 999px; font-weight: 700; font-size: 13px; text-transform: uppercase; margin: 6px; }
          .footer { background: #f8f9fa; padding: 20px 32px; text-align: center; font-size: 11px; color: #8a9691; font-family: monospace; }
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>BITS &amp; BUILDS<span>.</span></h1>
            <p>New Inbound Client Project Brief</p>
          </div>
          <div className="content">
            <div className="badge">⚡ High Priority Lead</div>
            <table className="table-info">
              <tr>
                <td className="label">Client Name</td>
                <td className="value">${name}</td>
              </tr>
              <tr>
                <td className="label">Email Address</td>
                <td className="value"><a href="mailto:${email}" style="color: #171e19; text-decoration: underline;">${email}</a></td>
              </tr>
              <tr>
                <td className="label">Phone / WhatsApp</td>
                <td className="value"><a href="tel:${phone.replace(/\s+/g, '')}" style="color: #171e19; text-decoration: underline;">${phone}</a></td>
              </tr>
              <tr>
                <td className="label">Business / Brand</td>
                <td className="value">${business || "Not specified"}</td>
              </tr>
              <tr>
                <td className="label">Selected Engine</td>
                <td className="value" style="color: #000; font-weight: 800;">${service || "Web Development"}</td>
              </tr>
              <tr>
                <td className="label">Estimated Budget</td>
                <td className="value" style="color: #000; font-weight: 800;">${budget || "Not specified"}</td>
              </tr>
            </table>

            <div style="font-weight: 700; font-size: 13px; text-transform: uppercase; font-family: monospace; color: #66726d; margin-top: 20px;">
              Project Scope &amp; Goals:
            </div>
            <div className="message-box">
              ${message.replace(/\n/g, "<br />")}
            </div>

            <div className="cta-row">
              <a href="mailto:${email}?subject=Regarding your Bits %26 Builds project brief" className="cta-btn">Reply via Email ✉️</a>
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" className="cta-whatsapp">Chat on WhatsApp 💬</a>
            </div>
          </div>
          <div className="footer">
            Bits and Builds Studio · Sri Ganganagar, Rajasthan (335002) · +91 63676 37487
          </div>
        </div>
      </body>
    </html>
  `;

  // 1. Send notification to Studio
  try {
    const studioMail = await transporter.sendMail({
      from: sender,
      to: receiver,
      replyTo: email,
      subject: `⚡ New Project Brief: ${name} — ${service || "Bits and Builds"}`,
      text: `New project inquiry from ${name} (${email}, ${phone})\nService: ${service}\nBudget: ${budget}\nBusiness: ${business}\n\nGoals:\n${message}`,
      html: htmlContent,
    });
    console.log(`✅ Studio notification email successfully dispatched to ${receiver} (MessageId: ${studioMail.messageId})`);

    // 2. Send automated confirmation to Client
    try {
      const clientAutoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f5f6; margin: 0; padding: 24px; color: #171e19; }
            .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e0e4e2; }
            .header { background: #171e19; padding: 28px; text-align: left; }
            .header h1 { font-size: 24px; font-weight: 800; color: #ffffff; margin: 0; text-transform: uppercase; }
            .header span { color: #ffe17c; }
            .content { padding: 28px; font-size: 15px; line-height: 1.6; color: #272727; }
            .badge { display: inline-block; background: #ffe17c; color: #171e19; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 16px; font-family: monospace; }
            .footer { background: #f8f9fa; padding: 18px 28px; text-align: center; font-size: 12px; color: #66726d; }
          </style>
        </head>
        <body>
          <div className="container">
            <div className="header">
              <h1>BITS &amp; BUILDS<span>.</span></h1>
            </div>
            <div className="content">
              <div className="badge">✓ Brief Received</div>
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to <strong>Bits and Builds</strong>! We have received your project details regarding <strong>${service || "our services"}</strong>.</p>
              <p>Founders <strong>Lavi</strong> and <strong>Jass</strong> will review your business requirements and market scope. We will reach back out to you within 24 hours.</p>
              <p>If you need an immediate consultation or faster response, feel free to message us directly on WhatsApp:</p>
              <p style="text-align: center; margin: 24px 0;">
                <a href="${WHATSAPP_URL}" style="display: inline-block; background: #171e19; color: #ffe17c; padding: 12px 26px; border-radius: 999px; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase;">
                  Chat Directly on WhatsApp 💬
                </a>
              </p>
              <p style="font-size: 13px; color: #66726d;">Warm regards,<br /><strong>Lavi &amp; Jass</strong><br />Bits and Builds Studio</p>
            </div>
            <div className="footer">
              Sri Ganganagar, Rajasthan 335002 · Phone/WhatsApp: ${AGENCY_PHONE}
            </div>
          </div>
        </body>
      </html>
    `;

      await transporter.sendMail({
        from: sender,
        to: email,
        subject: `✓ We received your project brief — Bits and Builds`,
        text: `Hi ${name},\n\nThank you for reaching out to Bits and Builds. We have received your brief regarding ${service} and will get back to you within 24 hours.\n\nBest regards,\nLavi & Jass\nBits and Builds`,
        html: clientAutoReplyHtml,
      });
      console.log(`✅ Client auto-reply email sent to ${email}`);
    } catch (err) {
      console.error("Auto-reply to client error:", err);
    }

    return { sent: true, messageId: studioMail.messageId };
  } catch (err) {
    console.error("❌ Failed to send contact notification email:", err);
    return { sent: false, reason: err.message };
  }
}
