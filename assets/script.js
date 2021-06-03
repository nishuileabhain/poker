const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let correctAnswers = 0;
let wrongAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerHTML = question.question
  question.answers.forEach(answer => { //built-in forEach() method calls a function once for each element in the answers array
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct    
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    correctAnswers = 0; //maybe specify if curr quest index is zero
    wrongAnswers = 0;
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
const questions = [
  {
    question: 'What is a suit?',
    answers: [
      { text: 'diamonds', correct: true },
      { text: 'queens', correct: false }
    ]
  },
  {
    question: 'Which of these would you never find in a royal flush?',
    answers: [
      { text: 'Ten of Clubs', correct: false },
      { text: 'Jack of Diamonds', correct: false },
      { text: 'Nine of Hearts', correct: true },
      { text: 'Ace of Spades', correct: false }
    ]
  },
  {
    question: 'How Many cards make up one hand?',
    answers: [
      { text: 'Three', correct: false },
      { text: 'Five', correct: true },
      { text: 'As many as you like', correct: false },
      { text: 'Seven', correct: false }
    ]
  },
  {
    question: 'What is right?',
    answers: [
      { text: 'wrong6', correct: false },
      { text: 'right', correct: true }
    ]
  },
    {
    question: 'image test?',
    answers: [
      { text: 'make me an image', correct: false },
     // document.getElementById("x").src="assets/images/pack.ks.png"
      { text: 'correct answer', correct: true }
    ]
  }
]

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

/*function showCard() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "assets/images/pack/ac.png");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}*/