import { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2, CheckCircle2, XCircle, Clock, ChevronDown } from 'lucide-react';
import { ManagerReviewModal } from './review-modal';
import { RejectReasonModal } from './reject-reason-modal';

const RECORDS = [
  { id: 'ระบบจัดการข้อมูลพนักงาน xxx-01', cat: 'xxxx', type: 'xxx', status: 'Completed', date: '2026-05-05' },
  { id: 'ระบบจัดการxxxx xxx-02', cat: 'xxxx', type: 'xxx', status: 'Pending', date: '2026-05-05' },
  { id: 'ระบบxxxx xxx-03', cat: 'xxxx', type: 'xxx', status: 'Reject', date: '2026-05-05' },
  { id: 'ระบบxxxx xxx-04', cat: 'xxxx', type: 'xxx', status: 'Completed', date: '2026-05-05' },
];

export function ManagerRopaTab() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto relative h-full flex flex-col">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Header Panel */}
      <div className="bg-[#0b1429]/40 backdrop-blur-xl border border-slate-800/60 rounded-[32px] p-8 shadow-2xl flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
        <div>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-2">ROPA Records</h2>
          <p className="text-slate-500 text-sm font-medium">บันทึกกิจกรรมการประมวลผลข้อมูลส่วนบุคคล<br/>(Record of Processing Activities)</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-6 py-2.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest">
            Import
          </button>
          <button className="bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-6 py-2.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest">
            Export
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full transition-all text-xs font-bold shadow-lg shadow-blue-900/20 active:scale-95 tracking-widest uppercase shrink-0">
            <Plus size={16} /> ROPA Records
          </button>
        </div>
      </div>

      {/* Main Table Panel */}
      <div className="bg-[#0b1429]/30 backdrop-blur-xl border border-slate-800/60 rounded-[32px] flex flex-col shadow-2xl flex-1 relative z-10 overflow-hidden">
        {/* Toolbar */}
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

        {/* Table */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900/40 border-b border-slate-800/60">
              <tr>
                <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em]">Record ID / ชื่อ</th>
                <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em]">หมวดหมู่</th>
                <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em]">ประเภทข้อมูล</th>
                <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em]">สถานะ</th>
                <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em]">แก้ไขล่าสุด</th>
                <th className="py-5 px-8 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em] text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {RECORDS.map((rec, i) => (
                <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                  <td className="px-8 py-5">
                    <p className="font-bold text-white leading-tight">{rec.id.split(' ')[0]}</p>
                    <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase">{rec.id.split(' ')[1]}</p>
                  </td>
                  <td className="px-8 py-5 font-bold text-slate-400">{rec.cat}</td>
                  <td className="px-8 py-5 font-bold text-slate-400">{rec.type}</td>
                  <td className="px-8 py-5">
                    <div className={`inline-flex flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider ${
                      rec.status === 'Completed' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
                      rec.status === 'Reject' ? 'border-red-500/30 bg-red-500/10 text-red-400' :
                      'border-yellow-500/30 bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {rec.status === 'Completed' && <CheckCircle2 size={12} />}
                      {rec.status === 'Reject' && <XCircle size={12} />}
                      {rec.status === 'Pending' && <Clock size={12} />}
                      {rec.status}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[11px] font-mono text-slate-400 tracking-tighter">{rec.date}</td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-slate-500 hover:text-white transition-colors" onClick={() => setIsReviewOpen(true)}>
                        <div className="p-2 bg-slate-800 border border-slate-700/50 rounded-lg"><Search size={16} /></div>
                      </button>
                      <button className="text-slate-500 hover:text-white transition-colors">
                        <div className="p-2 bg-slate-800 border border-slate-700/50 rounded-lg"><Edit2 size={16} /></div>
                      </button>
                      <button className="text-slate-500 hover:text-red-400 transition-colors" onClick={() => setIsDeleteOpen(true)}>
                        <div className="p-2 bg-slate-800 border border-slate-700/50 rounded-lg"><Trash2 size={16} /></div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Toolbar */}
        <div className="p-6 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 mt-auto bg-slate-900/30 rounded-b-[32px] font-bold uppercase tracking-widest">
          <p className="font-medium">แสดง 5 จาก 1,250</p>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-800 hover:bg-slate-800 transition-all text-slate-400">&lt;&lt;</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-600 text-white font-black shadow-lg shadow-blue-900/20">1</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-800 hover:bg-slate-800 transition-all">2</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-800 hover:bg-slate-800 transition-all">3</button>
            <button className="w-12 h-9 flex items-center justify-center rounded-xl border border-slate-800 hover:bg-slate-800 transition-all">...250</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-800 hover:bg-slate-800 transition-all text-slate-400">&gt;&gt;</button>
          </div>
        </div>
      </div>

      {isReviewOpen && <ManagerReviewModal onClose={() => setIsReviewOpen(false)} />}
      {isDeleteOpen && <RejectReasonModal title="เหตุผลในการลบ" onClose={() => setIsDeleteOpen(false)} />}
    </div>
  );
}