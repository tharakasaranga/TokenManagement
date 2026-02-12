import Link from "next/link";
import { Ticket, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="max-w-5xl w-full text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wide uppercase mb-2">
            Queue Management
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight sm:text-7xl">
            Smart{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Token System
            </span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <Link href="/token" className="group relative flex flex-col p-10 bg-white border border-blue-100 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* icon */}
            <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Ticket className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4"> For Customers</h3>
            <p className="text-slate-500 mb-10 flex-grow text-lg leading-relaxed">
              Get Your token from enter your mobile number
            </p>

            <div className="flex items-center text-blue-700 font-bold text-lg group-hover:translate-x-2 transition-transform">
              Get Your Token <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </Link>

          <Link href="/admin" className="group relative flex flex-col p-10 bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-slate-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* icon lucide react */}
            <div className="h-16 w-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              For Staff
            </h3>
            <p className="text-slate-500 mb-10 flex-grow text-lg leading-relaxed">
              Access to the administration dashboard. Manage tokens,and track the history.
            </p>

            <div className="flex items-center text-slate-800 font-bold text-lg group-hover:translate-x-2 transition-transform">
              Admin Dashboard <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="pt-20 border-t border-slate-200/60 mt-12 w-full max-w-2xl mx-auto">
          <p className="text-sm text-slate-400 font-medium">
            © 2026 Ants Creation . All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
