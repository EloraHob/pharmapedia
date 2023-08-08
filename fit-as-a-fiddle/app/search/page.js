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
        subheader="Search for information about a specific medication"
        className={styles.header}
      />
      <SearchSection/>
    </main>
  )
}