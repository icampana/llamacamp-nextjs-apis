import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Breaking Bad API + NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Sample page with basic information about me.</p>
          </a>

          <a href="/users" className={styles.card}>
            <h3>Characters List &rarr;</h3>
            <p>Characters from the show with a basic description per each.</p>
          </a>

        </div>
      </main>
      <Footer />

    </div>
  )
}
