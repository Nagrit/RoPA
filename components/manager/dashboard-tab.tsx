import { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2, CheckCircle2, XCircle, Clock, ChevronDown } from 'lucide-react';
import { ManagerReviewModal } from './review-modal';

const SUMMARY = [
  { title: 'All', value: '150' },
  { title: 'Completed', value: '45' },
  { title: 'Pending', value: '100' },
  { title: 'Reject', value: '5' }
];

const PENDING_REQUESTS = [
  { id: 1, title: 'xxxx', desc: 'xxxxxxxxx', status: 'Pending' },
];

const ALL_REQUESTS = [
  { id: 1, title: 'xxxx', desc: 'xxxxxxxxx', status: 'Completed', text: 'อนุมัติโดย xxxx เมื่อ xx เดือน xx ปี xxxx , xx:xx' },
  { id: 2, title: 'xxxx', desc: 'xxxxxxxxx', status: 'Reject', text: 'ปฏิเสธโดย xxxx เมื่อ xx เดือน xx ปี xxxx , xx:xx', rejectReason: 'หมายเหตุ * xxxxxxxxxxxxxx' },
];

export function ManagerDashboardTab() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl font-bold text-white tracking-tight">Hello,</h2>
          <p className="text-slate-500 text-base font-medium">Text</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-6 py-2.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest">
            Import
          </button>
          <button className="bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-6 py-2.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest">
            Export
          </button>
          <button 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full transition-all text-xs font-bold shadow-lg shadow-blue-900/20 active:scale-95 tracking-widest uppercase shrink-0"
          >
            <Plus size={16} /> ROPA Records
          </button>
        </div>
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

      {/* Pending Requests Panel */}
      <div className="bg-[#0b1429]/30 backdrop-blur-xl border border-slate-800/60 rounded-[32px] flex flex-col shadow-2xl relative z-10 overflow-hidden">
        <div className="px-8 py-6 bg-slate-900/20 border-b border-slate-800/60">
          <h3 className="font-bold text-white text-[15px] tracking-wide">คำขอรออนุมัติ</h3>
        </div>
        
        <div className="divide-y divide-slate-800/40">
          {PENDING_REQUESTS.map(req => (
            <div key={req.id} className="p-8 hover:bg-slate-800/20 transition-colors relative group cursor-pointer" onClick={() => setIsReviewOpen(true)}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg text-white leading-tight">{req.title}</h4>
                  <p className="text-slate-400 text-[13px] mt-1 font-medium">{req.desc}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20 text-[10px] font-black uppercase tracking-wider text-yellow-500">
                  <Clock size={12} />
                  {req.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Requests Panel */}
      <div className="bg-[#0b1429]/30 backdrop-blur-xl border border-slate-800/60 rounded-[32px] flex flex-col shadow-2xl relative z-10 overflow-hidden">
        <div className="p-8 border-b border-slate-800/60 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-900/20">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="ค้นหา.............." 
              className="w-full bg-slate-900/40 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:ring-1 ring-blue-500/50 transition-all font-medium"
            />
          </div>
          
          <button className="flex items-center justify-between w-full sm:w-48 gap-2 bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 px-5 py-3 rounded-xl transition-all text-xs font-bold text-slate-300 uppercase tracking-widest shrink-0">
            <span className="flex items-center gap-2"><Filter size={14} className="text-emerald-400" /> All</span>
            <ChevronDown size={14} className="opacity-30" />
          </button>
        </div>

        <div className="px-8 py-6 bg-slate-900/20 border-b border-slate-800/60">
          <h3 className="font-bold text-white text-[15px] tracking-wide">คำขอทั้งหมด 20 รายการ</h3>
        </div>
        
        <div className="divide-y divide-slate-800/40">
          {ALL_REQUESTS.map(req => (
            <div key={req.id} className="p-8 hover:bg-slate-800/20 transition-colors relative group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-lg text-white leading-tight">{req.title}</h4>
                  <p className="text-slate-400 text-[13px] mt-1 font-medium">{req.desc}</p>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider ${
                  req.status === 'Completed' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
                  req.status === 'Reject' ? 'border-red-500/30 bg-red-500/10 text-red-400' :
                  'border-slate-800 bg-slate-900 text-slate-500'
                }`}>
                  {req.status === 'Completed' && <CheckCircle2 size={12} />}
                  {req.status === 'Reject' && <XCircle size={12} />}
                  {req.status}
                </div>
              </div>

              <div className="text-[13px] text-slate-500 font-medium">
                <p>{req.text}</p>
                {req.rejectReason && <p className="mt-2 text-red-400/80 italic">{req.rejectReason}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isReviewOpen && <ManagerReviewModal onClose={() => setIsReviewOpen(false)} />}
    </div>
  );
}
