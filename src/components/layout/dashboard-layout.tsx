"use client";

import { useState } from "react";
import type { DashboardView } from "@/types";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [currentView, setCurrentView] = useState<DashboardView>("crm");

  return (
    <div className="flex min-h-dvh md:pl-64 overflow-hidden overflow-x-hidden bg-background">
      <Sidebar currentView={currentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentView={currentView} onViewChange={setCurrentView} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 max-w-full">
          {children}
        </main>
      </div>
    </div>
  );
};
