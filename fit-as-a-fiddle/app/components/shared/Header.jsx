// /app/components/Header.js
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Drug Interaction Checker</h1>
        <p className={styles.subheading}>
          Improve your safety and awareness by checking for possible conflicts between your medications.
        </p>
      </div>
    </header>
  );
};
