'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Save, Send, ShieldCheck, Database, Globe, UserCheck } from 'lucide-react';

export function RopaModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [riskLevel, setRiskLevel] = useState('Low');

  // State สำหรับมาตรการความปลอดภัย (Step 2)
  const [measures, setMeasures] = useState([
    { label: 'มาตรการเชิงองค์กร', active: false, detail: '' },
    { label: 'มาตรการเชิงเทคนิค', active: false, detail: '' },
    { label: 'มาตรการทางกายภาพ', active: false, detail: '' },
    { label: 'การควบคุมการเข้าถึงข้อมูล', active: false, detail: '' },
    { label: 'การกำหนดหน้าที่ความรับผิดชอบของผู้ใช้งาน', active: false, detail: '' },
    { label: 'มาตรการตรวจสอบย้อนหลัง', active: false, detail: '' },
  ]);

  const toggleMeasure = (index: number) => {
    const newMeasures = [...measures];
    newMeasures[index].active = !newMeasures[index].active;
    if (!newMeasures[index].active) newMeasures[index].detail = ''; 
    setMeasures(newMeasures);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#091833] border border-white/20 rounded-[2rem] w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 rounded-t-[2rem]">
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
            <Database className="text-indigo-400" size={24} />
            Create a new ROPA Record
            <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/30">STEP {step}/2</span>
          </h3>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-xl">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto space-y-10 text-white custom-scrollbar">
          
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-300">
              {/* ข้อมูลพื้นฐาน */}
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-indigo-400 font-bold uppercase tracking-widest pl-1">ข้อมูลผู้ควบคุมข้อมูลส่วนบุคคล</label>
                  <input type="text" placeholder="ระบุชื่อบริษัท หรือหน่วยงาน" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 font-medium pl-1">กิจกรรมประมวลผล</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 font-medium pl-1">วัตถุประสงค์</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium pl-1">ข้อมูลส่วนบุคคลที่จัดเก็บ</label>
                  <input type="text" placeholder="เช่น ชื่อ-นามสกุล, เบอร์โทรศัพท์" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 font-medium pl-1">หมวดหมู่ข้อมูล (ลูกค้า/พนักงาน)</label>
                    <select className="w-full bg-[#0b1429] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500">
                      <option>ลูกค้า</option>
                      <option>พนักงาน</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 font-medium pl-1">ประเภทข้อมูล (ทั่วไป/อ่อนไหว)</label>
                    <select className="w-full bg-[#0b1429] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500">
                      <option>ข้อมูลทั่วไป</option>
                      <option>ข้อมูลอ่อนไหว</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ฐานประมวลผล & ผู้เยาว์ */}
              <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 space-y-6">
                <div className="space-y-2">
                  <label className="text-[13px] text-white/80 font-bold flex items-center gap-2"><UserCheck size={16} className="text-indigo-400" /> ฐานในการประมวลผล</label>
                  <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 resize-none" />
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="text-[13px] text-white/60 font-medium">การขอความยินยอมของผู้เยาว์:</span>
                  {['อายุไม่เกิน 10 ปี', 'อายุ 10 - 20 ปี', 'ไม่มี'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm hover:text-indigo-400 transition-colors">
                      <input type="radio" name="child" className="accent-indigo-500" /> {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* โอนข้อมูลต่างประเทศ */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <h4 className="font-bold text-sm flex items-center gap-2 text-indigo-400"><Globe size={16} /> การส่งหรือโอนข้อมูลต่างประเทศ</h4>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <span className="text-[13px] text-white/60 w-full md:w-1/3">โอนไปต่างประเทศหรือไม่?</span>
                    <div className="flex gap-4 w-full md:w-auto">
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="intl" className="accent-indigo-500" /> ไม่มี</label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="intl" className="accent-indigo-500" /> มี</label>
                    </div>
                    <input type="text" placeholder="ระบุประเทศ" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-in slide-in-from-right-8 duration-300">
              {/* นโยบายการเก็บรักษา */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium">วิธีการเก็บรักษา (Soft/Hard file)</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium">ระยะเวลาจัดเก็บ</label>
                  <input type="text" placeholder="เช่น 10 ปี หลังจากพ้นสภาพ" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none" />
                </div>
              </div>

              {/* มาตรการความปลอดภัย (ตามโจทย์ที่คุณต้องการ) */}
              <div className="space-y-5">
                <h4 className="font-bold text-sm flex items-center gap-2 text-emerald-400"><ShieldCheck size={18} /> มาตรการรักษาความมั่นคงปลอดภัย</h4>
                <div className="grid grid-cols-1 gap-4">
                  {measures.map((m, i) => (
                    <div key={m.label} className={`rounded-2xl border transition-all ${m.active ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-white/5 border-white/10 opacity-50'}`}>
                      <div className="px-5 py-3 border-b border-white/5 flex justify-between items-center">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" checked={m.active} onChange={() => toggleMeasure(i)} className="w-4 h-4 rounded accent-emerald-500" />
                          <span className={`text-[13px] font-bold ${m.active ? 'text-white' : 'text-slate-400'}`}>{m.label}</span>
                        </label>
                        {!m.active && <span className="text-[10px] text-slate-600 font-black uppercase">Disabled</span>}
                      </div>
                      <div className="p-4">
                        <textarea 
                          disabled={!m.active} 
                          value={m.detail}
                          onChange={(e) => {
                            const updated = [...measures];
                            updated[i].detail = e.target.value;
                            setMeasures(updated);
                          }}
                          placeholder={m.active ? `ระบุรายละเอียดของ${m.label}...` : "เลือกมาตรการนี้เพื่อเปิดการกรอกข้อมูล"}
                          className={`w-full min-h-[80px] bg-black/20 rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all ${m.active ? 'text-white' : 'text-transparent'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-bold text-sm mb-4 text-center text-slate-400 uppercase tracking-widest">Final Risk Assessment</h4>
                <div className="flex justify-center gap-4">
                  {['Low', 'Medium', 'High'].map(lvl => (
                    <button 
                      key={lvl} 
                      onClick={() => setRiskLevel(lvl)}
                      className={`px-8 py-3 rounded-2xl border font-bold transition-all ${riskLevel === lvl ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-500'}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex justify-between items-center bg-slate-900 rounded-b-[2rem]">
          {step === 1 ? (
            <div className="w-full flex justify-end gap-3">
              <button onClick={onClose} className="px-6 py-2.5 rounded-xl border border-white/20 text-white/70 hover:bg-white/5 transition-all text-sm font-bold uppercase"><Save size={16} className="inline mr-2" /> Save Draft</button>
              <button onClick={() => setStep(2)} className="px-8 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg font-bold text-sm uppercase flex items-center gap-2 transition-all">Next <ChevronRight size={18} /></button>
            </div>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="px-6 py-2.5 rounded-xl border border-white/20 text-white/70 hover:bg-white/5 transition-all font-bold text-sm uppercase flex items-center gap-2"><ChevronLeft size={18} /> Back</button>
              <div className="flex gap-3">
                <button onClick={onClose} className="px-6 py-2.5 rounded-xl border border-white/20 text-white/70 hover:bg-white/5 transition-all font-bold text-sm uppercase"><Save size={16} className="inline mr-2" /> Save Draft</button>
                <button onClick={onClose} className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-sm uppercase shadow-lg flex items-center gap-2 transition-all active:scale-95">Submit <Send size={16} /></button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}