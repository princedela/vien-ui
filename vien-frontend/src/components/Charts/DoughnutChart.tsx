import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function DoughnutChart({
  data = [{ label: "", value: 0 }],
  id = "",
  colors = ["#016450", "#eaecee"],
}) {
  let labels: string[] = [],
    values: number[] = [];

  data.forEach(({ label, value }) => {
    label && (labels = [...labels, label]);
    value && (values = [...values, value]);
  });
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      let chart = Chart.getChart(chartRef.current.id);
      chart?.destroy();
    }
    loadChart();
    return () => {};
  }, [data]);

  function loadChart() {
    if (chartRef.current) {
      let context = chartRef.current.getContext("2d");
      let doughnutChart = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels,
          datasets: [
            {
              label: "# of Votes",
              data: values,
              backgroundColor: colors,
              borderColor: colors,
              borderWidth: 1,
            },
          ],
        },

        options: {
          responsive: false,
        },
      });
    }
  }

  return (
    <canvas
      id={id}
      ref={chartRef}
      height="130"
      width="130"
      style={{ height: "130px", width: "130px" }}
    ></canvas>
  );
}
