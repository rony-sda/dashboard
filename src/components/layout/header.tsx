import { useState } from "react";
import { Bell, Search, Settings, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { DashboardView } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { adminNavItems, crmNavItems, hrmNavItems, NavItemType } from "./sidebar";

interface HeaderProps {
  currentView: DashboardView;
  onViewChange: (view: DashboardView) => void;
}

export const Header = ({ currentView, onViewChange }: HeaderProps) => {
  const views: { id: DashboardView; label: string }[] = [
    { id: "admin", label: "Admin" },
    { id: "crm", label: "CRM" },
    { id: "hrm", label: "HRM" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems: NavItemType[] =
    currentView === "admin"
      ? adminNavItems
      : currentView === "crm"
        ? crmNavItems
        : hrmNavItems;

  return (
    <header className="h-16 bg-card/50 backdrop-blur-md border-b border-border px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Left: View Toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <PanelLeft className="w-5 h-5" />
        </Button>
        <div className="hidden sm:flex items-center gap-1 p-1 bg-secondary/50 rounded-lg">
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => onViewChange(view.id)}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
              currentView === view.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {view.label}
          </button>
        ))}
        </div>
      </div>

      {/* Center: Search */}
      <div className="hidden md:block flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search anything..."
            className="pl-10 bg-secondary/50 border-border/50 focus:bg-secondary"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
        <div className="w-px h-6 bg-border mx-2" />
        <Button variant="ghost" size="sm">
          + New
        </Button>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 sm:w-80 p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="p-4 border-b">
            <div className="flex items-center gap-1 p-1 bg-secondary/50 rounded-lg">
              {views.map((view) => (
                <button
                  key={view.id}
                  onClick={() => {
                    onViewChange(view.id);
                  }}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-md transition-all duration-200",
                    currentView === view.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.children && item.children.length > 0 ? (
                  <div className="mb-2">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">
                      {item.label}
                    </div>
                    <div className="space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/40 text-sm"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.icon}
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/40 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
