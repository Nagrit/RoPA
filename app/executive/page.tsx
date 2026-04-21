'use client';

import { useState } from 'react';
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ExecutiveDashboardContent } from '@/components/executive/dashboard-content';

export default function ExecutivePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#091833] flex text-white font-sans overflow-hidden">
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden fixed top-6 right-6 z-50 bg-white/10 p-2 rounded-xl backdrop-blur-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40 w-72 bg-[#091833]/95 md:bg-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col transition-transform duration-300
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-8">
          <h1 className="text-4xl font-black tracking-tight drop-shadow-md">ชื่อเว็บ</h1>
          <p className="text-xs text-white/50 mt-2 font-medium tracking-wider uppercase">Dashboard ผู้บริหาร</p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-semibold text-sm bg-white/10 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-white/10"
          >
            <LayoutDashboard size={20} className="text-indigo-400" />
            Dashboard
          </button>
        </nav>

        <div className="p-6">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-semibold text-sm text-white/50 hover:text-white hover:bg-white/5"
          >
            <LogOut size={20} />
            Log out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-y-auto relative">
        <div className="p-6 pt-20 md:p-10 lg:p-12 xl:p-14 max-w-[1400px] mx-auto h-full">
          <ExecutiveDashboardContent />
        </div>
      </div>
    </div>
  );
}
