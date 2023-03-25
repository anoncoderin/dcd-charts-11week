import { useState, useEffect } from "react";
import styles from "./DoughnutChart.module.css";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Doughnuts() {
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text:"participation rate by full-time students during school months, monthly, unadjusted for seasonality",
            }
        },
        
        

    };
  const data = {
    labels: ["Oct 2022", "Nov 2022", "Dec 2022", "Jan 2023", "Feb 2023"],
    datasets: [
      {
        label:
          "participation rate by full-time students during school months, monthly, unadjusted for seasonality",
        data: [45.3, 44.8, 45.7, 44.7, 45.7],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className={styles.container}>
        <Doughnut data={data} options={/>
      </div>
    </>
  );
}
