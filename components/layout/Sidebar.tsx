"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, History, Home, Layers, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/history", label: "History", icon: History },
    { href: "/", label: "Home", icon: Home },
  ];

  return (
    <>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-300 min-h-screen flex flex-col border-r border-slate-800 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 mb-4 flex items-center justify-between border-b border-slate-800/60">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Layers size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-wide">
                Administration
              </h1>
            </div>
          </div>
          <button
            onClick={onClose}
            className="md:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => onClose()}
                className={`group flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 ease-in-out ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50 translate-x-1"
                    : "hover:bg-slate-800 hover:text-white hover:translate-x-1"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                />
                <span className="font-medium text-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>


        <div className="p-6 border-t border-slate-800/60">
          <p className="text-xs text-slate-600 text-center">
            v1.0 • Admin Console
          </p>
        </div>
      </aside>
    </>
  );
}
