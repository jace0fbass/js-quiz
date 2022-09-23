var ol = document.querySelector("ol")
var button = document.querySelector("button")
var resultAlert = document.querySelector(alert("Correct!"))

var quizQuestions = [{
    question:  "Commonly used data types DO NOT include:",
    correct: resultAlert, 
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers']
},
{
    question:  "The condition in an if else statement is enclosed within _____.",
    correct: resultAlert, 
    choices: ['Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets']
},
{
    question:  "Arrays in Javascript can be used to store _____.",
    correct: resultAlert, 
    choices: ['Numbers and Arrays', 'Booleans', 'Other Arrays', 'All of the above']
},
{
    question:  "String values must be enclosed within _____ when being assigned to variables.",
    correct: resultAlert, 
    choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parentheses']
},
{
    question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    correct: resultAlert, 
    choices: ['Quotes', 'booleans', 'alerts', 'numbers']
}

//]
//for (i =0; i < quizQuestions.length; i++) {
    
//}

$('<button>').text("Start Quiz").appendTo('body')
//button.addEventListener("click", function(event) {
    //if (event.target.matches("")) {
        console.log("button")
        //}
        //})
        
// use prompts that take in user input that has to be correct to proceed.
// need to create function to run through these prompts but stop them if they get the answer wrong answer. finish after 5 questions or 1 minute.
// need if statements


/*$('<ul>').text("Commonly used data types DO NOT include:").appendTo('body')
$('<li1>').text("1. Strings ").appendTo('ol').appendTo('body') 
$('<li2>').text("2. Booleans ").appendTo('ol').appendTo('body') 
$('<li3>').text("3. Alerts ").appendTo('ol').appendTo('body') 
$('<li4>').text("4. Numbers ").appendTo('ol').appendTo('body')
console.log("first question")

$('<ul>').text("The condition in an if else statement is enclosed within _____.").appendTo('body')
$('<li1>').text("1. Quotes ").appendTo('ol').appendTo('body') 
$('<li2>').text("2. Curly Brackets ").appendTo('ol').appendTo('body') 
$('<li3>').text("3. Parentheses ").appendTo('ol').appendTo('body') 
$('<li4>').text("4. Square Brackets ").appendTo('ol').appendTo('body')
    console.log("second question")

$('<ul>').text("Arrays in Javascript can be used to store _____.").appendTo('body')
$('<li1>').text("1. Numbers and Strings ").appendTo('ol').appendTo('body') 
$('<li2>').text("2. Other Arrays ").appendTo('ol').appendTo('body') 
$('<li3>').text("3. Booleans ").appendTo('ol').appendTo('body') 
$('<li4>').text("4. All of the above ").appendTo('ol').appendTo('body')
    console.log("third question")

$('<ul>').text("String values must be enclosed within _____ when being assigned to variables.").appendTo('body')
$('<li1>').text("1. Commas ").appendTo('ol').appendTo('body') 
$('<li2>').text("2. Curly Brackets ").appendTo('ol').appendTo('body') 
$('<li3>').text("3. Quotes ").appendTo('ol').appendTo('body') 
$('<li4>').text("4. Parenthesis ").appendTo('ol').appendTo('body')
    console.log("fourth question")

$('<ul>').text("A very useful tool used during development and debugging for printing content to the debugger is:").appendTo('body')
$('<li1>').text("1. Javascript ").appendTo('ol').appendTo('body') 
$('<li2>').text("2. Terminal/Bash ").appendTo('ol').appendTo('body') 
$('<li3>').text("3. for loops ").appendTo('ol').appendTo('body') 
$('<li4>').text("4. console log ").appendTo('ol').appendTo('body')
    console.log("fifth question")

// questions selector
//ol.addEventListener("click", function(event) {
    //if (event.target.matches("li")) {
        //console.log(event.target.innerText)
    //}
//})
//button to start countdown

//child of child for list items

// make a timer.
// have timer start on click.
// display answer result alerts.
// display final score
// take in user initials.
// cache scores .
// log and rotate 5 highest scores as they change. (how tf?)
// display high score rankings.