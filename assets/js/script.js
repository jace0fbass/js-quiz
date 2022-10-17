var userInput = document.getElementById("choices")
var startBtn = document.getElementById("startBtn")
var startPage = document.getElementById("startPage")
var userBtn = document.getElementById("userBtn")
let endInits = document.getElementById("endInits")
var final = document.getElementById("final")
var questionContainer = document.getElementById("quizQuestions")
var index = 0
var score = 0
var timeLeft = 60
var time = 60
var timer
var intervalId
var startingMinutes = 1
var textarea = document.querySelector("textarea")

var userText = document.getElementById("userText");
let text;
let initials = document.getElementById("textarea");
let userData = document.getElementById("userData");

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

    intervalId = setInterval(updateCountdown, 1000);

    const quizTimer = document.getElementById("quizTimer");

    function updateCountdown() {
        time--;
        quizTimer.innerHTML = time;
        if (time <= 0 || index > quizQuestions[index]) {
            window.clearInterval(intervalId);
        }
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
            // add if else her
            if (choice === quizQuestions[index].correct) {
                score++
            } else {
                time -= 10;
                time.textContent = timeLeft;
            }
            console.log(li.textContent)
            nextQuestion(); {
            }
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
        window.clearInterval(intervalId)
        question.innerText = "Score: " + score
        lastPage.classList.remove("hide")

    }
}
// button to start the quiz and timer
startBtn.addEventListener("click", startQuiz); {
}

userBtn.addEventListener("click", function getText() {
    lastPage.classList.add("hide")
    final.classList.remove("hide")
    localStorage.setItem("textarea1", userText.value); // local storage here
    console.log("set")
    text = textarea;
    document.getElementById().appendChild(localStorage.getItem("textarea1", userText.value));
    console.log("get")



    var setInits = function () {
        localStorage.setItem("textarea1.1", JSON.stringify(setInits));
    }
    console.log("set2")
    var getInits = function () {
        localStorage.getItem("textarea1", JSON.stringify(getInits));
    }
    console.log("get2")
   
    
     // var newNode = document.getElementById("endInits");
    // newNode.innerHTML = userText;
    // endInits = userText.appendTo(text);
})
