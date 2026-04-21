'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SUMMARY = [
  { title: 'Total ROPA', value: '150' },
  { title: 'High Risk', value: '12' },
  { title: 'Medium Risk', value: '45' },
  { title: 'Low Risk', value: '93' }
];

const data = [
  { name: 'Jan', value1: 400, value2: 240 },
  { name: 'Feb', value1: 300, value2: 139 },
  { name: 'Mar', value1: 200, value2: 980 },
  { name: 'Apr', value1: 278, value2: 390 },
  { name: 'May', value1: 189, value2: 480 },
  { name: 'Jun', value1: 239, value2: 380 },
  { name: 'Jul', value1: 349, value2: 430 },
];

export function ViewerDashboardTab() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto relative">
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 relative z-10">
        {SUMMARY.map((s, i) => (
          <div key={i} className="bg-[#0b1429]/40 backdrop-blur-xl border border-slate-800/60 rounded-[24px] p-8 shadow-2xl group hover:border-blue-500/30 transition-all">
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">{s.title}</h3>
            <p className="text-4xl font-black text-white tracking-tighter">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Panel */}
      <div className="bg-[#0b1429]/30 backdrop-blur-xl border border-slate-800/60 rounded-[32px] p-8 min-h-[400px] flex flex-col shadow-2xl relative z-10">
        <h3 className="text-xl font-bold text-white mb-8 tracking-tight">สถิติรายเดือน</h3>
        <div className="flex-1 w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="value1" stroke="#3b82f6" strokeWidth={4} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="value2" stroke="#ffffff" strokeWidth={4} dot={{ r: 4, fill: '#ffffff', strokeWidth: 0 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
