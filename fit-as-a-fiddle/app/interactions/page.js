import styles from './page.module.css';
import Header from '../components/headers/Header';

export default function Interactions() {
  return (
    <main className={styles.main}>
      <Header
        bgImage="/images/pills-xaxis-bg-teal.jpeg"
        title="Drug Interaction Checker"
        subheader="Improve your safety and awareness by checking for possible conflicts between your medications."
        className={styles.header}
      />
    </main>
  )
}
