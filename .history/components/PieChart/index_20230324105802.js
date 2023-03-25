import { useState, useEffect } from "react"
import styles from './PieChart.module.css'

import { Pie } from 'react-chartjs';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS