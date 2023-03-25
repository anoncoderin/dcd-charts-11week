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
  //import faker from 'faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export default function Line(){

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [15234, 22432, 19245, 16243, 28356, 14235, 31000],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions}/>
            </div>
        </>
    )



    /
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
        
            maintainAspectRatio: false,
            responsive: true

    }
    return(
        <>

        </>
    )
  }
