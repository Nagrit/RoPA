'use client';

import { useState, useRef } from 'react';
import { X, ChevronLeft } from 'lucide-react';

// Read-only modal matching exactly to manager's modal, but without reject features
export function ViewerReviewModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#e4e5ea] border border-gray-300 rounded-[2rem] w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        <div className="p-6 border-b border-gray-300/50 flex justify-between items-center shrink-0">
          <h3 className="text-2xl font-black text-gray-900 tracking-tight">ROPA Record</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div ref={scrollRef} className="p-6 sm:p-8 overflow-y-auto space-y-8 relative text-gray-800 pointer-events-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1.5"><label className="text-[13px] font-bold pl-1">ข้อมูลเกี่ยวกับผู้ควบคุมข้อมูลส่วนบุคคล</label><div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5"><label className="text-[13px] font-bold pl-1">กิจกรรมประมวลผล</label><div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" /></div>
                <div className="space-y-1.5"><label className="text-[13px] font-bold pl-1">วัตถุประสงค์ของการประมวลผล</label><div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" /></div>
              </div>
              <div className="space-y-1.5"><label className="text-[13px] font-bold pl-1">ข้อมูลส่วนบุคคลที่จัดเก็บ</label><div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" /></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold pl-1">หมวดหมู่ของข้อมูล (ข้อมูลลูกค้า/คู่ค้า/ผู้ติดต่อ/พนักงาน)</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold pl-1">ประเภทของข้อมูล (ข้อมูลทั่วไป/ข้อมูลอ่อนไหว)</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold pl-1">วิธีการได้มาซึ่งข้อมูล (soft file/hard copy)</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold pl-1">แหล่งที่ได้มาซึ่งข้อมูล</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10 flex items-center"><span className="text-sm font-medium">จากแหล่งอื่น</span></div>
                </div>
              </div>

              <div className="space-y-1.5 pt-2"><label className="text-[13px] font-bold pl-1">ฐานในการประมวลผล</label><div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-20" /></div>

              <div className="flex flex-wrap items-center gap-6 py-2">
                <span className="text-[13px] font-bold pl-1">การขอความยินยอมของผู้เยาว์</span>
                <label className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> อายุไม่เกิน 10 ปี</label>
                <label className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> อายุ 10 - 20 ปี</label>
                <label className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> ไม่มี</label>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-300">
                <h4 className="font-bold text-sm">ส่งหรือโอนข้อมูลส่วนบุคคลไปยังต่างประเทศ</h4>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[13px] font-bold min-w-[280px]">มีการส่งหรือโอนข้อมูลไปต่างประเทศหรือไม่ (ถ้ามีโปรดระบุประเทศปลายทาง)</span>
                  <div className="flex items-center gap-4 shrink-0">
                    <label className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> ไม่มี</label>
                    <label className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> มี</label>
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-sm font-bold shrink-0">ระบุปลายทาง</span>
                    <div className="w-full bg-[#afb2bd] rounded-lg h-9 max-w-xs" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[13px] font-bold min-w-[280px]">เป็นการส่งข้อมูลไปประเทศของกลุ่มบริษัทเครือหรือไม่ (ถ้ามีโปรดระบุชื่อบริษัท)</span>
                  <div className="flex items-center gap-4 shrink-0">
                    <label className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> ไม่มี</label>
                    <label className="flex items-center gap-2 text-sm"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div> มี</label>
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-sm font-bold shrink-0">ระบุชื่อบริษัท</span>
                    <div className="w-full bg-[#afb2bd] rounded-lg h-9 max-w-xs" />
                  </div>
                </div>
                
                <div className="space-y-1.5 pt-2">
                  <label className="text-[13px] font-bold pl-1">วิธีการโอนข้อมูล</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10 w-2/3" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold pl-1">มาตรฐานการคุ้มครองข้อมูลส่วนบุคคลของประเทศปลายทาง</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10 w-2/3" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold pl-1">ข้อยกเว้นตามมาตรา 28 ( เช่น ปฏิบัติตามกฎหมาย ความยินยอม ปฏิบัติตามสัญญา ป้องกันอันตรายต่อชีวิต ประโยชน์สาธารณะที่สำคัญ)</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-20" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-bold text-sm">นโยบายการเก็บรักษาข้อมูลส่วนบุคคล</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold pl-1">ประเภทของข้อมูลที่จัดเก็บ (soft file / hard copy)</label>
                    <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold pl-1">วิธีการเก็บรักษาข้อมูล</label>
                    <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold pl-1">ระยะเวลาการเก็บรักษาข้อมูลส่วนบุคคล</label>
                    <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10 w-3/4" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold pl-1">สิทธิและวิธีการเข้าถึงข้อมูลส่วนบุคคล (ระบุเงื่อนไขการใช้สิทธิและวิธีการ)</label>
                    <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10" />
                  </div>
                </div>
                <div className="space-y-1.5 w-full md:w-1/2 md:pr-2.5">
                  <label className="text-[13px] font-bold pl-1">วิธีการลบหรือทำลายข้อมูลส่วนบุคคลเมื่อสิ้นสุดระยะเวลาจัดเก็บ</label>
                  <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-10 w-3/4" />
                </div>
              </div>

              <div className="space-y-1.5 pt-4">
                <label className="text-[13px] font-bold pl-1">การใช้หรือเปิดเผยข้อมูลส่วนบุคคลที่ได้รับยกเว้นไม่ต้องขอความยินยอม (ระบุให้สอดคล้องฐานในการประมวลผล)</label>
                <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-12" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-bold pl-1">การปฏิเสธคำขอหรือคัดค้านการใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล (*จดข้อมูลเมื่อมีการปฏิเสธการใช้สิทธิ)</label>
                <div className="w-full bg-[#afb2bd] rounded-xl px-4 py-3 h-12" />
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-300">
                <h4 className="font-bold text-sm">คำอธิบายเกี่ยวกับมาตรการรักษาความมั่นคงปลอดภัย</h4>
                <div className="space-y-3">
                  {['มาตรการเชิงองค์กร', 'มาตรการเชิงเทคนิค', 'มาตรการทางกายภาพ', 'การควบคุมการเข้าถึงข้อมูล', 'การกำหนดหน้าที่ความรับผิดชอบของผู้ใช้งาน', 'มาตรการตรวจสอบย้อนหลัง'].map(label => (
                    <div key={label} className="space-y-1">
                      <label className="text-[12px] font-bold pl-1">{label}</label>
                      <div className="w-full bg-[#afb2bd] rounded-xl h-10" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        <div className="p-6 md:px-8 border-t border-gray-300 flex justify-between items-center rounded-b-[2rem]">
          {step === 1 ? (
             <div className="w-full flex justify-end">
               <button onClick={() => setStep(2)} className="px-10 py-3 rounded-lg text-white font-bold text-[15px] bg-[#898989] hover:bg-[#6c6c6c] transition-colors shadow-md">
                 Next
               </button>
             </div>
          ) : (
             <div className="w-full flex justify-between items-center">
                <button onClick={() => setStep(1)} className="px-8 py-3 rounded-lg text-white hover:bg-[#6c6c6c] transition-colors font-bold text-[15px] flex items-center gap-1 bg-[#898989] shadow-md">
                  ย้อนกลับ
                </button>
                <button onClick={onClose} className="px-10 py-3 rounded-lg text-gray-900 border border-gray-300 bg-white hover:bg-gray-100 transition-colors font-bold text-[15px] shadow-sm">
                  Close
                </button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}