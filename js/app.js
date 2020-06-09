'use strict'
var userName = prompt("what is your name?");
var elWelcome = document.getElementById('welcome');
elWelcome.textContent = 'welcome ' + userName;
//sum variable add 1 for each correct answer
var sum = 0;
//
alert("answer the next question with eiyher (yes/no) or (y/n)");
var myName = prompt("is my name mohammad samara?");
switch (myName.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log("right answer");
        alert("right answer");
        sum += 1;
        break;
    case 'no':
    case 'n':
        //console.log("wrong answer");
        alert("wrong answer");
        break;
    default:
        //console.log("incorrect input");
        alert("incorrect input");
        break;
}
//
var country = prompt("do I live in jordan?");
switch (country.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log("right answer");
        alert("right answer");
        sum += 1;
        break;
    case 'no':
    case 'n':
        // console.log("wrong answer");
        alert("wrong answer");
        break;
    default:
        //console.log("incorrect input");
        alert("incorrect input");
        break;
}
//
var city = prompt("do I live in amman city?");
switch (city.toLowerCase()) {
    case 'no':
    case 'n':
        //console.log("right answer");
        alert("right answer");
        sum += 1;
        break;
    case 'yes':
    case 'y':
        //console.log("wrong answer");
        alert("wrong answer");
        break;
    default:
        //console.log("incorrect input");
        alert("incorrect input");
        break;
}
//
var major = prompt("have I studied mechanical engineering?");
switch (major.toLowerCase()) {
    case 'no':
    case 'n':
        //console.log("right answer");
        alert("right answer");
        sum += 1;
        break;
    case 'yes':
    case 'y':
        //console.log("wrong answer");
        alert("wrong answer");
        break;
    default:
        //console.log("incorrect input");
        alert("incorrect input");
        break;
}
//
var music = prompt("do I enjoy listening to music?");
switch (music.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log("right answer");
        alert("right answer");
        sum += 1;
        break;
    case 'no':
    case 'n':
        //console.log("wrong answer");
        alert("wrong answer");
        break;
    default:
        //console.log("incorrect input");
        alert("incorrect input");
        break;
}
// guess the number
for (var i = 1; i <= 4; i++) {
    var guessNum = prompt("guess the number which I am thinking about?(enter a number)")
    if (guessNum == 7) {
        alert("write answer")
        sum += 1;
        console.log("the user quessed the right number " + guessNum)
        break;
    } else if ((7 - guessNum) > 0) {
        alert("too low")
        console.log("the user quessed the wrong number " + guessNum)
        if (i == 4) { alert("the right answer is 7") }
    } else {
        alert("too high")
        console.log("the user quessed the wrong number " + guessNum)
        if (i == 4) { alert("the right answer is 7") }
    }
}

// ask about favorite cars
var favCar = ["bmw", "jeep", "kia"];
var correct = false;
for (var i = 1; i <= 6; i++) {
    var guessCar = prompt("guess the car brand which I like");
    for (var j = 0; j < favCar.length; j++) {
        if (guessCar.toLowerCase() == favCar[j]) {
            correct = true;
        }
    }
    if (correct) {
        alert("right answer");
        sum += 1;
        console.log("the user guess the right car: " + guessCar)
        break;
    } else {
        alert("wrong answer")
        console.log("the user guess the wrong car: " + guessCar)
    }
}

var allAnswer = "";
for (var i = 0; i < favCar.length; i++) {
    allAnswer += favCar[i] + "  ";
} alert("the right answers are: " + allAnswer)

//total score
alert("your total score is: " + sum + " of 7")
console.log("the user's total score is: " + sum)
//
