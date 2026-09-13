import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_PIN = process.env.ADMIN_PIN || "dotbey2026";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pin = searchParams.get("pin") || request.headers.get("x-admin-pin");

  if (pin !== ADMIN_PIN) {
    return NextResponse.json(
      { error: "Unauthorized access. Invalid admin security PIN." },
      { status: 401 }
    );
  }

  const CSV_FILE = path.join(process.cwd(), "leads_database.csv");

  if (!fs.existsSync(CSV_FILE)) {
    const header = "ID,Name,Contact,Plan,Notes,Timestamp\n";
    fs.writeFileSync(CSV_FILE, header, "utf-8");
  }

  const fileBuffer = fs.readFileSync(CSV_FILE);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="Dotbey_Booked_Leads_${new Date().toISOString().split("T")[0]}.csv"`,
    },
  });
}
