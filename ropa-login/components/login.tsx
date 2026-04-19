"use client";

import { useState } from "react";
import { Users, Lock, EyeOff, Eye } from "lucide-react";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#091833]">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[45%] lg:-translate-x-[40%] w-[150vh] h-[150vh] bg-gradient-to-r from-gray-100 via-gray-300 to-[#a6abba] rounded-full shadow-[30px_0_60px_rgba(0,0,0,0.5)] flex items-center justify-end pr-[22vh] lg:pr-[25vh]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black tracking-tight drop-shadow-sm">
            ชื่อเว็บ
          </h1>
          <p className="text-white text-2xl lg:text-3xl font-medium tracking-wide drop-shadow-md">
            Text
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-full md:w-[60%] lg:w-[50%] h-full flex flex-col justify-center px-8 lg:px-16 xl:px-24 z-10 text-white">
        <div className="w-full max-w-md ml-auto mr-auto md:ml-0 md:mr-0 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 lg:p-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            เข้าสู่ระบบ
          </h2>
          <p className="text-sm lg:text-base text-white/80 mb-10">
            กรุณากรอกข้อมูลเพื่อเข้าใช้งาน
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="flex items-center text-white font-bold text-sm gap-2 pl-1 mb-3">
                <Users size={20} strokeWidth={2.5} /> Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-white text-black px-6 py-3.5 rounded-full outline-none focus:ring-4 focus:ring-white/30 transition-all font-sans font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-white font-bold text-sm gap-2 pl-1 mb-3">
                <Lock size={20} strokeWidth={2.5} /> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-white text-black px-6 py-3.5 rounded-full outline-none focus:ring-4 focus:ring-white/30 transition-all font-sans font-medium pr-14"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 relative overflow-hidden group bg-gradient-to-b from-white/20 to-transparent border border-white/50 text-white font-bold text-lg py-3.5 rounded-[1.25rem] shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 font-sans tracking-wide">
                Login
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-6 right-8 text-xs text-white/50 font-sans z-10">
        © 2026 ชื่อบริษัท — Security • Privacy • Compliance
      </div>
    </div>
  );
}
