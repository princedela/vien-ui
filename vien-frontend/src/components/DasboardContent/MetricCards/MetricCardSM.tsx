import React, { ReactNode } from "react";
import { JsxChild } from "typescript";

export default function MetricCardSM({
  title,
  tag,
  children,
}: MetricCardSMProps) {
  return (
    <div className="metric-card sm">
      <div className="metric-header">
        <h4>{title}</h4>
        <p>{tag}</p>
      </div>
      <section className="metric-children">{children && children}</section>
    </div>
  );
}

interface MetricCardSMProps {
  title: string;
  tag: string;
  children?: ReactNode;
}
