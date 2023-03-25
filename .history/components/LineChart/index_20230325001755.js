import { useState, useEffect } from "react"
import styles from './LineChart.module.css'

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export default function Lines(){




    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text:'Daily average foreign exchange rates in Canadian dollars, Bank of Canada'
            }
        },
        
        

    };
    const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'],
            datasets: [
                {
                    label: 'Australian dollar, daily average',
                    data: [0.9159, 0.9131, 0.9120, 0.9138, 0.9138],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgb(255, 99, 132, 0.5)'
                },
                {
                    label: 'Brazilian real, daily average',
                    data: [0.2617, 0.2608, 0.2598, 0.2606, 0.2607],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'  
                },
            ],
        };

    return(
        <>
        <div className={styles.container}>
            <Line data= {data} options={options}/>
        </div>

        </>
    )  

  }
