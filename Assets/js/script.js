// use prompts that take in user input that has to be correct to proceed.
var ol = document.querySelector("ol")
var button = document.querySelector("button")

$('<ol>').text("Commonly used data types DO NOT include:").appendTo('body')
$('<li1>').text("1. Strings ").appendTo('ol').appendTo('body') 
$('<li2>').text("2. Booleans ").appendTo('ol').appendTo('body') 
$('<li3>').text("3. Alerts ").appendTo('ol').appendTo('body') 
$('<li4>').text("4. Numbers ").appendTo('ol').appendTo('body')
    console.log("first question")
// questions selector
//ol.addEventListener("click", function(event) {
    //if (event.target.matches("li")) {
        //console.log(event.target.innerText)
    //}
//})
//button to start countdown
$('<button>').text("Start Quiz").appendTo('body')
//button.addEventListener("click", function(event) {
    //if (event.target.matches("")) {
        console.log("button")
  //}
//})


//child of child for list items

// make a timer.
// have timer start on click.
// display answer result alerts.
// display final score
// take in user initials.
// cache scores .
// log and rotate 5 highest scores as they change. (how tf?)
// display high score rankings.