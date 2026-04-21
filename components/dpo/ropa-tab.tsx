'use client';

import { useState } from 'react';
import { Search, Filter, Calendar, Users, ChevronDown, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { DpoReviewModal } from './review-modal'; // ตรวจสอบชื่อไฟล์ให้ถูกต้อง

// ขยาย Mock Data ให้ครบตาม Database Model
const RECORDS = [
  { 
    id: 'ROPA-2026-001', 
    controllerName: 'บริษัท เอบีซี จำกัด (สำนักงานใหญ่)',
    processingActivity: 'ระบบจัดการข้อมูลพนักงาน EMP-01', 
    cat: 'HR Data', 
    type: 'Personal', 
    status: 'Pending', 
    date: '2026-05-05',
    purpose: 'เพื่อใช้ในการบริหารจัดการทรัพยากรบุคคลและจ่ายเงินเดือน',
    personalData: 'ชื่อ-นามสกุล, เลขประจำตัวประชาชน, เลขบัญชีธนาคาร',
    dataCategory: 'พนักงาน (Staff)',
    dataType: 'General Personal Data',
    legalBasis: 'Contractual Basis',
    childConsent: 'No',
    internationalTransfer: 'No',
    transferCountry: '-',
    storageMethod: 'Cloud Database (AWS Thai Region)',
    retentionPeriod: '10 ปีหลังจากพ้นสภาพพนักงาน',
    riskLevel: 'Medium',
    measures: [
      { label: 'Access Control', detail: 'จำกัดสิทธิ์เข้าถึงเฉพาะเจ้าหน้าที่ HR ที่ได้รับมอบหมาย' },
      { label: 'Encryption at Rest', detail: 'เข้ารหัสข้อมูลในฐานข้อมูลด้วย AES-256' }
    ]
  },
  { 
    id: 'ROPA-2026-002', 
    controllerName: 'บริษัท เอบีซี จำกัด (ฝ่ายการตลาด)',
    processingActivity: 'ระบบลูกค้าสัมพันธ์ CRM-02', 
    cat: 'Sales', 
    type: 'Customer', 
    status: 'Pending', 
    date: '2026-05-05',
    purpose: 'เพื่อการวิเคราะห์พฤติกรรมลูกค้าและทำ Marketing Automation',
    personalData: 'อีเมล, เบอร์โทรศัพท์, ประวัติการซื้อสินค้า',
    dataCategory: 'ลูกค้าบุคคลธรรมดา',
    dataType: 'General Personal Data',
    legalBasis: 'Consent Basis',
    childConsent: 'No',
    internationalTransfer: 'Yes',
    transferCountry: 'Singapore (Salesforce Cloud)',
    storageMethod: 'SaaS Platform',
    retentionPeriod: '5 ปีนับจากการติดต่อครั้งสุดท้าย',
    riskLevel: 'High',
    measures: [
      { label: 'MFA', detail: 'บังคับใช้การยืนยันตัวตนสองชั้นสำหรับพนักงานขาย' },
      { label: 'Privacy Masking', detail: 'ซ่อนข้อมูลบางส่วนในหน้า Dashboard' }
    ]
  }
];

export function DpoRopaTab() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  const handleReviewClick = (record: any) => {
    setSelectedRecord(record);
    setIsReviewOpen(true);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col max-w-6xl mx-auto relative z-10">
      
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Header Panel */}
      <div className="bg-[#0b1429]/40 backdrop-blur-xl border border-slate-800/60 rounded-[32px] p-8 shadow-2xl flex justify-between items-start relative">
        <div>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Compliance Review</h2>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">ตรวจสอบและยืนยันบันทึกกิจกรรมการประมวลผล (RoPA)</p>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-4 relative">
        <button className="flex items-center justify-between min-w-[180px] bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 px-5 py-3.5 rounded-xl transition-all text-xs font-bold text-slate-300 uppercase tracking-widest">
          <div className="flex items-center gap-2"><Calendar size={16} className="text-blue-400" /> Select Date</div>
          <ChevronDown size={14} className="opacity-30" />
        </button>
        <button className="flex items-center justify-between min-w-[180px] bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 px-5 py-3.5 rounded-xl transition-all text-xs font-bold text-slate-300 uppercase tracking-widest">
          <div className="flex items-center gap-2"><Users size={16} className="text-indigo-400" /> Department</div>
          <ChevronDown size={14} className="opacity-30" />
        </button>
      </div>

      {/* Main Table Panel */}
      <div className="bg-[#0b1429]/30 backdrop-blur-xl border border-slate-800/60 rounded-[32px] flex flex-col shadow-2xl flex-1 overflow-hidden relative">
        <div className="p-8 border-b border-slate-800/60 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-900/20">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="ค้นหาชื่อกิจกรรมหรือรหัส ROPA..." 
              className="w-full bg-slate-900/40 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:ring-1 ring-blue-500/50 transition-all font-medium"
            />
          </div>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900/40 border-b border-slate-800/60 text-[11px] font-black uppercase text-slate-600 tracking-[0.15em]">
              <tr>
                <th className="py-5 px-8">Activity / ID</th>
                <th className="py-5 px-8">Category</th>
                <th className="py-5 px-8 text-center">Risk</th>
                <th className="py-5 px-8">Status</th>
                <th className="py-5 px-8 text-center">Manage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {RECORDS.map((rec, i) => (
                <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                  <td className="px-8 py-5">
                    <p className="font-bold text-white leading-tight">{rec.processingActivity}</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-1 tracking-wider uppercase">{rec.id}</p>
                  </td>
                  <td className="px-8 py-5 font-bold text-slate-400">{rec.cat}</td>
                  <td className="px-8 py-5 text-center">
                     <span className={`px-2 py-1 rounded text-[10px] font-black ${
                       rec.riskLevel === 'High' ? 'bg-rose-500/20 text-rose-400' : 'bg-blue-500/20 text-blue-400'
                     }`}>
                       {rec.riskLevel}
                     </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider ${
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
                  <td className="px-8 py-5 text-center">
                    <button 
                      onClick={() => handleReviewClick(rec)}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-blue-900/20 active:scale-95 sm:opacity-0 group-hover:opacity-100"
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

      {/* เรียก Modal และส่ง Data เข้าไป */}
      {isReviewOpen && selectedRecord && (
        <DpoReviewModal 
          data={selectedRecord} 
          onClose={() => setIsReviewOpen(false)} 
        />
      )}
    </div>
  );
}