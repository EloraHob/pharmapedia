import React from 'react';
import styles from './page.module.css';

export default function about() {

    const teamMembers = [
        {
          name: 'Erica Gordy',
          image: '././images/erica.jpg',
          role: 'Project Manager',
          description: 'Erica is a graduating senior at the Unviersity of Washington pursuing a BS in Informatics and a BA in Sociology. Erica also has a minor in American Sign Language and is passionate about accessibilty design. She is hoping to enter a career in UX/UI design.',
        },
        {
          name: 'Lily Dong',
          image: '././images/lily.jpg',
          role: 'Developer',
          description: 'Lily is a junior at the Unviersity of Washington pursuing a BS in Informatics. Lily is originally from Beijing, China, and is passionate about technology and innovation in the public and non-profit sectors.',
        },
        {
          name: 'Elora Hoberecht',
          image: '././images/elora.jpg',
          role: 'Developer',
          description: 'Elora is a graduating senior at the University of Washington pursuing a BS in Informatics and an AA in Psychology. Elora is from Austin, Texas, pursuing career in Front-End development, passionate about healthcare, worked as licensed pharmacy technician for 5+ years',
        },
        {
          name: 'Haonon Zheng',
          image: '././images/haonon.jpg',
          role: 'User Experience Designer',
          description: 'Haonon is a junior at the University of Washington pursuing a BS in Informatics and Applied Math. Haonon is from China, passionate about data science in healthcare field.',
        },
      ];

    return (
        <main className={styles.main}>
            <div className="container">
                <h1 className={styles.h1}>Our Purpose</h1>
                <p className={styles.p}>
                Our goal is to provide patients with knowledge of their prescribed medications 
                and promote medical literacy for all. It is important for patients with chronic 
                diseases to consistently take their medications in order to prevent disease progression. 
                Research from the American Medical Association and the National Institute of Health has found 
                that patients with chronic diseases in the US fail to take their medications as 
                directed about 40-50% of the time. The primary causes of this include excessive cost, 
                misunderstanding of the purpose of the medications, fear of side effects or medication 
                dependence, and confusion/difficulty managing dosing schedules for multiple medications. 
                Medication nonadherence contributes to roughly 125,000 preventable deaths in the US and 
                places an economic burden of $100 billion to $300 billion dollars on the healthcare system. 
                Currently, there are existing pharmacy programs aimed at helping Medicare patients stay on 
                track with their medications, in which a pharmacist checks patients&apos; prescription history and 
                calls the patient to discuss adherence barriers. However, these programs do not help non-elderly 
                patients. There has been a push in recent years for providers to communicate openly with their 
                patients about the medications they prescribe, but overwhelmed physicians may not have time to 
                fully discuss the details of these medications with patients.
                </p>
            </div>
            <div className="container">
                <h1 className={styles.h1}>Team Members</h1>
                <div className={styles.teamMembers}>
                    {teamMembers.map((teamMembers) => (
                    <div key={teamMembers.name} className={styles.member}>
                        <img src={teamMembers.image} alt={teamMembers.name} className={styles.img}/>
                        <p className={styles.p}>
                            {teamMembers.role}: {teamMembers.name}
                        </p>
                        <p className={styles.p}>
                            {teamMembers.description}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </main>
    );
}