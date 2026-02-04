import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
}

const statusVariants: Record<
  string,
  "default" | "success" | "warning" | "error" | "info"
> = {
  // General
  active: "success",
  inactive: "default",
  // Project statuses
  completed: "success",
  "on-hold": "warning",
  cancelled: "error",
  // Ticket statuses
  open: "info",
  pending: "warning",
  closed: "success",
  // Payment statuses
  paid: "success",
  overdue: "error",
  // Leave statuses
  approved: "success",
  rejected: "error",
  // CMS statuses
  published: "success",
  draft: "warning",
  archived: "default",
  // Order statuses
  processing: "info",
  shipped: "info",
  delivered: "success",
  // Attendance
  present: "success",
  absent: "error",
  "half-day": "warning",
  remote: "info",
  // Campaigns
  sent: "success",
  scheduled: "info",
  failed: "error",
  // Staff
  "on-leave": "warning",
};

const variantStyles = {
  default: "bg-muted text-muted-foreground",
  success: "bg-success/20 text-success border-success/30",
  warning: "bg-warning/20 text-warning border-warning/30",
  error: "bg-destructive/20 text-destructive border-destructive/30",
  info: "bg-info/20 text-info border-info/30",
};

export function StatusBadge({ status, variant }: StatusBadgeProps) {
  const resolvedVariant =
    variant || statusVariants[status.toLowerCase()] || "default";

  return (
    <Badge
      variant="outline"
      className={cn("capitalize", variantStyles[resolvedVariant])}
    >
      {status.replace(/-/g, " ")}
    </Badge>
  );
}
