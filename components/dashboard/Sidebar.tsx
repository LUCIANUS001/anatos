"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Microscope,
  Brain,
  ClipboardList,
  Bookmark,
  StickyNote,
  Search,
  Bot,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Practical Lab", href: "/practical", icon: Microscope },
  { name: "Quiz Centre", href: "/quiz", icon: ClipboardList },
  { name: "Lessons", href: "/lessons", icon: Brain },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "Notes", href: "/notes", icon: StickyNote },
  { name: "AI Tutor", href: "/ai-tutor", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="border-b border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-sky-700">AnatOS</h1>
        <p className="mt-1 text-sm text-slate-500">
          Anatomy Operating System
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-sky-700 text-white"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-5">
        <div className="rounded-2xl bg-gradient-to-r from-sky-700 to-teal-600 p-5 text-white">
          <p className="text-sm">Study Streak</p>

          <h2 className="mt-2 text-3xl font-bold">7 Days 🔥</h2>

          <p className="mt-2 text-sm text-sky-100">
            Keep learning every day to maintain your streak.
          </p>
        </div>
      </div>
    </aside>
  );
}