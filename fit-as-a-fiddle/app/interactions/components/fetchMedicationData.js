// export async function fetchMedicationData(medications) {
//     const apiUrl = `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${medications.join('+')}&sources=DrugBank`;
//     const response = await fetch(apiUrl);
    
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
    
//     const data = await response.json();
//     return data;
//   }
  