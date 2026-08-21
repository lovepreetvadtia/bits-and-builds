import { NextResponse } from "next/server";
import { sendContactNotificationEmail } from "@/lib/mail";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format" },
        { status: 400 }
      );
    }

    // Send email notification via SMTP
    const mailResult = await sendContactNotificationEmail({
      name: name.trim(),
      email: email.trim(),
      phone: (phone || "").trim(),
      business: (data.business || "").trim(),
      service: data.service || "Web Development",
      budget: data.budget || "₹25k - ₹50k",
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Project brief successfully received by Bits and Builds founders.",
      smtpDispatched: mailResult.sent,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
