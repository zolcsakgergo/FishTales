import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>FishTales</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1>Fish Tales</h1>
        <h3>book your next adventure now</h3>
        <Link href="/login">Login</Link>
      </main>
    </div>
  );
}
