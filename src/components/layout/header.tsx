import { Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { DashboardView } from "@/types";
import { cn } from "@/lib/utils";

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

  return (
    <header className="h-16 bg-card/50 backdrop-blur-md border-b border-border px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Left: View Toggle */}
      <div className="flex items-center gap-1 p-1 bg-secondary/50 rounded-lg">
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

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-8">
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
    </header>
  );
};
