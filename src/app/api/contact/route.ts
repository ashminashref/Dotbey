import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CSV_FILE = path.join(process.cwd(), "leads_database.csv");
const JSON_FILE = path.join(process.cwd(), "leads_log.json");

// Helper to append lead to CSV file
function appendLeadToCSV(lead: any) {
  const fileExists = fs.existsSync(CSV_FILE);
  const header = "ID,Name,Contact,Plan,Notes,Timestamp\n";

  // Sanitize fields for CSV format
  const sanitize = (val: string) => `"${(val || "").replace(/"/g, '""')}"`;

  const row = [
    sanitize(lead.id),
    sanitize(lead.name),
    sanitize(lead.contact || lead.phone || lead.email),
    sanitize(lead.plan),
    sanitize(lead.notes),
    sanitize(lead.timestamp),
  ].join(",") + "\n";

  if (!fileExists) {
    fs.writeFileSync(CSV_FILE, header + row, "utf-8");
  } else {
    fs.appendFileSync(CSV_FILE, row, "utf-8");
  }
}

// Helper to append lead to JSON log
function appendLeadToJSON(lead: any) {
  let leads = [];
  if (fs.existsSync(JSON_FILE)) {
    try {
      const data = fs.readFileSync(JSON_FILE, "utf-8");
      leads = JSON.parse(data);
    } catch {
      leads = [];
    }
  }
  leads.push(lead);
  fs.writeFileSync(JSON_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, email, phone, plan, notes } = body;

    const contactVal = contact || phone || email;

    if (!name || !contactVal) {
      return NextResponse.json(
        { error: "Missing required fields (name, contact)" },
        { status: 400 }
      );
    }

    const leadId = `DOTBEY-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    const leadRecord = {
      id: leadId,
      name,
      contact: contactVal,
      email: email || contactVal,
      phone: phone || contactVal,
      plan: plan || "Growth Strategy",
      notes: notes || "",
      timestamp,
    };

    // Save to persistent local spreadsheet CSV & JSON
    appendLeadToCSV(leadRecord);
    appendLeadToJSON(leadRecord);

    // Forward to Python FastAPI backend microservice if running
    try {
      await fetch("http://localhost:8000/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadRecord.name,
          email: leadRecord.email,
          phone: leadRecord.phone,
          plan: leadRecord.plan,
          date: timestamp.split("T")[0],
          time: "10:00 AM",
          notes: leadRecord.notes,
        }),
      });
    } catch {
      // Optional Python backend fallback
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead received and logged in spreadsheet CSV database.",
        lead: leadRecord,
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

export async function GET() {
  try {
    if (fs.existsSync(JSON_FILE)) {
      const data = fs.readFileSync(JSON_FILE, "utf-8");
      const leads = JSON.parse(data);
      return NextResponse.json({ total: leads.length, leads });
    }
    return NextResponse.json({ total: 0, leads: [] });
  } catch {
    return NextResponse.json({ total: 0, leads: [] });
  }
}
