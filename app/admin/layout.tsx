"use client";
import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import { Menu } from "lucide-react";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/*Side bar responsive*/}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 font-bold text-gray-800">Token Admin</span>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
