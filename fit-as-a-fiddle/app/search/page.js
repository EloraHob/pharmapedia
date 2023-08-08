'use client'

import styles from './page.module.css';
import Header from '../components/Header';
import SearchSection from './search';

export default function Interactions() {
  return (
    <main className={styles.main}>
      <Header
        bgImage="/images/search-header.jpg"
        title="Just Search"
        subheader="Learn more about usage, precautions, dietary instructions, and side effects of a medication by clicking on individual result card"
        className={styles.header}
      />
      <SearchSection/>
    </main>
  )
}