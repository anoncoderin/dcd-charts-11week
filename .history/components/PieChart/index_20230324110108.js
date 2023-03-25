import { useState, useEffect } from "react"
import styles from './PieChart.module.css'

import { Pie } from 'react-chartjs';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['Red', 'Blue','']
}
