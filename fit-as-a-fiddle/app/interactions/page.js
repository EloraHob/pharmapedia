import styles from './page.module.css';

export default function Interactions() {
  return (
    <main className={styles.main}>
      <div className={`container-fluid text-center ${styles.hero}`}>
        <h1>Drug Interaction Checker</h1>
        <h2>Improve your safety and awareness by checking for possible conflicts between your medications.</h2>
      </div>
    </main>
  )
}
