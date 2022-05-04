import React from "react";
import "./dashboardcontent.css";
import MetricCard from "./MetricCard";

export default function DashboardContent() {
  return (
    <section className="dashboard-content">
      <div className="metrics-row">
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </div>
      <div className="metrics-row lg">
        {" "}
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </div>
      <div className="metrics-row lg">
        {" "}
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </div>
    </section>
  );
}
