import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
import Lines from '@/components/LineChart'
import Doughnuts from '@/components/DoughnutChart'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div><BarChart/>
        <br></br>
        <hr></hr>
        </div>
      <div>
        <h3>Vehicles entering Canada by land in Feb 2023</h3>
        <br></br>
        <PieChart/>
        <br></br>
        <br></br>
        </div>
        <div>
          <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <Lines/>
        </div>

        <div>
        <hr></hr>
          <h3>Participation rate for Full-time employed student during school months in Canada</h3>
        <br></br>
        <br></br>
        
          <Doughnuts/>
          </div>
        
      </main>
    </>
  )
}
