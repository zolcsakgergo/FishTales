import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import React from "react";

function Search() {
  return (
    <div className={inter.className}>
      <Head>
        <title>search</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1>search</h1>
        <h3>book your next adventure now</h3>
      </main>
    </div>
  );
}

export default Search;
