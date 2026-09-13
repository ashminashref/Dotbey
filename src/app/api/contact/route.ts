import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, plan, selectedServices, date, time, notes } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone)" },
        { status: 400 }
      );
    }

    console.log("New Lead Received at Dotbey Agency:", {
      name,
      email,
      phone,
      plan,
      selectedServices,
      date,
      time,
      notes,
      timestamp: new Date().toISOString(),
    });

    // Optionally forward lead data to Python FastAPI backend service if running
    try {
      await fetch("http://localhost:8000/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch {
      // Python backend optional fallback
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead received successfully. Strategy call scheduled.",
        leadId: `DOTBEY-${Math.floor(100000 + Math.random() * 900000)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead submission" },
      { status: 500 }
    );
  }
}
