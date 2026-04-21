'use client';

import { useState } from 'react';

const SUMMARY = [
  { title: 'Total ROPA', value: '150' },
  { title: 'High Risk', value: '12' },
  { title: 'Department', value: '8' },
  { title: 'X', value: 'X' },
];

const DEPARTMENTS = [
  { name: 'Marketing', count: 4, risk: 'xx' },
  { name: 'IT', count: 4, risk: 'xx' },
  { name: 'XXXX', count: 'xx', risk: 'xx' },
  { name: 'XXXX', count: 'xx', risk: 'xx' },
  { name: 'XXXX', count: 'xx', risk: 'xx' },
];

const PENDING = [
  { name: 'xxxx', dept: 'xx', risk: 'Med' },
  { name: 'xxxx', dept: 'xx', risk: 'Low' },
  { name: 'xxxx', dept: 'xx', risk: 'High' },
  { name: 'xxxx', dept: 'xx', risk: 'xx' },
  { name: 'xxxx', dept: 'xx', risk: 'xx' },
  { name: 'xxxx', dept: 'xx', risk: 'xx' },
];

export function DpoDashboardTab({ onNavigateToRopa }: { onNavigateToRopa: () => void }) {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto relative h-full flex flex-col">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Header Info */}
      <div className="flex flex-col gap-1 relative z-10">
        <h2 className="text-4xl font-bold text-white tracking-tight">Hello,</h2>
        <p className="text-slate-500 text-base font-medium">Text</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-8 relative z-10">
        {SUMMARY.map((s, i) => (
          <div key={i} className="bg-[#0b1429]/40 backdrop-blur-xl border border-slate-800/60 rounded-[24px] p-8 shadow-2xl group hover:border-blue-500/30 transition-all">
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">{s.title}</h3>
            <p className="text-4xl font-black text-white tracking-tighter">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Main Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10 flex-1">
        
        {/* Left Column - Department Overview */}
        <div className="bg-[#0b1429]/30 backdrop-blur-xl border border-slate-800/60 rounded-[32px] flex flex-col shadow-2xl overflow-hidden h-full">
          <div className="px-8 py-6 bg-slate-900/20 border-b border-slate-800/60">
            <h3 className="font-bold text-white text-[15px] tracking-wide">Department Overview</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/40 border-b border-slate-800/60">
                <tr>
                  <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] border-r border-slate-800/60 w-1/3">Department</th>
                  <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] border-r border-slate-800/60 text-center">ROPA Count</th>
                  <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] text-center">High Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {DEPARTMENTS.map((dept, i) => (
                  <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-8 py-5 border-r border-slate-800/60 font-bold text-white">{dept.name === 'Marketing' || dept.name === 'IT' ? dept.name : ''}</td>
                    <td className="px-8 py-5 border-r border-slate-800/60 text-center font-mono text-slate-400">{dept.count}</td>
                    <td className="px-8 py-5 text-center font-mono text-slate-400">{dept.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Pending Compliance Review */}
        <div className="bg-[#0b1429]/30 backdrop-blur-xl border border-slate-800/60 rounded-[32px] flex flex-col shadow-2xl overflow-hidden h-full">
          <div className="px-8 py-6 bg-slate-900/20 border-b border-slate-800/60 flex justify-between items-center">
            <h3 className="font-bold text-white text-[15px] tracking-wide">ROPA Pending Compliance Review</h3>
            <button 
              onClick={onNavigateToRopa}
              className="bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-xl transition-all text-[11px] font-bold uppercase tracking-widest"
            >
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/40 border-b border-slate-800/60">
                <tr>
                  <th className="py-5 px-6 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] border-r border-slate-800/60 w-[35%]">Activity Name</th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] border-r border-slate-800/60 text-center">Department</th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] border-r border-slate-800/60 text-center">Risk</th>
                  <th className="py-5 px-6 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] text-center w-24">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {PENDING.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                    <td className="px-6 py-5 border-r border-slate-800/60 font-bold text-white">{i === 1 ? 'xxxx' : ''}</td>
                    <td className="px-6 py-5 border-r border-slate-800/60 text-center text-slate-400 font-medium">{p.dept}</td>
                    <td className="px-6 py-5 border-r border-slate-800/60 text-center text-slate-400 font-medium">{p.risk}</td>
                    <td className="px-6 py-3 text-center">
                       <button 
                         className="px-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-blue-900/20 active:scale-95 opacity-0 group-hover:opacity-100"
                         onClick={onNavigateToRopa}
                       >
                         Review
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}