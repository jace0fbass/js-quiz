// make a timer.
// have timer start on click.
// display answer result alerts.
// display final score
// take in user initials.
// cache scores .
// log and rotate 5 highest scores as they change. (how tf?)
// display high score rankings.
var userInput = document.getElementById("#choices")
var startBtn = document.getElementById("#startBtn")
var startBtn = document.getElementById("#startBtn")
var startPage = document.getElementById("#startPage")
var index = 0
var score = 0
var timeLeft = 60
var container = ""
var quizQuestions = [{
    question:  "Commonly used data types DO NOT include:",
    correct: 'Alerts', 
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers']
},
{
    question:  "The condition in an if else statement is enclosed within _____.",
    correct: 'Curly Brackets', 
    choices: ['Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets']
},
{
    question:  "Arrays in Javascript can be used to store _____.",
    correct: 'All of the above', 
    choices: ['Numbers and Arrays', 'Booleans', 'Other Arrays', 'All of the above']
},
{
    question:  "String values must be enclosed within _____ when being assigned to variables.",
    correct: 'Commas', 
    choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parentheses']
},
{
    question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    correct: 'Booleans', 
    choices: ['Quotes', 'Booleans', 'Alerts', 'Numbers']
}
]

function startQuiz() {
    console.log("im clicked")
    // startPage.setAttribute("class", "hide")
if (this.value === quizQuestions[index].correct) {
    console.log('Correct!')
} else {
    console.log('Incorrect!')
    timeLeft -= 5;
}


    // function to run through the quiz questions
    function quizRender(choice) {
        var currentQuestion = quizQuestions[index]
        question.innerText = currentQuestion.question
        
        for (var i = 0; i < currentQuestion.choices.length; i++) {
            var li = document.createElement('li')
            var choice = quizQuestions.choices[index]
            li.setAttribute("class", "choice")
            li.innerText = choice[0].question[i]
            li.onclick = checkClick
            userInput.appendChild(li)
            
            console.log('loop')
        }
    }
    
}

startBtn.addEventListener("click", startQuiz()); {
    
}
quizRender(quizQuestions[0])

    //button to start countdown
    