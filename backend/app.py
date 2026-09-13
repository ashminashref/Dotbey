"""
Dotbey Digital Marketing Agency - Python Backend Service
Provides automated lead ingestion, proposal generation, and campaign analytics API.
"""

from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import datetime
import json
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
    email: EmailStr
    phone: str
    plan: Optional[str] = "Growth Plan"
    selectedServices: Optional[List[str]] = []
    date: str
    time: str
    notes: Optional[str] = ""

class ProposalRequest(BaseModel):
    client_name: str
    budget_inr: float
    services: List[str]

# In-memory storage for leads (or SQLite / JSON file)
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
def create_lead(lead: LeadRequest, background_tasks: BackgroundTasks):
    lead_entry = lead.dict()
    lead_entry["id"] = f"DOTBEY-PY-{len(leads_db) + 1001}"
    lead_entry["created_at"] = datetime.datetime.now().isoformat()
    leads_db.append(lead_entry)
    
    # Save lead entry to local storage
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

@app.post("/api/generate-proposal")
def generate_proposal(req: ProposalRequest):
    estimated_timeline = "14 days" if "Web Engineering" in req.services else "7 days"
    recommended_package = "Growth Plan" if req.budget_inr >= 24999 else "Starter Plan"
    
    return {
        "client_name": req.client_name,
        "recommended_package": recommended_package,
        "estimated_timeline": estimated_timeline,
        "projected_reach_multiplier": "3.5x - 5x within 60 days",
        "proposed_deliverables": req.services,
        "agency": "Dotbey Digital Marketing"
    }

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
