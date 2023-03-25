import { useState, useEffect } from "react";
import styles from './DoughnutChart.module.css'
import { Doughnut } from "react-chartjs-2";
import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}from 'chart.js';

ChartJS.register(ArcElement,
    Tooltip,
    Legend);

    export default function(Doughnut){
        const data= {
            labels: ['Red', 'Blue', 'Yellow','Green', 'Purple'],
            datasets:[
                {
                label: '#',
                
                }
            ]
        }

        return(<>
        
        </>
        )
    }

