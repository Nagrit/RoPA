import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function RopaModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  
  // States for radio buttons
  const [minorConsent, setMinorConsent] = useState<string | null>(null);
  const [transferAbroad, setTransferAbroad] = useState<string | null>(null);
  const [transferAffiliate, setTransferAffiliate] = useState<string | null>(null);
  const [riskLevel, setRiskLevel] = useState<string | null>(null);

  const renderRadio = (checked: boolean, onClick: () => void, label: string) => (
    <label className="flex items-center gap-2 cursor-pointer text-sm group" onClick={onClick}>
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${checked ? 'border-blue-500 border-2' : 'border-white/30 group-hover:border-white/50'}`}>
        {checked && <div className="w-2 h-2 rounded-full bg-blue-500" />}
      </div>
      <span className={checked ? 'text-blue-400 font-medium' : 'text-slate-300'}>{label}</span>
    </label>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#091833]/80 backdrop-blur-md">
      <div className="bg-[#0b1429] border border-slate-700/60 rounded-[2rem] w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800/60 flex justify-between items-center shrink-0">
          <h3 className="text-2xl font-bold text-white tracking-tight">Create a new ROPA Record</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors bg-slate-800/50 hover:bg-slate-700 p-2 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8 text-white relative">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="space-y-1.5">
                <label className="text-[13px] text-slate-300 font-medium pl-1">ข้อมูลเกี่ยวกับผู้ควบคุมข้อมูลส่วนบุคคล</label>
                <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-300 font-medium pl-1">กิจกรรมประมวลผล</label>
                  <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-300 font-medium pl-1">วัตถุประสงค์ของการประมวลผล</label>
                  <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] text-slate-300 font-medium pl-1">ข้อมูลส่วนบุคคลที่จัดเก็บ</label>
                <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-300 font-medium pl-1">หมวดหมู่ของข้อมูล (ข้อมูลลูกค้า/คู่ค้า/ผู้ติดต่อ/พนักงาน)</label>
                  <select className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 appearance-none transition-all font-medium">
                    <option className="bg-[#0b1429]">Please select</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-300 font-medium pl-1">ประเภทของข้อมูล (ข้อมูลทั่วไป/ข้อมูลอ่อนไหว)</label>
                  <select className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 appearance-none transition-all font-medium">
                    <option className="bg-[#0b1429]">Please select</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-300 font-medium pl-1">วิธีการได้มาซึ่งข้อมูล (soft file/hard copy)</label>
                  <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-300 font-medium pl-1">แหล่งที่ได้มาซึ่งข้อมูล</label>
                  <select className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 appearance-none transition-all font-medium">
                    <option className="bg-[#0b1429]">จากแหล่งอื่น</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-[13px] text-slate-300 font-medium pl-1">ฐานในการประมวลผล</label>
                <textarea rows={3} className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all resize-none font-medium" />
              </div>

              <div className="flex flex-wrap items-center gap-6 py-2">
                <span className="text-[13px] text-slate-300 font-medium pl-1">การขอความยินยอมของผู้เยาว์</span>
                {renderRadio(minorConsent === '<10', () => setMinorConsent('<10'), 'อายุไม่เกิน 10 ปี')}
                {renderRadio(minorConsent === '10-20', () => setMinorConsent('10-20'), 'อายุ 10 - 20 ปี')}
                {renderRadio(minorConsent === 'none', () => setMinorConsent('none'), 'ไม่มี')}
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/60">
                <h4 className="font-semibold text-sm text-white">ส่งหรือโอนข้อมูลส่วนบุคคลไปยังต่างประเทศ</h4>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[13px] text-slate-400 min-w-[280px]">มีการส่งหรือโอนข้อมูลไปต่างประเทศหรือไม่ (ถ้ามีโปรดระบุประเทศปลายทาง)</span>
                  <div className="flex items-center gap-4 shrink-0">
                    {renderRadio(transferAbroad === 'no', () => setTransferAbroad('no'), 'ไม่มี')}
                    {renderRadio(transferAbroad === 'yes', () => setTransferAbroad('yes'), 'มี')}
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-sm text-slate-500 shrink-0">ระบุประเทศปลายทาง</span>
                    <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[13px] text-slate-400 min-w-[280px]">เป็นการส่งข้อมูลไปประเทศของกลุ่มบริษัทเครือหรือไม่ (ถ้ามีโปรดระบุชื่อบริษัท)</span>
                  <div className="flex items-center gap-4 shrink-0">
                    {renderRadio(transferAffiliate === 'no', () => setTransferAffiliate('no'), 'ไม่มี')}
                    {renderRadio(transferAffiliate === 'yes', () => setTransferAffiliate('yes'), 'มี')}
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-sm text-slate-500 shrink-0">ระบุชื่อบริษัท</span>
                    <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white" />
                  </div>
                </div>
                
                <div className="space-y-1.5 pt-2">
                  <label className="text-[13px] text-slate-400 pl-1">วิธีการโอนข้อมูล</label>
                  <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-400 pl-1">มาตรฐานการคุ้มครองข้อมูลส่วนบุคคลของประเทศปลายทาง</label>
                  <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-slate-400 pl-1">ข้อยกเว้นตามมาตรา 28 ( เช่น ปฏิบัติตามกฎหมาย ความยินยอม ปฏิบัติตามสัญญา ป้องกันอันตรายต่อชีวิต ประโยชน์สาธารณะที่สำคัญ)</label>
                  <textarea rows={2} className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white resize-none" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-white">นโยบายการเก็บรักษาข้อมูลส่วนบุคคล</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-slate-300 pl-1">ประเภทของข้อมูลที่จัดเก็บ (soft file / hard copy)</label>
                    <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-slate-300 pl-1">วิธีการเก็บรักษาข้อมูล</label>
                    <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-slate-300 pl-1">ระยะเวลาการเก็บรักษาข้อมูลส่วนบุคคล</label>
                    <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-slate-300 pl-1">สิทธิและวิธีการเข้าถึงข้อมูลส่วนบุคคล (ระบุเงื่อนไขการใช้สิทธิและวิธีการ)</label>
                    <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-1.5 w-full md:w-1/2 md:pr-2.5">
                  <label className="text-[13px] text-slate-300 pl-1">วิธีการลบหรือทำลายข้อมูลส่วนบุคคลเมื่อสิ้นสุดระยะเวลาจัดเก็บ</label>
                  <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all font-medium" />
                </div>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-slate-800/60">
                <label className="text-[13px] text-slate-300 font-medium pl-1">การใช้หรือเปิดเผยข้อมูลส่วนบุคคลที่ได้รับยกเว้นไม่ต้องขอความยินยอม (ระบุให้สอดคล้องฐานในการประมวลผล)</label>
                <textarea rows={2} className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all resize-none font-medium" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] text-slate-300 font-medium pl-1">การปฏิเสธคำขอหรือคัดค้านการใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล (*จดข้อมูลเมื่อมีการปฏิเสธการใช้สิทธิ)</label>
                <textarea rows={2} className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 transition-all resize-none font-medium" />
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/60">
                <h4 className="font-semibold text-sm text-white">คำอธิบายเกี่ยวกับมาตรการรักษาความมั่นคงปลอดภัย</h4>
                <div className="space-y-3">
                  {[
                    'มาตรการเชิงองค์กร', 
                    'มาตรการเชิงเทคนิค', 
                    'มาตรการทางกายภาพ', 
                    'การควบคุมการเข้าถึงข้อมูล', 
                    'การกำหนดหน้าที่ความรับผิดชอบของผู้ใช้งาน', 
                    'มาตรการตรวจสอบย้อนหลัง'
                  ].map(label => (
                    <div key={label} className="space-y-1.5">
                      <label className="text-[13px] text-slate-400 pl-1 block">{label}</label>
                      <input type="text" className="w-full bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-slate-200 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 pb-4">
                <h4 className="font-semibold text-sm text-white mb-4">Risk Level</h4>
                <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 flex flex-wrap gap-8 justify-around">
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setRiskLevel('low')}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${riskLevel === 'low' ? 'border-emerald-500' : 'border-slate-600 group-hover:border-slate-400'}`}>
                      {riskLevel === 'low' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />}
                    </div>
                    <span className={`font-medium tracking-wide text-sm ${riskLevel === 'low' ? 'text-emerald-400' : 'text-slate-300'}`}>Low</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setRiskLevel('medium')}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${riskLevel === 'medium' ? 'border-yellow-500' : 'border-slate-600 group-hover:border-slate-400'}`}>
                      {riskLevel === 'medium' && <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />}
                    </div>
                    <span className={`font-medium tracking-wide text-sm ${riskLevel === 'medium' ? 'text-yellow-400' : 'text-slate-300'}`}>Medium</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setRiskLevel('high')}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${riskLevel === 'high' ? 'border-red-500' : 'border-slate-600 group-hover:border-slate-400'}`}>
                      {riskLevel === 'high' && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                    </div>
                    <span className={`font-medium tracking-wide text-sm ${riskLevel === 'high' ? 'text-red-400' : 'text-slate-300'}`}>High</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800/60 flex justify-between items-center bg-slate-900/20 shrink-0 rounded-b-[2rem]">
          {step === 1 ? (
             <div className="w-full flex justify-end gap-3 sm:gap-4">
               <button onClick={onClose} className="px-6 sm:px-8 py-2.5 rounded-xl border border-slate-700/50 text-slate-300 hover:bg-slate-800 bg-slate-800/50 transition-colors font-medium text-[15px]">
                 Save Draft
               </button>
               <button onClick={() => setStep(2)} className="px-6 sm:px-8 py-2.5 rounded-xl text-white transition-colors font-bold text-[15px] flex items-center gap-2 bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20 active:scale-95">
                 Next <ChevronRight size={18} />
               </button>
             </div>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="px-5 py-2.5 rounded-xl border border-slate-700/50 text-slate-300 hover:bg-slate-800 bg-slate-800/50 transition-colors font-medium text-[15px] flex items-center gap-1">
                 <ChevronLeft size={18} /> ย้อนกลับ
               </button>
               <div className="flex gap-3 sm:gap-4">
                 <button onClick={onClose} className="px-6 sm:px-8 py-2.5 rounded-xl border border-slate-700/50 text-slate-300 hover:bg-slate-800 bg-slate-800/50 transition-colors font-medium text-[15px] hidden sm:block">
                   Save Draft
                 </button>
                 <button onClick={onClose} className="px-6 sm:px-8 py-2.5 rounded-xl text-white transition-all font-bold text-[15px] bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20 active:scale-95">
                   Submit for Approval
                 </button>
               </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
