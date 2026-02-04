import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "info";
}

export const MetricCard = ({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon,
  variant = "default",
}: MetricCardProps) => {
  const variantStyles = {
    default: "border-border/50",
    primary: "border-primary/30 bg-primary/5",
    success: "border-success/30 bg-success/5",
    warning: "border-warning/30 bg-warning/5",
    info: "border-info/30 bg-info/5",
  };

  const iconStyles = {
    default: "bg-secondary text-foreground",
    primary: "bg-primary/20 text-primary",
    success: "bg-success/20 text-success",
    warning: "bg-warning/20 text-warning",
    info: "bg-info/20 text-info",
  };

  return (
    <div className={cn("metric-card", variantStyles[variant])}>
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            iconStyles[variant],
          )}
        >
          {icon}
        </div>
        {change !== undefined && (
          <div
            className={cn(
              "flex items-center gap-1 text-sm font-medium",
              change > 0
                ? "text-success"
                : change < 0
                  ? "text-destructive"
                  : "text-muted-foreground",
            )}
          >
            {change > 0 ? (
              <TrendingUp size={16} />
            ) : change < 0 ? (
              <TrendingDown size={16} />
            ) : (
              <Minus size={16} />
            )}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
        {change !== undefined && (
          <p className="text-xs text-muted-foreground mt-1">{changeLabel}</p>
        )}
      </div>
    </div>
  );
};
