import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function secureLogin() {
  return (
    // <div className={styles.slImgBg}>
    //   <h1>First Post</h1>
    //   <h2>
    //     <Link href="/">Back to home</Link>
    //   </h2>
    // </div>
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.slImgBg}></div>
      <div className={`${styles.bgText} border`}>
        <h2>Blurred Background</h2>
        <h1>I am John Doe</h1>
        <p>And I'm a Photographer</p>
      </div>
    </>
  );
}
