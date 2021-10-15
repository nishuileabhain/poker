# Testing

## CSS validator

![CSS Validator feedback](/readme/testing/cssval.png)

* CSS validator found a bug affecting rules.html where a bottom margin of 30 had been entered instead of 30px, with the result that the elements were not displaying as expected
* The grid-template-columns gave an error. On manual testing I did not find any difference to the UI when changing ‘repeat(5)’ to ‘auto’, which was listed as a valid option on W3Schools


## Google Devtools
* On resources.html no issue was apparent from usage but an error said
```script.js:15 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at script.js:15
```
However javascript is not used on that page at all so the link to the script was removed from the html

## JSHINT
* added missing semicolons to many lines of code, most of them were missing
* added a comment to say that ES6 features were in use so JSHint was able to ignore them
* changed .5 to .05 on line 25 for ease of readability ( shuffledQuestions = questionList.sort(() => Math.random() - 0.5);)
* removed an unused function (clearstatus) that had been in the original quiz tutorial but that I had since replaced with my own code, but on later manual testing testing I decided to replace it.

## Markup Validation Service

### index.html
![HTML Validator feedback](/readme/testing/markupindex.png)
* replaced a closing div tag with a closing nav tag
* added alt attribute to an image. The image is dynamic so describes this in the tag.

### rules.html
![HTML Validator feedback](/readme/testing/markuprules.png)
* moved a div tag inside of a list item

### QuizGame.html
![HTML Validator feedback](/readme/testing/markupquiz.png)
* added alt tag to a new header image element

### resources.html
* no errors found

## Manual Testing
