// make a timer.
// have timer start on click.
// display answer result alerts.
// display final score
// take in user initials.
// cache scores .
// log and rotate 5 highest scores as they change. (how tf?)
// display high score rankings.
var startBtn = document.querySelector("#startBtn")
var userInput = document.querySelector("#choices")
var index = 0
var startPage = document.querySelector("#startPage")

// 
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
    console.log("im clicked");
    startPage.setAttribute("class", "hide")
}
// function to run through the quiz questions
// function quizRender() {
    //     var currentQuestion = quizQuestions[index];
    //     question.innerText = currentQuestion.question;
    //    userInput.innerHTML ="";
    
    //      for (var i = 0; i < currentQuestion.choices.length; i++) {
//         var btnChoice = document.createElement('button');
//        var choice = currentQuestion.choices[index];
//       //  btnChoice.innerText = choice;
//         btnChoice.setAttribute("class", "choice")
//         btnChoice.setAttribute("value", choice)
//         btnChoice.onclick = checkClick;
//        userInput.appendChild(btnChoice);
//        console.log('loop');
//     }
// }


//button to start countdown

startBtn.addEventListener("click", startQuiz());