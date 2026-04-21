'use client';

import { Activity, UserCircle, Shield, Clock, FileText } from 'lucide-react';

export function UserDashboardTab() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px]" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-4xl font-bold text-white tracking-tight">Personal Dashboard</h2>
        <p className="text-slate-500 text-base font-medium">Welcome back. Here is your account overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Account Identity Card */}
        <div className="bg-[#0b1429]/40 backdrop-blur-xl border border-slate-800/60 rounded-4xl p-8 shadow-2xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-3xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <UserCircle size={40} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">John Doe</h3>
              <p className="text-slate-500 font-medium text-sm">user@example.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-slate-800/50">
              <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Access Level</span>
              <span className="text-emerald-400 text-sm font-black uppercase">Standard User</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-800/50">
              <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Department</span>
              <span className="text-white text-sm font-bold uppercase">Department A</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#0b1429]/40 backdrop-blur-xl border border-slate-800/60 rounded-4xl p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white tracking-tight mb-8 flex items-center gap-2">
            <Clock size={20} className="text-slate-500" /> Recent Activity
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
              <div>
                <p className="text-sm font-bold text-white leading-tight">Logged into the system</p>
                <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase">Today, 09:41 AM</p>
              </div>
            </div>
            <div className="flex gap-4 items-start opacity-50">
              <div className="w-2 h-2 rounded-full bg-slate-600 mt-1.5" />
              <div>
                <p className="text-sm font-bold text-white leading-tight">Password changed</p>
                <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}