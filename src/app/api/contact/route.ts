import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, fullName, firstName, lastName, email, subject, message, stream, source } = body;

    const studentName =
      name ||
      fullName ||
      `${firstName || ""} ${lastName || ""}`.trim() ||
      "N/A";

    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name: studentName,
      email: email || "N/A",
      subject: subject || stream || "General Inquiry",
      message: message || "N/A",
      source: source || "Website Form",
      spreadsheetId: "1P_9wk0i-rn-nRX9v_DPn1rJrS1rWlkNf0yPz_5GlNO4"
    };

    // Forward to Google Apps Script Webhook
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbwzdFLTjDyiA6Zg-Ly7RSc51Th3ry7c0mnvIEc6eqODUHeiWQuCxCOxVdEqqtkBE90/exec";

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error("Google Sheet webhook error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted and saved successfully!",
      data: payload
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
