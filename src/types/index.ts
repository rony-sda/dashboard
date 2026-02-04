export type UserRole =
  | "admin"
  | "editor"
  | "manager"
  | "hr"
  | "partner"
  | "client";

export type DashboardView = "admin" | "crm" | "hrm";

export type TicketStatus = "open" | "pending" | "closed";

export type PaymentStatus = "paid" | "pending" | "overdue";

export type ProjectStatus = "active" | "completed" | "on-hold" | "cancelled";

export interface User {
  id: string;
  jevxoUuid: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  joiningDate: Date;
  isShareEligible: boolean;
  branchId?: string;
  departmentId?: string;
}

export interface MetricCard {
  title: string;
  value: string | number;
  change?: number;
  changeType?: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
  children?: NavItem[];
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company?: string;
  status: "active" | "inactive";
  totalProjects: number;
  totalRevenue: number;
}

export interface Project {
  id: string;
  name: string;
  clientId: string;
  status: ProjectStatus;
  progress: number;
  budget: number;
  deadline: Date;
  tasksCompleted: number;
  totalTasks: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  amount: number;
  status: PaymentStatus;
  dueDate: Date;
  createdAt: Date;
}

export interface Ticket {
  id: string;
  title: string;
  clientId: string;
  status: TicketStatus;
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: Date;
  updatedAt: Date;
}

export interface Partner {
  id: string;
  jevxoUuid: string;
  name: string;
  email: string;
  joiningDate: Date;
  baseSalary: number;
  payableAmount: number;
  arrears: number;
  isShareEligible: boolean;
  daysActive: number;
}
