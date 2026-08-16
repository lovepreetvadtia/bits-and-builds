import { NextResponse } from "next/server";

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

    console.log("=== NEW BITS AND BUILDS INQUIRY ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone / WhatsApp:", phone);
    console.log("Service:", data.service);
    console.log("Budget:", data.budget);
    console.log("Business Name:", data.business);
    console.log("Message:", message);
    console.log("===================================");

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully received by Bits and Builds founders.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
