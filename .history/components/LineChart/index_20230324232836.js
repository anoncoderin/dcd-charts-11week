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

    const [lineData, setLineData] = useState({
        datasets: []
    })

    const [lineOptions, setLineOptions] = useState({
        datasets: []
    })

    useEffect(() => {
        setLineData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'],
            datasets: [
                {
                    label: 'Australian dollar',
                    data: [15234, 22432, 19245, 16243, 28356, 14235, 31000],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                }
            ]
        })

        setLineOptions({
            
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily average foreign exchange rates in Canadian dollars, Bank of Canada'"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
            <div className={styles.container}>
                <Bar data={Data} options={chartOptions}/>
            </div>
        </>
    )



    /**
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
    )  */
  }
