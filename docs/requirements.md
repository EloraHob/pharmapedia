# Requirements
1. Homepage COMPLETE (#22, #23, #24)
   - 1.1 - After the homepage webpage loads, the “banner & tagline” section will have an image and a paragraph describing a news article that speaks about medication nonadherence in the medical field.
      - 1.1a - We will also link the article at the bottom of this section. 
   - 1.2 - After the homepage webpage loads, users will be able to click on three feature cards.
      - 1.2a - When the user’s cursor hovers over the rectangle area of the cards, the user’s cursor turns into a pointer to indicate that the area is clickable.
      - 1.2b - Each card contains a level 1 header describing the feature.
      - 1.2c - Each card contains an image icon of the feature.
      - 1.2d - A previously hidden description box will appear when the user hovers over the rectangle area of the “learn more” section.
      - 1.2e - Each feature card’s description box contains a paragraph describing what the feature is.
      - 1.2f - If the user's cursor moves away from the “learn more” section, the description box disappears.
2. About Page COMPLETE (#42 and #43)
   - 2.1 - About page is static and does not have anything functionality aside from the navigation bar 
   - 2.2 - A title will be at the top of the page to tell the user where they are in the site “About Us”
   - 2.3 - 4 biography cards will be present
      - 2.3a - Description of group member
      - 2.3b - Photo of group member
      - 2.3c - Role in the project 
      - 2.3d - Name of group member
   - 2.4 - Container that is titled “Our Purpose” and gives a paragraph description of the project and our goals
3. Static Medication Information Content Page
   - 3.1 - At the top of the page will be a heading indicating which medication information is being displayed
   - 3.2 - Data will be pulled from the MedlinePlus API and displayed in the container (categories subject to change based on what the API is able to provide)
      - 3.2a - Summary: displayed in paragraph format, no more than 1000 characters
      - 3.2b - Indication/Associated Condition: displayed as a list, no more than 20 items
      - 3.2c - Pharmacodynamics: display in paragraph format, no more than 500 characters 
      - 3.2d - Adverse effects: displayed as a list, no more than 20 items
      - 3.2e - Side effects: displayed as a list, no more than 20 items
   - 3.3 - Back arrow that, when clicked, will direct the user to the previous page
4. Medication Interaction Feature
   - 4.1 - The page contains a heading with header text and subtext that indicate the purpose of the page.
   - 4.2 - A subheading will instruct the user on how to check for medication interactions. 
   - 4.3 - The software shall provide a means (search bar) for the user to search & select (as a button) medications in our database. 
      - 4.3a - If there is no matching medication name from the RxNorm API, the ‘add’ button will be disabled, and the search bar dropdown will display a message indicating no matches have been found.
         - 4.3aa - Results should be displayed within 2 seconds of the user entering a search term
      - 4.3b - If there is a matching name in the database, the user can ‘add’ the medication to select it. Added medications will appear as individual cards that can be removed from the interaction list. 
   - 4.4 - After inputting medications, the software will provide a means for the user to check for interactions between those medications by pressing a button. 
      - 4.4a - If there are no known interactions, a message will appear indicating no interactions have been identified. 
      - 4.4b - Identified drug interactions will be displayed with the medication names, severity score (if one exists), and a brief information summary (less than 100 words).
      - 4.4c - A liability message will be displayed advising users to communicate with their healthcare provider, regardless of the results displayed by this system. 

5. Search Feature and Errors
   - 5.1 - The search page contains a large heading indicating the purpose of the webpage (Search).
   - 5.2 - A prominent search bar will appear on the page, with an icon on the left and a ‘search’ button on the right. 
      - 5.2a - When the user clicks on the search bar, they are prompted to write text. If the input matches any medication names from the API, results will be displayed in a dropdown below the search bar. 
      - 5.2b - When the search button is clicked, any results matching the input will be displayed as individual medication cards below the search bar. 
         - 5.2ba - The system will indicate to the user the number of matching results returned.
         - 5.2bb - If there are NO matching results, an error message will appear indicating that there are no matching results to display. 
      - 5.2c - Each result will display as a card containing the medication name and a brief description and will be clickable. 
         - 5.2ca - On click, the card will redirect users to a page with more detailed information about that medication. 
      - 5.2d - The page will use pagination to divide search results.
         - 5.2da - The default page is 1
         - 5.2db - Users can click a different page number other than the current page to navigate and view those results. 
         - 5.2dc - Results will be arranged in a 3X5 (three columns and five rows) grid (15 results per page)

6. Medication Information Page (Filtering)
   - 6.1 - The page contains a heading with header text and subtext that indicate the purpose of the page.
   - 6.2 - A subheading will instruct the user on how to apply filters to source medication information. 
   - 6.3 - A filter/apply filter section will appear on the page, having the filter section drop-down panel on the left and an ‘apply filter’ button on the right.
      - 6.3a - On hover over or click on the filter button, the filter drop-down panel opens
      - 6.3b - On the filter panel, there are filters for categories such as medication type categories (classified by <1> small molecule drugs or <2> biotech drugs) and medicine name initial letter categories (from A-Z, or #)
      - 6.3c - Categories on the filter panel are clickable, one or more categories can be clicked at the same time; clicked categories will be highlighted.
      - 6.3d - When ‘apply filter’ button is clicked, any results matching with the categories will be displayed as individual cards under the filter/apply filter section
         - 6.3da - Individual medication cards will have the medication title on the left top part, a one-sentence description, and being clickable
         - 6.3db - On click, the card will redirect users to a page with more detailed   information about that medication (specified page #3.STATIC Medication Information Content Page). 
         - 6.3dc -Individual medication cards will be arranged by 3X5 (three columns and five rows) grid (15 results per page in total)
      - 6.3e - The page will use pagination to divide search results.
         - 6.3ea - The default/starting page is 1
         - 6.3eb - Users can click a different page number other than the current page to navigate and view those results
7. Sitewide Features
   - 7.1 Navigation Bar COMPLETE (#44, #45, #53, #55, and #56)
      - 7.1a - Home, Features, About, and Search buttons are clickable and the user will be brought to the corresponding page
      - 7.1b - Website name and logo are visible in the left corner of navigation bar
      - 7.1c - Appears on all pages and formatting is consistent
      - 7.1d - When user’s cursor hovers over the “WebAppName” or the “logo,” the cursor turns into a pointer hand
	       - 7.1da - When the user clicks on the “WebAppName” or the “logo,” it leads the user back to the main page
   - 7.2 Footer COMPLETE (#46)
      - 7.2a - The footer displays “INFO 442 Summer 2023 Class Project,” “MedLine,” “RxNorm,” and “Copyright and Disclaimer.”
8. Non Functional Requirements
   - 8.1 - The application will have a First Contentful Paint under 10 seconds for each web page. 
   - 8.2 - The application will conduct all communications with browsers over HTTPS connections. 
