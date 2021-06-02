let countCorrect = 0;
let countIncorrect = 0;
  
  
  //    The function evaluates the answer and displays result
  function displayAnswer1() {
    if (document.getElementById('option-1A').checked) {
        document.getElementById("block-1A").classList.add("correct");
        document.getElementById('result-1A').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-1B').checked) {
      document.getElementById("block-1B").classList.add("wrong");
      document.getElementById('result-1B').innerHTML = 'Incorrect! A royal flush is made up of an A, K, Q, J & 10'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-1C').checked) {
      //document.getElementById('block-13').style.border = '3px solid red'
      //document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-1C').innerHTML = 'Incorrect! A royal flush is made up of an A, K, Q, J & 10'
      document.getElementById("block-1C").classList.add("wrong");
      showCorrectAnswer1()
    }
    if (document.getElementById('option-1D').checked) {
        document.getElementById("block-1D").classList.add("wrong");
        document.getElementById('result-1D').innerHTML = 'Incorrect! A royal flush is made up of an A, K, Q, J & 10'
        showCorrectAnswer1()
    }
  }
  // the functon displays the link to the correct answer
  function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
      document.getElementById('showanswer1').removeChild(showAnswer1)
    })
  }
