import React, { ReactNode } from "react";

export default function MetricCardLG({ title, children }: MetricCardLGProps) {
  return (
    <div className="metric-card lg">
      <div className="metric-header">
        <h4>{title}</h4>
        <button className="more-button">
          <img src="/img/more.svg" alt="More Button" />
        </button>
      </div>
      {children && children}
    </div>
  );
}

interface MetricCardLGProps {
  title: string;
  children?: ReactNode;
}
