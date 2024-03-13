import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FishTales</title>
        <link rel="icon" href="/public/favicon.ico" />
        <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css"
        />
      </Head>
      <main>
        <h1>Fish Tales</h1>
        <h3>Book your next adventure now</h3>
        <Link href="/login">Login</Link>
      </main>
    </div>
  );
}
