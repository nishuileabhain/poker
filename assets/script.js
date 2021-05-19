new Sortable(quiz);

const correctAnswers = [
  "Royal Flush",
  "Straight Flush",
  "Four of a kind",
  "Full house",
  "Flush",
  "Straight",
];

function checkAnswer() {
  const li = document.querySelectorAll("#quiz li");
  let answers = new Array();
  li.forEach(function (text) {
    answers.push(text.innerHTML);
  });
  if (JSON.stringify(correctAnswers) === JSON.stringify(answers)) {
    alert("Correct :)");
  } else {
    alert("Try Again...");
  }
}