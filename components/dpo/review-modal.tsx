'use client';

import { X } from 'lucide-react';

export function DpoReviewModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#e4e5ea] rounded-xl w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="p-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Review</h3>
          <div className="w-full h-32 bg-[#c3c1c2] rounded-md shadow-inner border border-gray-300"></div>
          <div className="flex gap-4 pt-2">
            <button 
              onClick={onClose}
              className="flex-1 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm text-sm"
            >
              ยกเลิก
            </button>
            <button 
              onClick={onClose}
              className="flex-1 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm text-sm"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}