"use client";

import { useState, useEffect } from "react";
import { Download, Search, RefreshCw, Users, CheckCircle, ArrowLeft, Lock, LogOut, KeyRound } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface Lead {
  id: string;
  name: string;
  contact: string;
  email?: string;
  phone?: string;
  plan: string;
  notes: string;
  timestamp: string;
}

export default function AdminLeadsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const DEFAULT_PIN = "dotbey2026";

  useEffect(() => {
    // Check if previously authenticated in current browser session
    const storedAuth = sessionStorage.getItem("dotbey_admin_auth");
    if (storedAuth === "true") {
      setAuthenticated(true);
      fetchLeads();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === DEFAULT_PIN || passcode.trim() === (process.env.NEXT_PUBLIC_ADMIN_PIN || "dotbey2026")) {
      sessionStorage.setItem("dotbey_admin_auth", "true");
      sessionStorage.setItem("dotbey_admin_pin", passcode.trim());
      setAuthenticated(true);
      setErrorMsg("");
      fetchLeads();
    } else {
      setErrorMsg("Invalid security passcode. Access denied.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("dotbey_admin_auth");
    sessionStorage.removeItem("dotbey_admin_pin");
    setAuthenticated(false);
    setPasscode("");
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads.reverse());
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.plan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🔒 Security Passcode Login Gate Screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 font-sans relative overflow-hidden">
        {/* Soft Radial Glow */}
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) from-blue-600/15 via-transparent to-transparent pointer-events-none" />

        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl z-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#0052FF] flex items-center justify-center mx-auto mb-6">
            <Lock className="w-7 h-7 text-[#0052FF]" />
          </div>

          <div className="mb-6">
            <Logo variant="light" />
            <h1 className="text-xl font-bold tracking-tight text-white mt-4">
              Admin Security Gate
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Enter Dotbey agency passcode to view strategy call leads.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-blue-400" />
                <span>Security Passcode</span>
              </label>
              <input
                type="password"
                required
                placeholder="Enter passcode (e.g. dotbey2026)"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setErrorMsg("");
                }}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] text-white text-xs outline-none transition-all"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-400 font-medium bg-rose-500/10 border border-rose-500/20 rounded-xl px-3 py-2">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#0052FF] hover:bg-blue-600 active:scale-[0.98] text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/25"
            >
              Authenticate & Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 🔓 Authenticated Admin Dashboard View
  const currentPin = sessionStorage.getItem("dotbey_admin_pin") || DEFAULT_PIN;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-800 gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="mb-1">
                <Logo variant="light" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">
                Strategy Call Leads & Spreadsheet Tracker
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <a
              href={`/api/export-leads?pin=${encodeURIComponent(currentPin)}`}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0052FF] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
            >
              <Download className="w-4 h-4" />
              <span>Download CSV Sheet</span>
            </a>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 text-xs font-semibold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">Total Call Bookings</span>
              <Users className="w-4 h-4 text-[#0052FF]" />
            </div>
            <p className="text-3xl font-bold">{leads.length}</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">Active Storage File</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-sm font-semibold text-emerald-400">leads_database.csv</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">Excel / Sheets Export</span>
              <Download className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-sm font-semibold text-blue-400">Secured & Authenticated</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search leads by name, contact, or plan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-[#0052FF] outline-none transition-all"
            />
          </div>
        </div>

        {/* Table View */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Lead ID</th>
                  <th className="py-4 px-6">Client Name</th>
                  <th className="py-4 px-6">Contact (Email / Phone)</th>
                  <th className="py-4 px-6">Selected Plan</th>
                  <th className="py-4 px-6">Notes / Goals</th>
                  <th className="py-4 px-6">Date Booked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      Loading booked leads...
                    </td>
                  </tr>
                ) : filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      No strategy call leads found. Submit a booking via the website modal to test!
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6 font-mono text-[#0052FF] font-bold">{lead.id}</td>
                      <td className="py-4 px-6 font-semibold text-white">{lead.name}</td>
                      <td className="py-4 px-6 text-slate-200">{lead.contact}</td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold text-[11px]">
                          {lead.plan}
                        </span>
                      </td>
                      <td className="py-4 px-6 max-w-xs truncate text-slate-400">
                        {lead.notes || "No notes specified"}
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        {lead.timestamp ? new Date(lead.timestamp).toLocaleDateString() : "Just now"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
