import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FishTales</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main>
        <h1>Fish Tales</h1>
        <h3>Book your next adventure now</h3>
        <Link href="/login">Login</Link>
      </main>
    </div>
  );
}
