import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const CSV_FILE = path.join(process.cwd(), "leads_database.csv");

  if (!fs.existsSync(CSV_FILE)) {
    // Generate empty spreadsheet with headers if file does not exist yet
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
