import React from "react";
import DoughnutChart from "../Charts/DoughnutChart";
import "./dashboardcontent.css";
import MetricCardLG from "./MetricCards/MetricCardLG";
import MetricCardMD from "./MetricCards/MetricCardMD";
import MetricCardSM from "./MetricCards/MetricCardSM";
import { v4 as uuid } from "uuid";
import { getValue } from "@testing-library/user-event/dist/utils";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import { dummy } from "../../dummy/dummy";

export default function DashboardContent() {
  return (
    <section className="dashboard-content">
      <div className="metrics-row">
        <MetricCardSM title="Sales" tag="Monthly Goal">
          <section className="metrics">
            <h3>98.1%</h3>
            <p>+6.9%</p>
          </section>
          <progress className="green" value="74" max="100"></progress>
          <p className="tag">Yearly Goal</p>
        </MetricCardSM>
        <MetricCardSM title="Revenue" tag="Total Profit">
          <section className="metrics">
            <h3>$13,893</h3>
            <p style={{ color: "#ff8433" }}>+11.3%</p>
          </section>
          <BarChart
            id={uuid()}
            data={[
              { value: 5, label: uuid() },
              { value: 12, label: uuid() },
              { value: 7, label: uuid() },
              { value: 11, label: uuid() },
              { value: 8, label: uuid() },
              { value: 2, label: uuid() },
            ]}
          />
        </MetricCardSM>
        <MetricCardSM title="Clients" tag="Subscribed">
          <section className="metrics">
            <h3>1,232</h3>
            <p>+3.2%</p>
          </section>
          <progress className="green" value="65" max="100"></progress>
          <p className="tag">Yearly Goal</p>
        </MetricCardSM>
      </div>
      <div className="metrics-row lg">
        <MetricCardMD
          title="Total Sales"
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
              <p className="description tag">Invoiced</p>
            </div>
            <div className="bottom">
              <h3 className="value">23</h3>
              <p className="description tag">Invoices</p>
            </div>
          </div>
        </MetricCardMD>
        <MetricCardLG title="Daily Profit">
          <LineChart data={dummy.linechartData} id={uuid()} />
        </MetricCardLG>
      </div>
      <div className="metrics-row lg">
        <MetricCardLG title="Daily active clients">
          <LineChart
            data={dummy.linechartData}
            id={uuid()}
            borderColor="#348373"
            fill="rgba(52, 131, 115, 0.6)"
          />
        </MetricCardLG>
        <MetricCardMD
          title="User Onboarding"
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
