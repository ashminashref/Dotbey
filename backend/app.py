"""
Dotbey Digital Marketing Agency - Python Backend Service
Provides automated lead ingestion, proposal generation, and campaign analytics API.
"""

from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import datetime
import json
import csv
import io
import os
import uvicorn

app = FastAPI(
    title="Dotbey Agency Backend API",
    description="Python microservice for Dotbey lead processing and campaign tools",
    version="1.0.0"
)

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class LeadRequest(BaseModel):
    name: str
    email: Optional[str] = ""
    phone: Optional[str] = ""
    contact: Optional[str] = ""
    plan: Optional[str] = "Growth Plan"
    selectedServices: Optional[List[str]] = []
    date: Optional[str] = ""
    time: Optional[str] = ""
    notes: Optional[str] = ""

leads_db = []

# Load existing leads if file exists
if os.path.exists("leads_log.json"):
    try:
        with open("leads_log.json", "r") as f:
            leads_db = json.load(f)
    except Exception:
        leads_db = []

@app.get("/")
def read_root():
    return {
        "status": "online",
        "agency": "Dotbey Digital Marketing",
        "tagline": "We don't build brands, we build growth.",
        "api_docs": "/docs"
    }

@app.post("/api/lead")
def create_lead(lead: LeadRequest):
    lead_entry = lead.dict()
    lead_entry["id"] = f"DOTBEY-PY-{len(leads_db) + 1001}"
    lead_entry["created_at"] = datetime.datetime.now().isoformat()
    leads_db.append(lead_entry)
    
    try:
        with open("leads_log.json", "w") as f:
            json.dump(leads_db, f, indent=2)
    except Exception as e:
        print(f"Error logging lead: {e}")
        
    return {
        "success": True,
        "message": "Lead received by Python Dotbey Backend",
        "lead": lead_entry
    }

@app.get("/api/leads")
def get_leads():
    return {"total": len(leads_db), "leads": leads_db}

@app.get("/api/export-csv")
def export_csv():
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["ID", "Name", "Contact", "Plan", "Notes", "Created At"])
    
    for item in leads_db:
        writer.writerow([
            item.get("id", ""),
            item.get("name", ""),
            item.get("contact") or item.get("email") or item.get("phone", ""),
            item.get("plan", ""),
            item.get("notes", ""),
            item.get("created_at", "")
        ])
        
    response = Response(content=output.getvalue(), media_type="text/csv")
    response.headers["Content-Disposition"] = f"attachment; filename=Dotbey_Leads_{datetime.date.today()}.csv"
    return response

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
