/*jshint esversion: 6 */
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('questionID');
const answerButtonsElement = document.getElementById('answer-buttons');
const responsePic = document.getElementById('responsePic');
const responseText = document.getElementById('responseText');
const finalScore = document.getElementById('finalScore');


let shuffledQuestions, currentQuestionIndex;
let correctAnswers = 0;

startButton.addEventListener('click', startGame); //user clicks start button
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');//start button and score are hidden until the end
  finalScore.classList.add('hide');

  shuffledQuestions = questionList.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
    correctAnswers = 0;
    //console.log("correct answers is "+correctAnswers)
  questionContainerElement.classList.remove('hide'); //after the start button is clicked it will disappear
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) { //this is the question object as defined below
  questionElement.innerHTML = question.question;
  question.answers.forEach(answer => { //built-in forEach() method calls a function once for each element in the answers array
    const button = document.createElement('button');
    button.innerHTML = answer.texty;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// for showing the next question, not resetting the whole quiz

function resetState() {
  //clearStatusClass(document.body)
  nextButton.classList.add('hide');
  responsePic.classList.add('hide');
  responseText.classList.add('hide');
  responsePic.src = "assets/images/correct.jpg";
  responseText.innerHTML = "CORRECT!";

  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  //setStatusClass(document.body, correct)
  selectedButton.classList.add('selectedButton');
  //Array.from(answerButtonsElement.children).forEach(button => {
  //  setStatusClass(button, button.dataset.correct)//changes button colours
  // })

  responsePic.classList.remove('hide');
  responseText.classList.remove('hide');

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerHTML = 'Restart';
    startButton.classList.remove('hide');
    finalScore.classList.remove('hide');
    finalScore.innerHTML = "You got " + correctAnswers + " right!";
  }
  if (selectedButton.dataset == correct) {
    selectedButton.classList.add('correct');
    correctAnswers++;
    //console.log("correct answers is now "+correctAnswers)

  } else {
    selectedButton.classList.add('wrong');
    responsePic.src = "assets/images/wrong.jpg";
    responseText.innerHTML = 'WRONG!';
    //console.log("correct answers is still only "+correctAnswers)
    Array.from(answerButtonsElement.children).forEach(button => {
      if (button.dataset.correct); //changes button colours
      {
        button.classList.add('missed');
      }
    });
  }
}

//turns all the buttons colours depending whether they are correct
//function setStatusClass(element, correct) {
 // clearStatusClass(element)
  //if (correct) {
  //  element.classList.add('correct')
 // } //else {
    
    //element.classList.add('alsoWrong')

  //}
//}

//function clearStatusClass(element) {
//  element.classList.remove('correct');
//  element.classList.remove('wrong');
//}

//array of question elements
const questionList = [
      {
    question: 'Which of these would you never find in a royal flush?',
    answers: [
      { texty: 'Ten of Clubs', correct: false },
      { texty: 'Jack of Diamonds', correct: false },
      { texty: 'Nine of Hearts', correct: true },
      { texty: 'Ace of Spades', correct: false },
        { texty: 'King of Spades', correct: false }
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
  
]; //EO questions list







