// make a timer.
// have timer start on click.
// display answer result alerts.
// display final score
// take in user initials.
// cache scores .
// log and rotate 5 highest scores as they change. (how tf?)
// display high score rankings.
var userInput = document.getElementById("choices")
var startBtn = document.getElementById("startBtn")
var startPage = document.getElementById("startPage")
var questionContainer = document.getElementById("quizQuestions")
var index = 0
var score = 0
var timeLeft = 60
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

function startQuiz() {
    console.log("im clicked")
    // startPage.setAttribute("class", "hide")
    // if (this.value === quizQuestions[index].correct) {
    //     console.log('Correct!')
    // } else {
    //     console.log('Incorrect!')
    //     timeLeft -= 5;
    // }
    startPage.classList.add("hide")
    questionContainer.classList.remove("hide")
    quizRender(index)    // function to run through the quiz questions


}
// forEachloop
//quizRender(quizQuestions[0])
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
            console.log(li.textContent)
            nextQuestion()
        })


    })
    //for ( var i = 0; i < choiceList.length; i++) {
}


function nextQuestion() {
    index++
    userInput.innerHTML = ""
    if (index < quizQuestions.length) {
        
        quizRender(index)
    } else {
        console.log("done")
        question.innerText =""
        return
    }
}
startBtn.addEventListener("click", startQuiz);


    // for (var i = 0; i < currentQuestion.choices.length; i++) {
    //     var li = document.createElement('li')
    //     var choice = quizQuestions.choices[i]
    //     li.setAttribute("class", "choice")
    //     li.innerText = choice[0].question[i]
    //     li.onclick = checkClick
    //     userInput.appendChild(li)
    //     quizRender()
    //     console.log('loop')
    // }
    //button to start countdown
