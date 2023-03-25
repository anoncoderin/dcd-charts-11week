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
