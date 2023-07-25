import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={styles.slImgBg}
        style={{
          backgroundImage: 'url("/images/api1.png")',
        }}
      ></div>

      <div className={`${styles.container} position-absolute text-dark`}>
        <Head>
          <title>API Abuse</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={styles.title}>API Abuse</h1>

          <p className={styles.description}>
            Get Full Code on Github:{" "}
            <a href="https://github.com/yashpatel521/API-Abuse" target="_blank">
              API Abuse
            </a>
          </p>

          <div className={styles.grid}>
            <Link href="/login" className={styles.card}>
              <h3>Login Page &rarr;</h3>
              <p>Use SQL Injection and Brute force attacks.</p>
            </Link>

            <Link href="/secureLogin" className={styles.card}>
              <h3>Secure Login Page &rarr;</h3>
              <p>How to prevent SQL Injection and Brute force attacks.</p>
            </Link>
          </div>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}