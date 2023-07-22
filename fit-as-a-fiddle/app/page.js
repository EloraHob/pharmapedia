import styles from './page.module.css' // FYI: CSS modules are scoped! The css in that file ONLY impacts this page since it is imported here.

import Link from 'next/link' // We could use <a> tags instead of Link, I'm not sure if there's a benefit to one or the other. 

export default function Home() {
  return (
    <main className={styles.main}>
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
