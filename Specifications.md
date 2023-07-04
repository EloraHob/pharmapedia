# F-Team Fit As A Fiddle

## Team Members  
| Member Name | Role | 
| Erica Gordy | Project Manager |
| Haonan Zheng | Product Designer |
| Elora Hoberecht | Developer |
| Lily Dong | Developer | 

## Problem
Research from the American Medical Association and the National Institute of Health has found that patients with chronic diseases in the US fail to take their medications as directed about 40-50% of the time ([American Medical Association [AMA], 2023](https://www.ama-assn.org/delivering-care/patient-support-advocacy/8-reasons-patients-dont-take-their-medications#:~:text=Medication%20nonadherence%E2%80%94when%20patients%20don,for%20patients%20with%20chronic%20disease.); [Lee et al., 2006](https://jamanetwork.com/journals/jama/article-abstract/204402); [Kleinsinger, F., 2018](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6045499/)). The primary causes of this include excessive cost, misunderstanding of the purpose of the medication(s), fear of side effects or medication dependence, and confusion/difficulty managing dosing schedules for multiple medications. Medication nonadherence contributes to roughly 125,000 preventable deaths in the US and places an economic burden of $100 billion to $300 billion dollars on the healthcare system ([Cutler et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29358417/); [Kleinsinger, F., 2018](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6045499/)). The individual consequences of noncompliance include disease progression, lower quality of life, and increased reliance on medical institutions including hospital visits and admission, nursing homes, and reliance on other medical resources. Medication nonadherence contributes to at least 125,000 preventable deaths annually ([Benjamin, 2012](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3234383/)). Currently, there are existing pharmacy programs aimed at helping Medicare patients stay on track with their medications, in which a pharmacist checks patients’ prescription history and calls the patient to discuss adherence barriers. However, these programs do not help non-elderly patients– there has been a push in recent years for providers to communicate openly with their patients about the medications they prescribe, but overwhelmed physicians may not have time to fully discuss the details of these medications with patients. How might we develop a tool to help chronic disease patients make better informed decisions about their medications and improve medical literacy?

## Solution Summary
Our product aims to solve the issue of misinformation and miscommunication surrounding prescription medications. We will have a web page that allows users to search for their medications and receive information about the drug formulas, usages, potential interactions, allergy information, and much more. We will be using an API called DrugBank (for academic research) that contains all the information about medications we might want to display to the user. The user will also be able to filter medications based on a specific category or drug class and various other filterable options. The third feature we are going to implement is to check and inform users of potential interactions between their medications. This will prevent potential harm due to a lack of knowledge of the drug interactions. If time allows, we will also implement a feature where users can create an account and register their medications to receive push notifications. We will manage notifications using Twilio. 

## Design 
Homepage: 
&ensp;Header: display website name, logo; navigation menu; login/sign up; search bar (display them in order from left to right)

&ensp;Hero Section: display the banner picture; tagline for illustrating website purpose;
&ensp;&ensp;Features Section: 
&ensp;&ensp;1. display the website features in card with titles, icons
&ensp;&ensp;	- basic medication info feature (#medi101)
&ensp;&ensp;	- search feature (just search)
&ensp;&ensp;	- interaction check feature (potential interaction between drugs checking)
&ensp;&ensp;2. direct to the feature page after clicking the corresponding feature card
&ensp;&ensp;3. have ‘...’ or ‘learn more’ button on right bottom corner of the card
&ensp;&ensp;4. show the drop-down cards, displaying feature descriptions, highlights  in bullet points, once click on ‘...’ and/
&ensp;&ensp;    or ‘learn more’ button

&ensp;Footer: display the information about copyrights and disclaimer; display the social media links or icons; displays the quick links for support resources; have a back-to-top button

Navigation: 
&ensp; Display three clickable parts in navigation bar: 1. home, 2. features, 3. about (display them in order from left to right)
&ensp;&ensp;1. Once click the ‘home’ button, redirect user to the home page
&ensp;&ensp;2. provide the drop down menu as user click or hover over ‘features’ button, including the clickable buttons for 
&ensp;&ensp; each feature which enables users to be redirected to the clicked feature pages
&ensp;&ensp;3. have the about button, directing users to the ‘about us’ page as being clicked

About Us Page:
&ensp;Keep the header and footer sections; show page title as ‘about us’; display the content container about our group members 
&ensp;with pictures (optional) and short introductions; have another container to show our purpose in a short paragraph.

Static Medication Information Page:
Redirect to this page once user click (basic medication info) feature button in feature section on the homepage or feature button in the navigation menu
&ensp;Header & Footer: keep
&ensp;Hero Section: banner picture + feature title + tagline for one short paragraph intro for this feature
&ensp;Filter section: have one drop-down list for asking users’ preferences in making filters and  applying filters
&ensp;&ensp;Details:
&ensp;&ensp;- 'filter' button will be set on the left top, 'apply filter' button will be set on the right 
bottom corner of the filter section
&ensp;&ensp;- As hover over or click on the 'filter', a drop-down list have categories from A to Z, category, small molecule 
&ensp;&ensp;drugs, and biotech drugs (29 categories available)
&ensp;&ensp;- Categories are clickable, and the ones (one or multiple) that are chosen by users will be  highlighted, and being 
&ensp;&ensp;applied as user click 'apply filter'
&ensp;
&ensp;
&ensp;&ensp;

## Stretch Goals
