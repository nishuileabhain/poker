const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questionID')//renamed to show clearly that this is coming from the html page
//const questionElement = document.getElementById('questionID','imgID')//renamed to show clearly that this is coming from the html page
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let correctAnswers = 0;
let wrongAnswers = 0;

startButton.addEventListener('click', startGame)//user clicks start button
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questionList.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
    correctAnswers = 0; //maybe specify if curr quest index is zero
    wrongAnswers = 0;
  questionContainerElement.classList.remove('hide') //once the start button it clicked it will disappear
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) { //this is the question object as defined below
    questionElement.innerHTML = question.question //both from below object??
    // console.log(question)

    question.answers.forEach(answer => {

        const div = document.createElement('div');
        const img = document.createElement('img')
        img.src = answer.imagey;//would have been innertext in the text version

        div.appendChild(img)
        //questionElement.appendChild(div)
        answerButtonsElement.appendChild(div)
        //img.classList.add('btnCard') adding the class to the button
        img.classList.add('btnCard')//should this be added to the div?
      if (answer.correct) {
         img.dataset.correct = answer.correct
         }
        img.addEventListener('click', selectAnswer)
     } )//eo foreach
    }//eo function
   //)
  // question.answers.forEach(answer => { //built-in forEach() method calls a function once for each element in the answers array
  //   const button = document.createElement('button')//WHY WONT YOU PUT AN IMAGE IN THERE
  //   //let image = document.createElement("img");// that will create the image in your js

  //   const img = document.createElement("img");//https://softauthor.com/javascript-working-with-images/
  //   img.src = "assets/images/pack/2d.png";//https://softauthor.com/javascript-working-with-images/
  //   document.body.appendChild(img);//https://softauthor.com/javascript-working-with-images/
  //   //let mydiv = document.getElementByClass("btnCard");
  //   //mydiv.appendChild(image);

  //   button.innerHTML = answer.texty
  //   //img.innerHTML = answer.texty

  //   button.classList.add('btnCard')
  //   //img.classList.add('btnCard')

  //   if (answer.correct) {
  //     button.dataset.correct = answer.correct
  //     //img.dataset.correct = answer.correct// there is no explicit marking as false because its a string not a boolean    
  //   }
  //   console.log('sdfsdf')
  //   button.addEventListener('click', selectAnswer)
  //   //img.addEventListener('click', selectAnswer)
  //   answerButtonsElement.appendChild(button)
  // })}


// for showing the next question, not resetting the whole quiz

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct //correct is set as a string rather than a boolean
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerHTML = 'Restart'
    startButton.classList.remove('hide')
  }
    if (selectedButton.dataset = correct) {
        correctAnswers++
    }
    else{
        wrongAnswers++
    }
    document.getElementById("score").innerHTML = correctAnswers;
    document.getElementById("incorrect").innerHTML = wrongAnswers;
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//array of question elements
//let image = document.createElement("img");
const questionList = [
      {//Any five cards of the same suit, but not in a sequence
    question: 'Which card would you change to make a flush?',
    answers: [
      { imagey: 'assets/images/pack/6h.png', correct: false },
      { imagey: 'assets/images/pack/jh.png', correct: false },
      { imagey: 'assets/images/pack/kh.png', correct: false },
      { imagey: 'assets/images/pack/2h.png', correct: false },
      { imagey: 'assets/images/pack/2d.png', correct: true },
    ]
  },
        { //A, K, Q, J & 10 in all the same suit
    question: 'Which card would you change to make a royal flush?',
    answers: [
      { imagey: 'assets/images/pack/10d.png', correct: false },
      { imagey: 'assets/images/pack/jd.png', correct: false },
      { imagey: 'assets/images/pack/qd.png', correct: false },
      { imagey: 'assets/images/pack/kd.png', correct: false },
      { imagey: 'assets/images/pack/ah.png', correct: true }
    ]
  },
  {
    question: 'Which card could you change to make a royal flush?',
    answers: [
      { imagey: 'assets/images/pack/ad.png', correct: true },
      { imagey: 'assets/images/pack/ah.png', correct: false },
      { imagey: 'assets/images/pack/kh.png', correct: false },
      { imagey: 'assets/images/pack/qh.png', correct: false },
      { imagey: 'assets/images/pack/jh.png', correct: false },
    ]
  },
  {// Five cards in an ordered sequence, all in the same suit.
    question: 'Which card would you change to create a straight flush?',
    answers: [
      { imagey: 'assets/images/pack/4c.png', correct: false },
      { imagey: 'assets/images/pack/3c.png', correct: false },
      { imagey: 'assets/images/pack/ac.png', correct: true },
      { imagey: 'assets/images/pack/5c.png', correct: false },
      { imagey: 'assets/images/pack/6c.png', correct: false },
    ]
  },
  {
    question: 'Which card does NOT make up part of the four-of-a-kind?',
    answers: [
      { imagey: 'assets/images/pack/5d.png', correct: false },
      { imagey: 'assets/images/pack/5h.png', correct: false },
      { imagey: 'assets/images/pack/ah.png', correct: true },
      { imagey: 'assets/images/pack/5c.png', correct: false },
      { imagey: 'assets/images/pack/5s.png', correct: false },
    ]
  },
  {
    question: 'Which card does NOT make up part of the two-pair?',
    answers: [
      { imagey: 'assets/images/pack/3d.png', correct: false },
      { imagey: 'assets/images/pack/5c.png', correct: true },
      { imagey: 'assets/images/pack/9c.png', correct: false },
      { imagey: 'assets/images/pack/9d.png', correct: false },
      { imagey: 'assets/images/pack/3h.png', correct: false },
    ]
  },
  { //Five cards in a sequence, but not of the same suit.
    question: 'Which card would you change to make a straight?',
    answers: [
      { imagey: 'assets/images/pack/6d.png', correct: false },
      { imagey: 'assets/images/pack/4c.png', correct: true },
      { imagey: 'assets/images/pack/8d.png', correct: false },
      { imagey: 'assets/images/pack/7s.png', correct: false },
      { imagey: 'assets/images/pack/9h.png', correct: false },
    ]
  },
  {
    question: 'Which card does NOT make up part of the two-pair?',
    answers: [
      { imagey: 'assets/images/pack/3d.png', correct: false },
      { imagey: 'assets/images/pack/5c.png', correct: true },
      { imagey: 'assets/images/pack/9c.png', correct: false },
      { imagey: 'assets/images/pack/9d.png', correct: false },
      { imagey: 'assets/images/pack/3h.png', correct: false },
    ]
  },
  {
    question: 'Which card is the highest card you can play?',
    answers: [
      { imagey: 'assets/images/pack/qc.png', correct: true },
      { imagey: 'assets/images/pack/jd.png', correct: false },
      { imagey: 'assets/images/pack/5c.png', correct: false },
      { imagey: 'assets/images/pack/9d.png', correct: false },
      { imagey: 'assets/images/pack/6h.png', correct: false },
    ]
  },
  {
    question: 'Which card is the highest card you can play?',
    answers: [
      { imagey: 'assets/images/pack/5d.png', correct: false },
      { imagey: 'assets/images/pack/ac.png', correct: true },
      { imagey: 'assets/images/pack/qc.png', correct: false },
      { imagey: 'assets/images/pack/3d.png', correct: false },
      { imagey: 'assets/images/pack/js.png', correct: false },
    ]
  }
  
] //EO questions list

function incrementScore() {
    // Gets the current score from the DOM and increments it

    let oldScore = parseInt(document.getElementById("score").innerHTML);
    document.getElementById("score").innerHTML = correctAnswers;
}

function incrementWrongAnswer() {
    // Gets the current tally of incorrect answers from the DOM and increments it

    let oldScore = parseInt(document.getElementById("incorrect").innerHTML);
    document.getElementById("incorrect").innerHTML = wrongAnswers;
}





