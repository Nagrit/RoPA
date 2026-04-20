// app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#091833] flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-200">RoPA Management</h1>
      <p className="text-xl text-white/70 mb-8 max-w-md text-center">
        Records of Processing Activities system for security, privacy, and compliance.
      </p>
      <Link 
        href="/login" 
        className="px-8 py-3 bg-white text-[#091833] font-bold rounded-full hover:bg-gray-200 transition-colors"
      >
        Go to Login
      </Link>
    </main>
  );
}