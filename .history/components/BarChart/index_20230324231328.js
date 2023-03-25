import { useState, useEffect } from "react"
import styles from './BarChart.module.css'

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', ],
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
}