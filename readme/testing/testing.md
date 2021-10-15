# Testing

## Manual Testing

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals
1. As a First Time Visitor, I want to easily understand the main purpose of the site.
    1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation sidebar to go to the page of their choice. The index page gives a synopsis of the site’s features.
    1. A header title shows exactly which page the user is currently on
    1. The user has two options, click the links in the main page content or use the navigation bars.
1. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.
    1. The site has been designed to be fluid and never to entrap the user. At the right of each page there is a clean navigation bar, clearly showing which page they are on.
1. As a First Time Visitor, I want to easily understand the poker rules from the shown examples
    1. The new user can read the poker rules and can see clear examples of each hand.
    1. Once the new visitor has read the rules, they will notice the quiz section.
    1. The final link in the navigation bar allows the user to explore more advanced concepts and practice playing online.
1. As a First Time Visitor, I want to easily understand the feedback given in the quiz
    1. Once the new visitor has started the quiz they are presented with a multiple choice
    1. The button clicked will enlarge and turn red or green depending on the answer and an image with a header appears to tell them if they are right or wrong.
    1. The correct answer is highlighted in green so the user will know for next time.
    1. At the end of the quiz a total score is displayed.

    -   #### Returning Visitor Goals

1. As a Returning Visitor, I want to quickly find the rules to refresh my knowledge
    1. The navigation bar clearly highlights the "Rules" Page and it is linked to from the index and quiz page also.
1. As a Returning Visitor, I want to quickly find the quiz to test my knowledge
    1. The navigation bar clearly highlights the "Quiz" Page and it is linked to from the index page also.
1. As a Returning Visitor, I want to find the best way to get in contact with the website owner.
    1. The footer of each page contains links to github and an email address in case of this.
1. As a Returning Visitor, I want to find useful external links.
    1. After a few attempts at the quiz and becoming familiar with the rules, the resources page can be easily found from the navbar and the index page.

## Automated Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [Wave](https://wave.webaim.org/) - [Results](https://github.com/)
-   [Chrome developer tools:](https://developers.google.com/web/tools/chrome-devtools)
   - Used throughout development for troubleshooting and debugging 
-   [JS Hint:](https://jshint.com/)
   - Used to validate javascript code.

### CSS validator

![CSS Validator feedback](/readme/testing/cssval.png)

* CSS validator found a bug affecting rules.html where a bottom margin of 30 had been entered instead of 30px, with the result that the elements were not displaying as expected
* The grid-template-columns gave an error. On manual testing I did not find any difference to the UI when changing ‘repeat(5)’ to ‘auto’, which was listed as a valid option on W3Schools


### Google Devtools

![Uncaught Type Error](/workspace/poker/readme/testing/uncaughttyperesources.png)
* On resources.html no issue was apparent from usage but an error said
```script.js:15 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at script.js:15
```
However javascript is not used on that page at all so the link to the script was removed from the html

![Uncaught Type Error](/workspace/poker/readme/testing/uncaughttypequiz.png)
* On QuizGame.html The “Uncaught TypeError: cannot set property 'innerHTML' of null” error was resolved by moving the script link out of the header to the bottom of the html page 

![Uncaught Type Error](/readme/testing/manifestsyntaxerror.png)
* On index.html various errors appear regarding the site.manifest file imported from the favicon feature. This works in initial gitpod previewing but gives an error on the deployed version and seems to be an authentication issue. It has been noted as a known bug in this project. 

### JSHINT
* added missing semicolons to many lines of code, most of them were missing
* added a comment to say that ES6 features were in use so JSHint was able to ignore them
* changed .5 to .05 on line 25 for ease of readability ( shuffledQuestions = questionList.sort(() => Math.random() - 0.5);)
* removed an unused function (clearstatus) that had been in the original quiz tutorial but that I had since replaced with my own code, but on later manual testing testing I decided to replace it.

### Markup Validation Service

#### index.html
![HTML Validator feedback](/readme/testing/markupindex.png)
* replaced a closing div tag with a closing nav tag
* added alt attribute to an image. The image is dynamic so describes this in the tag.

#### rules.html
![HTML Validator feedback](/readme/testing/markuprules.png)
* moved a div tag inside of a list item

#### QuizGame.html
![HTML Validator feedback](/readme/testing/markupquiz.png)
* added alt tag to a new header image element

#### resources.html
* no errors found

### Wave Web Accessibility Evaluation Tool

* For all Pages I changed navbar text colour from slategrey to darkslategrey because of contrast errors
* For QuizGame.html only I changed a H3 heading to H2 in so there is not a jump from h1 to h3
* For index.html there is a warning for a long alt tag that was mentioned above that I kept

### Lighthouse

#### Desktop
* Home Page Report - [View](/readme/testing/LHindexDT.png)
* Rules Page Report - [View](/readme/testing/LHrulesMOB.png)
* Quiz Page Report - [View](/readme/testing/LHquizDT.png)
* Resources Page Report - [View](/readme/testing/LHresourcesDT.png)

#### Mobile
* Home Page Report - [View](/readme/testing/LHindexMOB.png)
* Rules Page Report - [View](/readme/testing/LHrulesDT.png)
* Quiz Page Report - [View](/readme/testing/LHquizMOB.png)
* Resources Page Report - [View](/readme/testing/LHresourcesMOB.png)

