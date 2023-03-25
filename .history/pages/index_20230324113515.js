import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'

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
        <BarChart/>
        <br></br>
        <hr></hr>
      <div>
        <h3>Vehicles entering Canada by land</h3>
        <PieChart/>
        </div>
      </main>
    </>
  )
}