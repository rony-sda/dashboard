import type {
  Client,
  Project,
  Invoice,
  Ticket,
  Partner,
  User,
  TicketStatus,
  PaymentStatus,
  ProjectStatus,
} from "@/types";

// Generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// JEVXO UUID format
const generateJevxoUuid = () =>
  `JVX-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

// ============ CRM DATA ============

export const mockClients: Client[] = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "contact@acme.com",
    company: "Acme Corp",
    status: "active",
    totalProjects: 5,
    totalRevenue: 45000,
  },
  {
    id: "2",
    name: "TechStart Inc",
    email: "hello@techstart.io",
    company: "TechStart",
    status: "active",
    totalProjects: 3,
    totalRevenue: 28500,
  },
  {
    id: "3",
    name: "Global Dynamics",
    email: "info@globaldynamics.com",
    company: "Global Dynamics Ltd",
    status: "active",
    totalProjects: 8,
    totalRevenue: 92000,
  },
  {
    id: "4",
    name: "Innovate Labs",
    email: "team@innovatelabs.co",
    company: "Innovate Labs",
    status: "inactive",
    totalProjects: 2,
    totalRevenue: 15000,
  },
  {
    id: "5",
    name: "Summit Solutions",
    email: "contact@summitsolutions.net",
    company: "Summit Solutions",
    status: "active",
    totalProjects: 4,
    totalRevenue: 38000,
  },
  {
    id: "6",
    name: "Horizon Media",
    email: "projects@horizonmedia.com",
    company: "Horizon Media Group",
    status: "active",
    totalProjects: 6,
    totalRevenue: 67000,
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    clientId: "1",
    status: "active",
    progress: 75,
    budget: 25000,
    deadline: new Date("2026-03-15"),
    tasksCompleted: 45,
    totalTasks: 60,
  },
  {
    id: "2",
    name: "Mobile App Redesign",
    clientId: "2",
    status: "active",
    progress: 40,
    budget: 18000,
    deadline: new Date("2026-04-01"),
    tasksCompleted: 20,
    totalTasks: 50,
  },
  {
    id: "3",
    name: "CRM Integration",
    clientId: "3",
    status: "completed",
    progress: 100,
    budget: 35000,
    deadline: new Date("2026-01-20"),
    tasksCompleted: 80,
    totalTasks: 80,
  },
  {
    id: "4",
    name: "Cloud Migration",
    clientId: "3",
    status: "active",
    progress: 60,
    budget: 42000,
    deadline: new Date("2026-05-10"),
    tasksCompleted: 36,
    totalTasks: 60,
  },
  {
    id: "5",
    name: "Website Overhaul",
    clientId: "5",
    status: "on-hold",
    progress: 25,
    budget: 15000,
    deadline: new Date("2026-06-01"),
    tasksCompleted: 10,
    totalTasks: 40,
  },
  {
    id: "6",
    name: "Analytics Dashboard",
    clientId: "6",
    status: "active",
    progress: 85,
    budget: 22000,
    deadline: new Date("2026-02-28"),
    tasksCompleted: 51,
    totalTasks: 60,
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-2026-001",
    clientId: "1",
    amount: 12500,
    status: "paid",
    dueDate: new Date("2026-01-15"),
    createdAt: new Date("2026-01-01"),
  },
  {
    id: "2",
    invoiceNumber: "INV-2026-002",
    clientId: "2",
    amount: 9000,
    status: "pending",
    dueDate: new Date("2026-02-10"),
    createdAt: new Date("2026-01-25"),
  },
  {
    id: "3",
    invoiceNumber: "INV-2026-003",
    clientId: "3",
    amount: 17500,
    status: "paid",
    dueDate: new Date("2026-01-20"),
    createdAt: new Date("2026-01-05"),
  },
  {
    id: "4",
    invoiceNumber: "INV-2026-004",
    clientId: "5",
    amount: 7500,
    status: "overdue",
    dueDate: new Date("2026-01-25"),
    createdAt: new Date("2026-01-10"),
  },
  {
    id: "5",
    invoiceNumber: "INV-2026-005",
    clientId: "6",
    amount: 11000,
    status: "pending",
    dueDate: new Date("2026-02-15"),
    createdAt: new Date("2026-01-30"),
  },
  {
    id: "6",
    invoiceNumber: "INV-2026-006",
    clientId: "1",
    amount: 12500,
    status: "paid",
    dueDate: new Date("2026-02-01"),
    createdAt: new Date("2026-01-15"),
  },
];

export const mockTickets: Ticket[] = [
  {
    id: "1",
    title: "Login issues on mobile app",
    clientId: "2",
    status: "open",
    priority: "high",
    createdAt: new Date("2026-02-01"),
    updatedAt: new Date("2026-02-02"),
  },
  {
    id: "2",
    title: "Payment gateway timeout",
    clientId: "1",
    status: "open",
    priority: "urgent",
    createdAt: new Date("2026-02-02"),
    updatedAt: new Date("2026-02-02"),
  },
  {
    id: "3",
    title: "Dashboard not loading",
    clientId: "3",
    status: "pending",
    priority: "medium",
    createdAt: new Date("2026-01-28"),
    updatedAt: new Date("2026-02-01"),
  },
  {
    id: "4",
    title: "Report export failing",
    clientId: "5",
    status: "closed",
    priority: "low",
    createdAt: new Date("2026-01-20"),
    updatedAt: new Date("2026-01-25"),
  },
  {
    id: "5",
    title: "API rate limiting",
    clientId: "6",
    status: "open",
    priority: "medium",
    createdAt: new Date("2026-02-01"),
    updatedAt: new Date("2026-02-02"),
  },
];

// ============ HRM DATA ============

export interface Branch {
  id: string;
  name: string;
  location: string;
  managerId?: string;
  createdAt: Date;
}

export interface Department {
  id: string;
  name: string;
  branchId: string;
  headId?: string;
  createdAt: Date;
}

export interface Designation {
  id: string;
  title: string;
  level: number;
  departmentId: string;
}

export interface Staff {
  id: string;
  jevxoUuid: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "manager" | "hr" | "partner";
  branchId: string;
  departmentId: string;
  designationId: string;
  joiningDate: Date;
  baseSalary: number;
  status: "active" | "inactive" | "on-leave";
}

export interface Attendance {
  id: string;
  staffId: string;
  date: Date;
  checkIn?: string;
  checkOut?: string;
  status: "present" | "absent" | "half-day" | "remote";
  notes?: string;
}

export interface LeaveRequest {
  id: string;
  staffId: string;
  type: "annual" | "sick" | "personal" | "unpaid";
  startDate: Date;
  endDate: Date;
  reason: string;
  status: "pending" | "approved" | "rejected";
  approvedBy?: string;
  createdAt: Date;
}

export const mockBranches: Branch[] = [
  {
    id: "1",
    name: "Headquarters",
    location: "New York, USA",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    name: "Tech Hub",
    location: "San Francisco, USA",
    createdAt: new Date("2024-03-15"),
  },
  {
    id: "3",
    name: "Operations Center",
    location: "London, UK",
    createdAt: new Date("2024-06-01"),
  },
];

export const mockDepartments: Department[] = [
  {
    id: "1",
    name: "Engineering",
    branchId: "1",
    createdAt: new Date("2024-01-15"),
  },
  { id: "2", name: "Design", branchId: "1", createdAt: new Date("2024-01-15") },
  {
    id: "3",
    name: "Marketing",
    branchId: "2",
    createdAt: new Date("2024-03-20"),
  },
  { id: "4", name: "Sales", branchId: "2", createdAt: new Date("2024-03-20") },
  {
    id: "5",
    name: "Operations",
    branchId: "3",
    createdAt: new Date("2024-06-10"),
  },
  {
    id: "6",
    name: "Human Resources",
    branchId: "1",
    createdAt: new Date("2024-01-15"),
  },
];

export const mockDesignations: Designation[] = [
  { id: "1", title: "Senior Developer", level: 3, departmentId: "1" },
  { id: "2", title: "Junior Developer", level: 1, departmentId: "1" },
  { id: "3", title: "UI/UX Designer", level: 2, departmentId: "2" },
  { id: "4", title: "Marketing Manager", level: 3, departmentId: "3" },
  { id: "5", title: "Sales Executive", level: 2, departmentId: "4" },
  { id: "6", title: "HR Specialist", level: 2, departmentId: "6" },
];

export const mockStaff: Staff[] = [
  {
    id: "1",
    jevxoUuid: "JVX-ADMIN001",
    name: "John Smith",
    email: "john@jevxo.com",
    phone: "+1-555-0101",
    role: "admin",
    branchId: "1",
    departmentId: "1",
    designationId: "1",
    joiningDate: new Date("2024-01-15"),
    baseSalary: 85000,
    status: "active",
  },
  {
    id: "2",
    jevxoUuid: "JVX-MGR0002",
    name: "Sarah Johnson",
    email: "sarah@jevxo.com",
    phone: "+1-555-0102",
    role: "manager",
    branchId: "2",
    departmentId: "3",
    designationId: "4",
    joiningDate: new Date("2024-04-01"),
    baseSalary: 72000,
    status: "active",
  },
  {
    id: "3",
    jevxoUuid: "JVX-HR00003",
    name: "Michael Chen",
    email: "michael@jevxo.com",
    phone: "+1-555-0103",
    role: "hr",
    branchId: "1",
    departmentId: "6",
    designationId: "6",
    joiningDate: new Date("2024-02-10"),
    baseSalary: 55000,
    status: "active",
  },
  {
    id: "4",
    jevxoUuid: "JVX-PTR0004",
    name: "Emily Davis",
    email: "emily@jevxo.com",
    phone: "+1-555-0104",
    role: "partner",
    branchId: "1",
    departmentId: "1",
    designationId: "2",
    joiningDate: new Date("2024-09-01"),
    baseSalary: 48000,
    status: "active",
  },
  {
    id: "5",
    jevxoUuid: "JVX-PTR0005",
    name: "David Wilson",
    email: "david@jevxo.com",
    phone: "+1-555-0105",
    role: "partner",
    branchId: "2",
    departmentId: "4",
    designationId: "5",
    joiningDate: new Date("2024-10-15"),
    baseSalary: 45000,
    status: "active",
  },
  {
    id: "6",
    jevxoUuid: "JVX-PTR0006",
    name: "Lisa Anderson",
    email: "lisa@jevxo.com",
    phone: "+1-555-0106",
    role: "partner",
    branchId: "1",
    departmentId: "2",
    designationId: "3",
    joiningDate: new Date("2024-08-20"),
    baseSalary: 52000,
    status: "on-leave",
  },
];

export const mockPartners: Partner[] = [
  {
    id: "1",
    jevxoUuid: "JVX-PTR0004",
    name: "Emily Davis",
    email: "emily@jevxo.com",
    joiningDate: new Date("2024-09-01"),
    baseSalary: 48000,
    payableAmount: 14400,
    arrears: 33600,
    isShareEligible: true,
    daysActive: 155,
  },
  {
    id: "2",
    jevxoUuid: "JVX-PTR0005",
    name: "David Wilson",
    email: "david@jevxo.com",
    joiningDate: new Date("2024-10-15"),
    baseSalary: 45000,
    payableAmount: 13500,
    arrears: 31500,
    isShareEligible: true,
    daysActive: 110,
  },
  {
    id: "3",
    jevxoUuid: "JVX-PTR0006",
    name: "Lisa Anderson",
    email: "lisa@jevxo.com",
    joiningDate: new Date("2024-08-20"),
    baseSalary: 52000,
    payableAmount: 15600,
    arrears: 36400,
    isShareEligible: true,
    daysActive: 166,
  },
  {
    id: "4",
    jevxoUuid: "JVX-PTR0007",
    name: "James Brown",
    email: "james@jevxo.com",
    joiningDate: new Date("2025-01-10"),
    baseSalary: 42000,
    payableAmount: 12600,
    arrears: 29400,
    isShareEligible: false,
    daysActive: 23,
  },
  {
    id: "5",
    jevxoUuid: "JVX-PTR0008",
    name: "Amanda Taylor",
    email: "amanda@jevxo.com",
    joiningDate: new Date("2024-11-25"),
    baseSalary: 50000,
    payableAmount: 15000,
    arrears: 35000,
    isShareEligible: false,
    daysActive: 69,
  },
];

export const mockAttendance: Attendance[] = [
  {
    id: "1",
    staffId: "1",
    date: new Date("2026-02-02"),
    checkIn: "09:00",
    checkOut: "18:00",
    status: "present",
  },
  {
    id: "2",
    staffId: "2",
    date: new Date("2026-02-02"),
    checkIn: "09:15",
    checkOut: "17:45",
    status: "present",
  },
  {
    id: "3",
    staffId: "3",
    date: new Date("2026-02-02"),
    checkIn: "08:45",
    checkOut: "17:30",
    status: "present",
  },
  {
    id: "4",
    staffId: "4",
    date: new Date("2026-02-02"),
    checkIn: "09:30",
    status: "present",
    notes: "Working from home",
  },
  {
    id: "5",
    staffId: "5",
    date: new Date("2026-02-02"),
    status: "absent",
    notes: "Sick leave",
  },
  {
    id: "6",
    staffId: "6",
    date: new Date("2026-02-02"),
    status: "absent",
    notes: "On leave",
  },
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: "1",
    staffId: "4",
    type: "annual",
    startDate: new Date("2026-02-15"),
    endDate: new Date("2026-02-20"),
    reason: "Family vacation",
    status: "pending",
    createdAt: new Date("2026-02-01"),
  },
  {
    id: "2",
    staffId: "5",
    type: "sick",
    startDate: new Date("2026-02-02"),
    endDate: new Date("2026-02-03"),
    reason: "Medical appointment",
    status: "approved",
    approvedBy: "2",
    createdAt: new Date("2026-02-01"),
  },
  {
    id: "3",
    staffId: "6",
    type: "personal",
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-02-07"),
    reason: "Personal matters",
    status: "approved",
    approvedBy: "1",
    createdAt: new Date("2026-01-28"),
  },
  {
    id: "4",
    staffId: "3",
    type: "annual",
    startDate: new Date("2026-03-01"),
    endDate: new Date("2026-03-05"),
    reason: "Planned vacation",
    status: "pending",
    createdAt: new Date("2026-02-02"),
  },
];

// ============ ADMIN/CMS DATA ============

export interface CMSPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: "published" | "draft" | "archived";
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  status: "published" | "draft";
  author: string;
  featuredImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  client?: string;
  images: string[];
  status: "published" | "draft";
  createdAt: Date;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  linkUrl?: string;
  position: "hero" | "sidebar" | "footer";
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
}

export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  recipients: number;
  status: "draft" | "scheduled" | "sent" | "failed";
  sentAt?: Date;
  openRate?: number;
  clickRate?: number;
  createdAt: Date;
}

export interface SystemSetting {
  id: string;
  key: string;
  value: string;
  category: "general" | "seo" | "payments" | "ai" | "appearance";
  description: string;
}

export interface RolePermission {
  id: string;
  role: "admin" | "editor" | "manager" | "hr" | "partner" | "client";
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
}

export const mockCMSPages: CMSPage[] = [
  {
    id: "1",
    title: "Home",
    slug: "home",
    content: "<h1>Welcome to JEVXO</h1>",
    status: "published",
    author: "Admin",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2026-01-15"),
  },
  {
    id: "2",
    title: "About Us",
    slug: "about",
    content: "<h1>About JEVXO</h1><p>We are a technology company...</p>",
    status: "published",
    author: "Admin",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2026-01-20"),
  },
  {
    id: "3",
    title: "Services",
    slug: "services",
    content: "<h1>Our Services</h1>",
    status: "published",
    author: "Editor",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2026-01-25"),
  },
  {
    id: "4",
    title: "Contact",
    slug: "contact",
    content: "<h1>Contact Us</h1>",
    status: "draft",
    author: "Admin",
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2026-02-01"),
  },
  {
    id: "5",
    title: "Privacy Policy",
    slug: "privacy",
    content: "<h1>Privacy Policy</h1>",
    status: "published",
    author: "Admin",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2025-12-01"),
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with JEVXO",
    slug: "getting-started",
    excerpt: "Learn how to get started with our platform",
    content: "<p>Welcome to JEVXO...</p>",
    category: "Tutorials",
    tags: ["beginner", "guide"],
    status: "published",
    author: "John Smith",
    createdAt: new Date("2026-01-15"),
    updatedAt: new Date("2026-01-15"),
  },
  {
    id: "2",
    title: "New Features in 2026",
    slug: "new-features-2026",
    excerpt: "Discover what's new this year",
    content: "<p>We're excited to announce...</p>",
    category: "News",
    tags: ["updates", "features"],
    status: "published",
    author: "Sarah Johnson",
    createdAt: new Date("2026-01-20"),
    updatedAt: new Date("2026-01-22"),
  },
  {
    id: "3",
    title: "Best Practices for Remote Teams",
    slug: "remote-teams",
    excerpt: "Tips for managing remote teams effectively",
    content: "<p>Remote work has become...</p>",
    category: "Business",
    tags: ["remote", "management"],
    status: "draft",
    author: "Michael Chen",
    createdAt: new Date("2026-02-01"),
    updatedAt: new Date("2026-02-01"),
  },
];

export const mockPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution",
    category: "Web Development",
    client: "Acme Corp",
    images: [],
    status: "published",
    createdAt: new Date("2025-06-15"),
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Secure mobile banking application",
    category: "Mobile Development",
    client: "FinTech Inc",
    images: [],
    status: "published",
    createdAt: new Date("2025-08-20"),
  },
  {
    id: "3",
    title: "Healthcare Dashboard",
    description: "Patient management system",
    category: "Web Development",
    client: "MedCare",
    images: [],
    status: "draft",
    createdAt: new Date("2025-11-10"),
  },
];

export const mockBanners: Banner[] = [
  {
    id: "1",
    title: "New Year Sale",
    subtitle: "Up to 50% off",
    imageUrl: "/placeholder.svg",
    linkUrl: "/shop",
    position: "hero",
    isActive: true,
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-01-31"),
  },
  {
    id: "2",
    title: "Free Consultation",
    subtitle: "Book now",
    imageUrl: "/placeholder.svg",
    linkUrl: "/contact",
    position: "sidebar",
    isActive: true,
    startDate: new Date("2026-01-15"),
  },
];

export const mockEmailCampaigns: EmailCampaign[] = [
  {
    id: "1",
    name: "January Newsletter",
    subject: "Happy New Year from JEVXO!",
    content: "<p>Dear subscriber...</p>",
    recipients: 1250,
    status: "sent",
    sentAt: new Date("2026-01-05"),
    openRate: 42.5,
    clickRate: 12.3,
    createdAt: new Date("2026-01-03"),
  },
  {
    id: "2",
    name: "Product Launch",
    subject: "Introducing our new features",
    content: "<p>We're excited...</p>",
    recipients: 1480,
    status: "scheduled",
    createdAt: new Date("2026-02-01"),
  },
  {
    id: "3",
    name: "Valentine Special",
    subject: "Special offers for you",
    content: "<p>Love is in the air...</p>",
    recipients: 0,
    status: "draft",
    createdAt: new Date("2026-02-02"),
  },
];

export const mockSystemSettings: SystemSetting[] = [
  {
    id: "1",
    key: "site_name",
    value: "JEVXO",
    category: "general",
    description: "Website name",
  },
  {
    id: "2",
    key: "site_tagline",
    value: "Business Management Platform",
    category: "general",
    description: "Site tagline",
  },
  {
    id: "3",
    key: "meta_description",
    value: "JEVXO is a comprehensive business management platform",
    category: "seo",
    description: "Default meta description",
  },
  {
    id: "4",
    key: "payment_gateway",
    value: "stripe",
    category: "payments",
    description: "Active payment gateway",
  },
  {
    id: "5",
    key: "openai_model",
    value: "gpt-4",
    category: "ai",
    description: "OpenAI model for AI features",
  },
  {
    id: "6",
    key: "primary_color",
    value: "#22d3ee",
    category: "appearance",
    description: "Primary brand color",
  },
];

export const mockRolePermissions: RolePermission[] = [
  {
    id: "1",
    role: "admin",
    module: "cms",
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
  },
  {
    id: "2",
    role: "admin",
    module: "crm",
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
  },
  {
    id: "3",
    role: "admin",
    module: "hrm",
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
  },
  {
    id: "4",
    role: "editor",
    module: "cms",
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
  },
  {
    id: "5",
    role: "editor",
    module: "crm",
    canView: true,
    canCreate: false,
    canEdit: false,
    canDelete: false,
  },
  {
    id: "6",
    role: "manager",
    module: "crm",
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
  },
  {
    id: "7",
    role: "manager",
    module: "hrm",
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
  },
  {
    id: "8",
    role: "hr",
    module: "hrm",
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
  },
  {
    id: "9",
    role: "partner",
    module: "crm",
    canView: true,
    canCreate: false,
    canEdit: false,
    canDelete: false,
  },
  {
    id: "10",
    role: "client",
    module: "crm",
    canView: true,
    canCreate: false,
    canEdit: false,
    canDelete: false,
  },
];

// ============ SHOP DATA ============

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  isActive: boolean;
}

export interface ShopOrder {
  id: string;
  clientId: string;
  products: { productId: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
}

export const mockShopProducts: ShopProduct[] = [
  {
    id: "1",
    name: "Basic Consultation",
    description: "1-hour business consultation",
    price: 150,
    category: "Services",
    stock: 999,
    imageUrl: "/placeholder.svg",
    isActive: true,
  },
  {
    id: "2",
    name: "Premium Support Package",
    description: "Monthly premium support",
    price: 499,
    category: "Services",
    stock: 50,
    imageUrl: "/placeholder.svg",
    isActive: true,
  },
  {
    id: "3",
    name: "Website Audit",
    description: "Comprehensive website audit",
    price: 299,
    category: "Services",
    stock: 100,
    imageUrl: "/placeholder.svg",
    isActive: true,
  },
  {
    id: "4",
    name: "SEO Optimization",
    description: "Full SEO optimization service",
    price: 799,
    category: "Services",
    stock: 25,
    imageUrl: "/placeholder.svg",
    isActive: true,
  },
  {
    id: "5",
    name: "Custom Development",
    description: "Custom feature development",
    price: 2500,
    category: "Development",
    stock: 10,
    imageUrl: "/placeholder.svg",
    isActive: true,
  },
];

export const mockShopOrders: ShopOrder[] = [
  {
    id: "1",
    clientId: "1",
    products: [{ productId: "1", quantity: 2, price: 150 }],
    total: 300,
    status: "delivered",
    createdAt: new Date("2026-01-10"),
  },
  {
    id: "2",
    clientId: "2",
    products: [{ productId: "2", quantity: 1, price: 499 }],
    total: 499,
    status: "processing",
    createdAt: new Date("2026-01-28"),
  },
  {
    id: "3",
    clientId: "3",
    products: [
      { productId: "3", quantity: 1, price: 299 },
      { productId: "4", quantity: 1, price: 799 },
    ],
    total: 1098,
    status: "pending",
    createdAt: new Date("2026-02-01"),
  },
];

// ============ HELPER FUNCTIONS ============

export const getClientById = (id: string) =>
  mockClients.find((c) => c.id === id);
export const getProjectsByClientId = (clientId: string) =>
  mockProjects.filter((p) => p.clientId === clientId);
export const getInvoicesByClientId = (clientId: string) =>
  mockInvoices.filter((i) => i.clientId === clientId);
export const getTicketsByClientId = (clientId: string) =>
  mockTickets.filter((t) => t.clientId === clientId);
export const getStaffById = (id: string) => mockStaff.find((s) => s.id === id);
export const getBranchById = (id: string) =>
  mockBranches.find((b) => b.id === id);
export const getDepartmentById = (id: string) =>
  mockDepartments.find((d) => d.id === id);
export const getDesignationById = (id: string) =>
  mockDesignations.find((d) => d.id === id);
