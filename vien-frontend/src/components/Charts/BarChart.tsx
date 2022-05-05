import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function BarChart({
  data = [{ label: "", value: 0 }],
  id = "",
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
      let barChart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "",
              data: values,
              backgroundColor: [
                "#ff8433",
                "#ff8433",
                "#ff8433",
                "#ff8433",
                "#ff8433",
                "#ff8433",
              ],
              borderColor: [
                "#ff8433",
                "#ff8433",
                "#ff8433",
                "#ff8433",
                "#ff8433",
                "#ff8433",
              ],
              borderWidth: 1,
            },
          ],
        },

        options: {
          responsive: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                display: false,
              },
              grid: {
                lineWidth: 0,
                borderWidth: 0,
              },
            },
            x: {
              ticks: {
                display: false,
              },
              grid: {
                lineWidth: 0,
                borderWidth: 0,
              },
            },
          },
        },
      });
    }
  }

  return <canvas id={id} ref={chartRef} height="40" width="195"></canvas>;
}
