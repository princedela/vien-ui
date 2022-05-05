import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { maxHeight } from "@mui/system";

export default function LineChart({
  data = [{ label: "", value: 0 }],
  id = "",
  fill = "rgba(255, 132, 51, 0.6)",
  borderColor = "#FF8433",
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
      let lineChart = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels,

          datasets: [
            {
              label: "",
              data: values,
              fill: {
                target: "origin",
                above: fill,
              },
              pointBackgroundColor: borderColor,
              borderColor,
              borderWidth: 2,
              pointRadius: 2.7,
              pointBorderWidth: 0.8,
              pointBorderColor: "#ffffff",
              //   tension: 0.1,
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
          elements: {
            line: {
              fill,
            },
          },
          scales: {
            y: {
              position: "right",
              ticks: {
                maxTicksLimit: 3,
                callback: function (value, index, ticks) {
                  return value + "k";
                },
                font: {
                  size: 11,
                },
              },
              grid: {
                borderWidth: 0,
              },
            },
            x: {
              ticks: {
                // display: false,
                font: {
                  size: 9.11,
                },
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

  return (
    <canvas
      id={id}
      ref={chartRef}
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "131px",
        maxWidth: "490px",
      }}
    ></canvas>
  );
}
