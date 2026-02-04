import { MetricCard } from "@/components/dashboard/metric-card";
import { PartnerPayroll } from "@/components/dashboard/partner-payroll";
import { ProjectsOverview } from "@/components/dashboard/project-overview";
import { QuickActions } from "@/components/dashboard/quick-action";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { TicketsSummary } from "@/components/dashboard/tickets-summery";
import { DollarSign, Receipt, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="module-header">Dashboard Overview</h1>
          <p className="subtle-text mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">
            February 2, 2026
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: Just now
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Revenue"
          value="$152,430"
          change={12.5}
          icon={<DollarSign size={24} />}
          variant="success"
        />
        <MetricCard
          title="Net Profit"
          value="$48,290"
          change={8.2}
          icon={<TrendingUp size={24} />}
          variant="primary"
        />
        <MetricCard
          title="Active Clients"
          value="24"
          change={4}
          icon={<Users size={24} />}
          variant="info"
        />
        <MetricCard
          title="Pending Invoices"
          value="$18,650"
          change={-2.4}
          icon={<Receipt size={24} />}
          variant="warning"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Revenue Chart */}
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        {/* Right Column - Quick Actions */}
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects Overview */}
        <div>
          <ProjectsOverview />
        </div>

        {/* Tickets Summary */}
        <div>
          <TicketsSummary />
        </div>

        {/* Recent Activity */}
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Partner Payroll Section */}
      <div>
        <PartnerPayroll />
      </div>
    </div>
  );
}
