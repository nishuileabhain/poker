const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questionID')//renamed to show clearly that this is coming from the html page
//const questionElement = document.getElementById('questionID','imgID')//renamed to show clearly that this is coming from the html page
const answerButtonsElement = document.getElementById('answer-buttons')
const responsePic = document.getElementById('responsePic')
const responseText = document.getElementById('responseText')


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
  question.answers.forEach(answer => { //built-in forEach() method calls a function once for each element in the answers array
    const button = document.createElement('button')
    button.innerHTML = answer.texty
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct// there is no explicit marking as false because its a string not a boolean    
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// for showing the next question, not resetting the whole quiz

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  responsePic.classList.add('hide')
  responseText.classList.add('hide')
  responsePic.src = "assets/images/correct.jpg";
  responseText.innerHTML = "CORRECT!"

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
  responsePic.classList.remove('hide')
  responseText.classList.remove('hide')

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
      responsePic.src = "assets/images/wrong.jpg";
      responseText.innerHTML = 'WRONG!'

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
const questionList = [
      {
    question: 'Which of these would you never find in a royal flush?',
    answers: [
      { texty: 'Ten of Clubs', correct: false },
      { texty: 'Jack of Diamonds', correct: false },
      { texty: 'Nine of Hearts', correct: true },
      { texty: 'Ace of Spades', correct: false },
        { texty: 'Ace of Spades', correct: false }
    ]
  },
        {
    question: 'Five cards in an ordered sequence, all in the same suit is known as a:',
    answers: [
      { texty: 'Full House', correct: false },
      { texty: 'Royal Flush', correct: false },
      { texty: 'Straight Flush', correct: true },
      { texty: 'Flush', correct: false },
    { texty: 'Straight', correct: false }
    ]
  },
  {
    question: 'When would you play a high card?',
    answers: [
      { texty: 'When you can not make up any hand' , correct: true },
      { texty: 'When you have an ace' , correct: false },
      { texty: 'If you don\'t have a good kicker card' , correct: false },
    ]
},
  {
    question: 'Five cards in a sequence, but not of the same suit is known as a:',
    answers: [
      { texty: 'Pair' , correct: false },
      { texty: 'Straight' , correct: true },
      { texty: 'Flush' , correct: false },
      { texty: 'Full House' , correct: false },
      { texty: 'Straight Flush' , correct: false },
    ]
  },
  {
    question: 'Three of a kind with a pair makes up a:',
    answers: [
      { texty: 'Pair' , correct: false },
      { texty: 'Straight' , correct: false },
      { texty: 'Flush' , correct: false },
      { texty: 'Full House' , correct: true },
      { texty: 'Straight Flush' , correct: false },
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

function showCard() {
    
    var diamondAce = document.getElementById("image");
    diamondAce.src = "assets/images/pack/ad.png";
}

function cardtrick() {
    
    var diamondAce = document.getElementById("image");
    diamondAce.src = "assets/images/pack/ad.png";
}

function cardUntrick() {
    
    var clubAce = document.getElementById("image");
    clubAce.src = "assets/images/pack/ac.png";
}


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}