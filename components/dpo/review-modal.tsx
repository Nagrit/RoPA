'use client';

import { useState } from 'react';
import { 
  X, CheckCircle2, AlertCircle, MessageSquare, 
  ShieldCheck, Database, Globe, Clock, 
  UserCheck, HardDrive, ShieldAlert 
} from 'lucide-react';

export function DpoReviewModal({ onClose, data }: { onClose: () => void; data: any }) {
  const [comment, setComment] = useState('');

  // ฟังก์ชันจำลองการตัดสินใจ
  const handleAction = (type: 'approve' | 'reject') => {
    if (type === 'reject' && !comment) {
      alert("กรุณาระบุเหตุผลในช่องความเห็นก่อนส่งกลับ");
      return;
    }
    alert(type === 'approve' ? "อนุมัติเรียบร้อย" : "ส่งกลับไปแก้ไขเรียบร้อย");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-[#091833] border border-white/20 rounded-[2rem] w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header - ตามสไตล์ RopaModal */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 rounded-t-[2rem]">
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
            <ShieldCheck className="text-emerald-400" size={24} />
            DPO Compliance Review
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30 font-black uppercase tracking-widest">
              Final Step
            </span>
          </h3>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-xl">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto space-y-8 text-white custom-scrollbar bg-[#091833]">
          
          {/* ส่วนที่ 1: ข้อมูลพื้นฐานกิจกรรม */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
                <Database size={14} /> ข้อมูลทั่วไป
              </h4>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                <div>
                  <p className="text-[10px] text-white/40 font-bold uppercase mb-1">ผู้ควบคุมข้อมูลส่วนบุคคล</p>
                  <p className="text-sm font-semibold">{data.controllerName}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 font-bold uppercase mb-1">กิจกรรม / วัตถุประสงค์</p>
                  <p className="text-sm">{data.processingActivity}</p>
                  <p className="text-xs text-white/60 mt-1 italic">{data.purpose}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
                <UserCheck size={14} /> หมวดหมู่ข้อมูล & ประมวลผล
              </h4>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase">หมวดหมู่/ประเภท</p>
                    <p className="text-xs font-bold text-indigo-300">{data.dataCategory} / {data.dataType}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase">ความยินยอมผู้เยาว์</p>
                    <p className="text-xs">{data.childConsent || 'ไม่มี'}</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-[10px] text-white/40 font-bold uppercase mb-1">ฐานในการประมวลผล</p>
                  <p className="text-xs leading-relaxed text-white/80">{data.legalBasis}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ส่วนที่ 2: การเก็บรักษาและโอนข้อมูล */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <HardDrive size={14} /> การจัดเก็บและโอนข้อมูล
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-[9px] text-white/40 font-bold uppercase flex items-center gap-2 mb-1"><Clock size={12}/> ระยะเวลาจัดเก็บ</p>
                <p className="text-xs font-bold">{data.retentionPeriod}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-[9px] text-white/40 font-bold uppercase flex items-center gap-2 mb-1"><Database size={12}/> วิธีการเก็บรักษา</p>
                <p className="text-xs font-bold">{data.storageMethod}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-[9px] text-white/40 font-bold uppercase flex items-center gap-2 mb-1"><Globe size={12}/> โอนต่างประเทศ</p>
                <p className="text-xs font-bold text-blue-400">
                  {data.internationalTransfer === 'มี' ? data.transferCountry : 'ไม่มี'}
                </p>
              </div>
            </div>
          </div>

          {/* ส่วนที่ 3: มาตรการความปลอดภัย (ดึงมาจาก Step 2 ของ RopaModal) */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <ShieldCheck size={14} /> มาตรการความปลอดภัย
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.measures?.filter((m: any) => m.active).map((m: any, idx: number) => (
                <div key={idx} className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl group transition-all hover:bg-emerald-500/10">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-tight">{m.label}</p>
                  </div>
                  <p className="text-xs text-white/60 pl-6 leading-relaxed italic">
                    {m.detail || 'ไม่มีการระบุรายละเอียด'}
                  </p>
                </div>
              ))}
              {(!data.measures || data.measures.filter((m: any) => m.active).length === 0) && (
                <div className="col-span-full py-4 text-center border border-dashed border-white/10 rounded-2xl text-white/20 text-xs font-bold uppercase tracking-widest">
                  No security measures specified
                </div>
              )}
            </div>
          </div>

          {/* ส่วนที่ 4: Risk Level */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-8">
            <p className="text-[11px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
              <ShieldAlert size={14}/> Risk Level: 
            </p>
            <span className={`px-8 py-2 rounded-xl border font-black text-sm uppercase tracking-tighter ${
              data.riskLevel === 'High' ? 'bg-rose-500/20 border-rose-500/40 text-rose-400 shadow-[0_0_20px_-5px_rgba(244,63,94,0.3)]' : 
              data.riskLevel === 'Medium' ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' :
              'bg-blue-500/20 border-blue-500/40 text-blue-400'
            }`}>
              {data.riskLevel}
            </span>
          </div>

          {/* ส่วนแสดงความเห็นของ DPO */}
          <div className="pt-6 space-y-3">
            <label className="text-[11px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <MessageSquare size={14} /> DPO Review Comments
            </label>
            <textarea 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="ระบุข้อความหากต้องการให้แก้ไข หรือบันทึกข้อเสนอแนะเพิ่มเติม..."
              className="w-full h-24 bg-black/40 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm placeholder:text-white/20"
            />
          </div>
        </div>

        {/* Footer - สไตล์เดียวกับ RopaModal */}
        <div className="p-6 border-t border-white/10 flex justify-between items-center bg-slate-900 rounded-b-[2rem]">
          <button 
            onClick={onClose} 
            className="px-6 py-2.5 rounded-xl border border-white/20 text-white/70 hover:bg-white/5 transition-all text-sm font-bold uppercase"
          >
            Cancel
          </button>
          
          <div className="flex gap-3">
            <button 
              onClick={() => handleAction('reject')}
              className="px-6 py-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-all text-sm font-bold uppercase flex items-center gap-2"
            >
              <ShieldAlert size={16} /> Reject
            </button>
            <button 
              onClick={() => handleAction('approve')}
              className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm uppercase shadow-lg shadow-emerald-900/20 flex items-center gap-2 transition-all active:scale-95"
            >
              <CheckCircle2 size={16} /> Approve Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}