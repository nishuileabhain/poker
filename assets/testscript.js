
// Wait until the DOM has loaded before running the game
// Get the button elements, and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "correct") {
                alert("You clicked Correct")
                incrementCorrect ()
            } else {
                let ansType = this.getAttribute("data-type");
                alert(`You clicked ${ansType}`);
                incrementWrong ()
                //load the rule that has not been applied ie option 1A
                }
            
        });
    }
});

function incrementCorrect (){
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrong (){
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}