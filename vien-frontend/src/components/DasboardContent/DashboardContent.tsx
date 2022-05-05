import React from "react";
import DoughnutChart from "../Charts/DoughnutChart";
import "./dashboardcontent.css";
import MetricCardLG from "./MetricCards/MetricCardLG";
import MetricCardMD from "./MetricCards/MetricCardMD";
import MetricCardSM from "./MetricCards/MetricCardSM";
import { v4 as uuid } from "uuid";
import { getValue } from "@testing-library/user-event/dist/utils";

export default function DashboardContent() {
  return (
    <section className="dashboard-content">
      <div className="metrics-row">
        <MetricCardSM title="Sales" tag="Monthly Goal"></MetricCardSM>
        <MetricCardSM title="Revenue" tag="Total Profit"></MetricCardSM>
        <MetricCardSM title="Clients" tag="Subscribed"></MetricCardSM>
      </div>
      <div className="metrics-row lg">
        <MetricCardMD
          title="Sales"
          iconSrc="/img/money_round.svg"
          difference="+$985.56"
        >
          <DoughnutChart
            id={uuid()}
            data={[
              { label: "", value: 75 },
              { label: "", value: 25 },
            ]}
          />
          <div className="metrics">
            <div className="top">
              <h3 className="value">$2,595</h3>
              <p className="description tag">Invoices</p>
            </div>
            <div className="bottom">
              <h3 className="value">23</h3>
              <p className="description tag">Invoices</p>
            </div>
          </div>
        </MetricCardMD>
        <MetricCardLG title="Daily Profit"></MetricCardLG>
      </div>
      <div className="metrics-row lg">
        <MetricCardLG title="Daily active clients"></MetricCardLG>
        <MetricCardMD
          title="Sales"
          bgColor="#facf55"
          iconSrc="/img/profile_round.svg"
          tag="Q3 Goal: 8,000 User"
        >
          <DoughnutChart
            id={uuid()}
            colors={["#facf55", "#eaecee"]}
            data={[
              { value: 34, label: "" },
              { label: "", value: 66 },
            ]}
          />
          <div className="metrics">
            <div className="top">
              <h3 className="value">2,452</h3>
              <p className="description tag">ONBOARDED</p>
            </div>
          </div>
        </MetricCardMD>
      </div>
    </section>
  );
}
