'use client';
import { useState, useEffect } from 'react';
import { Search, Filter, Eye } from 'lucide-react';

export function DpoRopaListTab({ onReview }: { onReview: (item: any) => void }) {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/ropa/')
            .then(res => res.json())
            .then(data => setRecords(data));
    }, []);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
                    <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[120px]" />
                </div>
                {/* Header Info */}
                <div className="flex flex-col gap-1 relative z-10">
                    <h2 className="text-4xl font-bold text-white tracking-tight">ROPA Review</h2>
                    <p className="text-slate-500 text-base font-medium uppercase tracking-widest">Compliance Review</p>
                </div>
            </div>

            <div className="bg-[#0b1429]/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            <th className="p-5 text-[11px] font-black uppercase text-slate-500 tracking-widest">Activity</th>
                            <th className="p-5 text-[11px] font-black uppercase text-slate-500 tracking-widest">Controller</th>
                            <th className="p-5 text-[11px] font-black uppercase text-slate-500 tracking-widest text-center">Risk</th>
                            <th className="p-5 text-[11px] font-black uppercase text-slate-500 tracking-widest text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {records.map((item: any) => (
                            <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                                <td className="p-5 font-bold text-white">{item.processing_activity}</td>
                                <td className="p-5 text-sm text-slate-400">{item.controller_name}</td>
                                <td className="p-5 text-center">
                                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black border ${item.risk_level === 'High' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                        }`}>
                                        {item.risk_level}
                                    </span>
                                </td>
                                <td className="p-5 text-right">
                                    <button
                                        onClick={() => onReview(item)}
                                        className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all active:scale-95"
                                    >
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}