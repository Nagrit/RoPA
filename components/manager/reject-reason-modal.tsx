import { X } from 'lucide-react';

export function RejectReasonModal({ title, onClose, onConfirm }: { title: string, onClose: () => void, onConfirm?: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#e2e4e9] rounded-[1.5rem] w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 md:p-8 space-y-4">
          <h3 className="text-lg font-bold text-gray-800">{title} <span className="text-red-500">*</span></h3>
          <textarea 
            rows={5}
            className="w-full bg-[#c0c5d0] border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-800"
          ></textarea>
          <div className="flex gap-4 pt-2">
            <button 
              onClick={onClose}
              className="flex-1 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors"
            >
              ยกเลิก
            </button>
            <button 
              onClick={onConfirm || onClose}
              className="flex-1 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}