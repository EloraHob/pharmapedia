import axios from 'axios';

const openFdaBaseUrl = 'https://api.fda.gov/drug/ndc.json';

const MedicationSearch = async (medicationName) => {
  try {
    const response = await axios.get(openFdaBaseUrl, {
      params: {
        search: `openfda.generic_name=${medicationName}`,
        limit: 27,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default MedicationSearch;