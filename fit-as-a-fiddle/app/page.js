import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>

      <div className={styles.grid}>
        <Link href="/interactions">
          <h2>
            Interactions <span>-&gt;</span>
          </h2>
          <p>Go here to test the interactions page!</p>
        </Link>
      </div>
    </main>
  )
}
