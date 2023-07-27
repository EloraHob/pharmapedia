'use client'

import styles from './page.module.css';
import Header from '../components/Header';
import MedicationInfoCard from './MedicationInfoCard';

export default function Filter() {
    return (
        <main className={styles.main}>
            <Header
                bgImage="/images/pills-xaxis-bg-teal.jpeg"
                title="Basic Medication Info"
                subheader="Experiment with different filters to discover different medications!"
                className={styles.header}
            />
            <MedicationInfoCard
                drugName="Test"
                activeIngredient="Still a test"
                description="How many times do I have to say this is a test?"
            />
        </main>
    )
}