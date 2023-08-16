import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [60, 20, 5],
    options: {
      chart: {
        type: "donut",
      },
        colors: ["#108ACC", "#FFA500", "#000000"],
      
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },
    },
  });

  return (
    <div
      id="chart"
      style={{ width: "300px", position: "relative", display: "inline-block" }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
          />
          
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <circle cx="0%" cy="0%" r="0%" fill="#f4f4f4" />
        <text
          x="40%"
          y="40%"
          textAnchor="middle"
          dy="0.35em" // Adjust this value to vertically center the text
          fontSize="18"
          fill="#000"
        >
          Total
        </text>
        <text
          x="40%"
          y="40%"
          textAnchor="middle"
          dy="1.2em" // Adjust this value to vertically position the second line
          fontSize="18"
          fill="#000"
        >
          5388
        </text>
          </svg>
          
    </div>
  );
};

export default ApexChart;
