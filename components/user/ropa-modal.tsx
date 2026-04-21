import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function RopaModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#091833] border border-white/20 rounded-[2rem] w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center shrink-0">
          <h3 className="text-2xl font-bold text-white tracking-tight">Create a new ROPA Record</h3>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8 text-white relative">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="space-y-1.5">
                <label className="text-[13px] text-white/80 font-medium pl-1">ข้อมูลเกี่ยวกับผู้ควบคุมข้อมูลส่วนบุคคล</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium pl-1">กิจกรรมประมวลผล</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium pl-1">วัตถุประสงค์ของการประมวลผล</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] text-white/80 font-medium pl-1">ข้อมูลส่วนบุคคลที่จัดเก็บ</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium pl-1">หมวดหมู่ของข้อมูล (ข้อมูลลูกค้า/คู่ค้า/ผู้ติดต่อ/พนักงาน)</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white appearance-none transition-all">
                    <option className="text-black">Please select</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium pl-1">ประเภทของข้อมูล (ข้อมูลทั่วไป/ข้อมูลอ่อนไหว)</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white appearance-none transition-all">
                    <option className="text-black">Please select</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium pl-1">วิธีการได้มาซึ่งข้อมูล (soft file/hard copy)</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 font-medium pl-1">แหล่งที่ได้มาซึ่งข้อมูล</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white appearance-none transition-all">
                    <option className="text-black">จากแหล่งอื่น</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-[13px] text-white/80 font-medium pl-1">ฐานในการประมวลผล</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all resize-none" />
              </div>

              <div className="flex flex-wrap items-center gap-6 py-2">
                <span className="text-[13px] text-white/80 font-medium pl-1">การขอความยินยอมของผู้เยาว์</span>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"></div> อายุไม่เกิน 10 ปี
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"></div> อายุ 10 - 20 ปี
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"></div> ไม่มี
                </label>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="font-semibold text-sm">ส่งหรือโอนข้อมูลส่วนบุคคลไปยังต่างประเทศ</h4>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[13px] text-white/80 min-w-[280px]">มีการส่งหรือโอนข้อมูลไปต่างประเทศหรือไม่ (ถ้ามีโปรดระบุประเทศปลายทาง)</span>
                  <div className="flex items-center gap-4 shrink-0">
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"></div> ไม่มี
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"></div> มี
                    </label>
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-sm text-white/50 shrink-0">ระบุประเทศปลายทาง</span>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-500 text-sm" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[13px] text-white/80 min-w-[280px]">เป็นการส่งข้อมูลไปประเทศของกลุ่มบริษัทเครือหรือไม่ (ถ้ามีโปรดระบุชื่อบริษัท)</span>
                  <div className="flex items-center gap-4 shrink-0">
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"></div> ไม่มี
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"></div> มี
                    </label>
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-sm text-white/50 shrink-0">ระบุชื่อบริษัท</span>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-500 text-sm" />
                  </div>
                </div>
                
                <div className="space-y-1.5 pt-2">
                  <label className="text-[13px] text-white/80 pl-1">วิธีการโอนข้อมูล</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-indigo-500 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 pl-1">มาตรฐานการคุ้มครองข้อมูลส่วนบุคคลของประเทศปลายทาง</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-indigo-500 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] text-white/80 pl-1">ข้อยกเว้นตามมาตรา 28 ( เช่น ปฏิบัติตามกฎหมาย ความยินยอม ปฏิบัติตามสัญญา ป้องกันอันตรายต่อชีวิต ประโยชน์สาธารณะที่สำคัญ)</label>
                  <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-indigo-500 text-sm resize-none" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">นโยบายการเก็บรักษาข้อมูลส่วนบุคคล</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 pl-1">ประเภทของข้อมูลที่จัดเก็บ (soft file / hard copy)</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 pl-1">วิธีการเก็บรักษาข้อมูล</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 pl-1">ระยะเวลาการเก็บรักษาข้อมูลส่วนบุคคล</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] text-white/80 pl-1">สิทธิและวิธีการเข้าถึงข้อมูลส่วนบุคคล (ระบุเงื่อนไขการใช้สิทธิและวิธีการ)</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                  </div>
                </div>
                <div className="space-y-1.5 w-full md:w-1/2 md:pr-2.5">
                  <label className="text-[13px] text-white/80 pl-1">วิธีการลบหรือทำลายข้อมูลส่วนบุคคลเมื่อสิ้นสุดระยะเวลาจัดเก็บ</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all" />
                </div>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-white/10">
                <label className="text-[13px] text-white/80 font-medium pl-1">การใช้หรือเปิดเผยข้อมูลส่วนบุคคลที่ได้รับยกเว้นไม่ต้องขอความยินยอม (ระบุให้สอดคล้องฐานในการประมวลผล)</label>
                <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all resize-none" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] text-white/80 font-medium pl-1">การปฏิเสธคำขอหรือคัดค้านการใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล (*จดข้อมูลเมื่อมีการปฏิเสธการใช้สิทธิ)</label>
                <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all resize-none" />
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="font-semibold text-sm">คำอธิบายเกี่ยวกับมาตรการรักษาความมั่นคงปลอดภัย</h4>
                <div className="space-y-3">
                  {['มาตรการเชิงองค์กร', 'มาตรการเชิงเทคนิค', 'มาตรการทางกายภาพ', 'การควบคุมการเข้าถึงข้อมูล', 'การกำหนดหน้าที่ความรับผิดชอบของผู้ใช้งาน', 'มาตรการตรวจสอบย้อนหลัง'].map(label => (
                    <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 relative overflow-hidden">
                       <span className="text-[13px] text-white/80">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-sm mb-4">Risk Level</h4>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-wrap gap-8 justify-around">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center"></div>
                    <span className="font-medium tracking-wide text-sm">Low</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center"></div>
                    <span className="font-medium tracking-wide text-sm">Medium</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center"></div>
                    <span className="font-medium tracking-wide text-sm">High</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/10 flex justify-between items-center bg-white/5 shrink-0 rounded-b-[2rem]">
          {step === 1 ? (
             <div className="w-full flex justify-end gap-3 sm:gap-4">
               <button onClick={onClose} className="px-6 sm:px-8 py-2.5 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition-colors font-medium text-[15px] bg-[#8A95A8]">
                 Save Draft
               </button>
               <button onClick={() => setStep(2)} className="px-6 sm:px-8 py-2.5 rounded-xl border border-white/20 text-white transition-colors font-medium text-[15px] flex items-center gap-2 bg-[#8A95A8]">
                 Next <ChevronRight size={18} />
               </button>
             </div>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="px-5 py-2.5 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition-colors font-medium text-[15px] flex items-center gap-2 bg-[#8A95A8]">
                 <ChevronLeft size={18} /> ย้อนกลับ
               </button>
               <div className="flex gap-3 sm:gap-4">
                 <button onClick={onClose} className="px-6 sm:px-8 py-2.5 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition-colors font-medium text-sm hidden sm:block bg-[#8A95A8]">
                   Save Draft
                 </button>
                 <button onClick={onClose} className="px-6 sm:px-8 py-2.5 rounded-xl border border-white/20 text-white transition-colors font-medium text-[15px] bg-[#8A95A8]">
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