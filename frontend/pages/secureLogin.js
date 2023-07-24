import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function secureLogin() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.slImgBg}></div>
      <div className={`${styles.bgText} border`}>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </div>
    </>
  );
}
