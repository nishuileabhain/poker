// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg1 = document.getElementById("qImg1");
const qImg2 = document.getElementById("qImg2");
const qImg3 = document.getElementById("qImg3");
const qImg4 = document.getElementById("qImg4");
const qImg5 = document.getElementById("qImg5");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc1 : "assets/images/peeping.jpg",
        imgSrc2 : "assets/images/peeping.jpg",        
        imgSrc3 : "assets/images/peeping.jpg",
        imgSrc4 : "assets/images/peeping.jpg",
        imgSrc5 : "assets/images/peeping.jpg",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",  
        choiceE : "Wrong",     
        correct : "A"
    },{
        question : "What does CSS stand for?",
        imgSrc1 : "assets/images/peeping.jpg",
        imgSrc2 : "assets/images/peeping.jpg",        
        imgSrc3 : "assets/images/peeping.jpg",
        imgSrc4 : "assets/images/peeping.jpg",
        imgSrc5 : "assets/images/peeping.jpg",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",  
        choiceE : "Wrong", 
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc1 : "assets/images/peeping.jpg",
        imgSrc2 : "assets/images/peeping.jpg",        
        imgSrc3 : "assets/images/peeping.jpg",
        imgSrc4 : "assets/images/peeping.jpg",
        imgSrc5 : "assets/images/peeping.jpg",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",  
        choiceE : "Wrong", 
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg1.innerHTML = "<img src="+ q.imgSrc1 +">";
    qImg2.innerHTML = "<img src="+ q.imgSrc2 +">";
    qImg3.innerHTML = "<img src="+ q.imgSrc3 +">";
    qImg4.innerHTML = "<img src="+ q.imgSrc4 +">";
    qImg5.innerHTML = "<img src="+ q.imgSrc5 +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















