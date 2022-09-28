var userInput = document.getElementById("choices")
var startBtn = document.getElementById("startBtn")
var startPage = document.getElementById("startPage")
var questionContainer = document.getElementById("quizQuestions")
var index = 0
var score = 0
var timeLeft = 60
var time = timeLeft * 60;
var timer;
var startingMinutes = 1;


var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    correct: 'Alerts',
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers']
},
{
    question: "The condition in an if else statement is enclosed within _____.",
    correct: 'Curly Brackets',
    choices: ['Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets']
},
{
    question: "Arrays in Javascript can be used to store _____.",
    correct: 'All of the above',
    choices: ['Numbers and Arrays', 'Booleans', 'Other Arrays', 'All of the above']
},
{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    correct: 'Commas',
    choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parentheses']
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    correct: 'Booleans',
    choices: ['Quotes', 'Booleans', 'Alerts', 'Numbers']
}
]
// hide the button, <h1>, and <p> and start showing the quiz questions.
function startQuiz() {
    startPage.classList.add("hide")
    questionContainer.classList.remove("hide")
    console.log("im clicked")
    quizRender(index)    // function to run through the quiz questions
    
    setInterval(updateCountdown, 1000);
        
    const quizTimer = document.getElementById("quizTimer");
    
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 60 ? '0' + seconds : seconds;
        
        quizTimer.innerHTML = seconds;
        time--;
        }
    




}

// forEach loop used here
function quizRender(index) {
    var currentQuestion = quizQuestions[index]
    question.innerText = currentQuestion.question
    var choiceList = quizQuestions[index].choices
    console.log(choiceList)
    choiceList.forEach(function (choice) {
        var li = document.createElement('li')
        li.setAttribute("class", "choice")
        li.innerText = choice
        userInput.appendChild(li)
        li.addEventListener("click", function () {
            // add if else here
            if (choice === quizQuestions[index].correct) {
                score++
            } else {
                timeLeft -= 5;
                timeLeft.textContent = timeLeft;
            }
            console.log(li.textContent)
            nextQuestion()
        })
    })
}

function nextQuestion() {
    index++
    userInput.innerHTML = ""
    if (index < quizQuestions.length) {
        quizRender(index)
    } else {
        console.log("initials & score")
        question.innerText = "i need to put a score and initials log here"
        return // call function for initials
    }
}

// button to start the quiz and timer
startBtn.addEventListener("click", startQuiz); {
    
    var endOfTime = setTimeout(gameOver, 60000);
    console.log("time");
    
    function gameOver() {
        alert("Game Over!");
    }
    
   ///////
    
        
    }
    //function to store user score and initials
    //function userResult() {}
    
    //store and call results
    window.localStorage.setItem("", JSON.stringify())
    // let = window.localStorage.getItem();
    
    




    // have timer start on click.
    // display answer result alerts.
    // display final score
    // take in user initials.
    // cache scores.
    // display high score rankings.
