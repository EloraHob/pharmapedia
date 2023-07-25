import styles from './page.module.css';
import Header from '../components/headers/Header';
import MedicationCardContainer from './components/med-card/MedicationCardContainer';

export default function Interactions() {
  return (
    <main>
      <Header
        bgImage="/images/pills-xaxis-bg-teal.jpeg"
        title="Drug Interaction Checker"
        subheader="Improve your safety and awareness by checking for possible conflicts between your medications."
        className={styles.header}
      />
      <MedicationCardContainer
        medication="Test"
      />
    </main>
  )
}
