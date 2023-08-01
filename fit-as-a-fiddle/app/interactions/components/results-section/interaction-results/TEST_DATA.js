import React from 'react';
import Interactions from './Interactions';

const SampleDataPage = () => {
    const sampleData = {
        "fullInteractionTypeGroup": [{
            "sourceName": "DrugBank",
            "fullInteractionType": [{
                "interactionPair": [
                    {
                        "interactionConcept": [
                            {
                                "minConceptItem": {
                                    "name": "simvastatin"
                                }
                            },
                            {
                                "minConceptItem": {
                                    "name": "fluconazole"
                                }
                            }
                        ],
                        "description": "The metabolism of Simvastatin can be decreased when combined with Fluconazole."
                    }]
            },
            {
                "interactionPair": [{
                    "interactionConcept": [
                        {
                            "minConceptItem": {
                                "name": "simvastatin"
                            }
                        },
                        {
                            "minConceptItem": {
                                "name": "bosentan"
                            }
                        }
                    ],
                    "description": "The serum concentration of Simvastatin can be decreased when it is combined with Bosentan."
                }]
            }]
        }]
    };

    return (
        <div>
            <Interactions interactionData={sampleData} />
        </div>
    );
};

export default SampleDataPage;
