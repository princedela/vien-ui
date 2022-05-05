import React, { ReactNode } from "react";

export default function MetricCardMD({
  title,
  difference,
  tag,
  children,
  iconSrc,
  bgColor = "#016450",
}: MetricCardSMProps) {
  return (
    <div className="metric-card md">
      <section className="metric-header">
        <div className="metric-icon" style={{ backgroundColor: bgColor }}>
          <img src={iconSrc} alt="Icon" />
        </div>
        <div className="titles">
          <h4>{title}</h4>
          {difference && <p className="difference">{difference}</p>}
          {tag && <p className="tag">{tag}</p>}
        </div>
        <button className="more-button">
          <img src="/img/more.svg" alt="More Button" />
        </button>
      </section>
      <section className="metric-children">{children && children}</section>
    </div>
  );
}

interface MetricCardSMProps {
  title: string;
  difference?: string;
  tag?: string;
  children?: ReactNode;
  bgColor?: string;
  iconSrc?: string;
}
