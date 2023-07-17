# Testing Plan

## Search
1. We will conduct both unit testing (to test that different parts of the search feature code is functional and works independently if missing input, etc.) and manual acceptance testing (to test the functions and design signifiers work as what the user expects) for the search feature.
2. Developers will lead the process of conducting unit testing after the search feature has implemented fully. For acceptance testing, we will update the bug and hold them as issues on our shared google doc, if testers find bugs. The PM will lead the discussion about the current bugs and issues, listing the priority of each issue based on the importance and severity of them to integration and functionality. Then, the bug and related issue will be assigned to programmers who originally take responsibilities in programming the specified part.
3. For unit testing, developers/testers will use Thunder Client or other similar VSCode extension to test the API endpoints on developers’ computer. We will run acceptance testing will be run before deployment of the website, previewing on the local workplace and browser. It can be done on any of our team members’ computer after they have pulled the newest version. 
4. The tester will find and make a comment under that specific issue of search milestone, and Lily (who’s in charge of search) will automatically receive an email. She will take a look and fix the bug. If she has any question or bugs occur duing acceptance test, we will discuss as a team the best way to move forward if the functionality is not as intended. We will fix the issues in a timely manner and update any/all pages containing this feature.

#### User acceptance testing script
#Search Feature

##Context: User starts typing in the search box

The “search now” button will be enabled and become clickable.
Complete the search term “Ibuprofen” and clicks on “search now” button. 
Results has the key word “Ibuprofen” will be displayed as individual medication cards below the search bar. (Requirement 5.2b)
Clicks on the first result to navigate to a detailed page of “Ibuprofen” (Requirement 5.2ca)

##Context: The search box is empty

The “search now” button is greyed out (disabled)
See the search result area for most commonly searched medications
Clicks on the first result to navigate to a detailed page of that medication


## Filter
1. Testing type: We will conduct manual acceptance testing for filter function.
2. Defect management protocol: We will update the bug and hold them as issues on our shared google doc, if testers find bugs. The PM will lead the discussion about the current bugs and issues, listing the priority of each issue based on the importance and severity of them to integration and functionality. Then, the bug and related issue will be assigned to programmers who originally take responsibilities in programming the specified part. 
3. Test Environments: The test will be run before the deployment, previewing on the local workplace of developers’ computers, to check the functionality and outputs.
4. Acceptance test transcript for the filter function:

#### User acceptance testing script
#Medication Filter Features

##Context: The user is on the filter/apply filter section of the page

Expect to see the filter section displaying the 'filter button' on the left and an 'apply filter' button on the right.(requirement 6.3)

##Context: The user hovers over or clicks on the filter button

Expect to see the filter drop-down panel open upon hover or click. (requirement 6.3a)

##Context: The user take looks on filter panel

Expect to see the filter panel contains categories such as medication type (small molecule drugs and biotech drugs) and medicine name initial letter categories (A-Z, or #). (requirement 6.3b)

##Context: The user clicks on one or more categories. 

Expect to see the clicked categories are highlighted. (requirement 6.3c)

##Context: The user clicks the 'apply filter' button

Expect to see medication cards matching the selected categories, displaying right under the filter section. Expect not to see medication cards are not categorized under the chosen categories. (requirement 6.3d)

##Context: The user takes looks on medication cards grid

Expect to see the cards are arranged in a 3X5 grid (three columns and five rows) with 15 results per page. (requirement 6.3dc)

##Context: The user takes looks on single medication card

Expect to see the card displaying the medication title on the left top part, a one-sentence description. (requirement 6.3da)

##Context: The user clicks on an individual medication card

Expect to be redirected to a page with more detailed information about the medication (specified page #3.STATIC Medication Information Content Page). (requirement 6.3db)


## Navigation Bar
1. We will conduct acceptance testing for the navigation bar. 
2. The PM will conduct the manual acceptance testing for the navigation bar to make sure it has the correct functionality and matches our requirements. The tests will be conducted after the code is complete for the navigation bar, but before we add it to all of our pages. We want to make sure the functionality and layout is correct before integrating it on all pages. 
3. The code will be tested before deploying the page, on a developer’s computer. This will be one of the first features we add to the site. 
4. We will have an ongoing google doc for each feature and after testing the developer can add any issues or bug fixes that need to be made onto the document. We will then discuss as a team the best way to move forward if the functionality is not as intended. We will fix the issues in a timely manner and update any/all pages containing this feature. The bug fix will be assigned to the original person who programmed the navigation bar. 

#### User acceptance testing script
- a. Logo and brand name are in the correct position.

- b. Fonts and colors are consistent.

- c. Click on the home tab, it should take you to the home page. If not, this is a bug. 

- d. Click on the about tab, it should take you to the about page. If not, this is a bug. 

- e. Click on the features tab, a drop down menu should appear. If not, this is a bug. 

  -  i. Drop down menu should contain three features (basic medication information, drug interactions, and search) 
  
  -  ii. Each drop down option should take you to the correct corresponding page. If not, this is a bug.
  
- f. Search icon in the top right corner should bring the user to the search page. If not, this is a bug. 
