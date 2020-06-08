'use strict'
var userName = prompt("what is your name?");
var elWelcome=document.getElementById('welcome');
elWelcome.textContent='welcome ' + userName;


alert("answer the next question with eiyher (yes/no) or (y/n)");
var myName = prompt("is my name mohammad samara?");
switch(myName.toLowerCase()){
    case 'yes' :
    case 'y' :
    //console.log("right answer");
    alert("right answer");
    break;
    case 'no':
    case 'n' :
    //console.log("wrong answer");
    alert("wrong answer");
    break;
    default :
    //console.log("incorrect input");
    alert("incorrect input");
    break;
}
var country = prompt("do I live in jordan?");
switch(country.toLowerCase()){
    case 'yes' :
    case 'y' :
   // console.log("right answer");
    alert("right answer");
    break;
    case 'no':
    case 'n' :
    // console.log("wrong answer");
    alert("wrong answer");
    break;
    default :
    //console.log("incorrect input");
    alert("incorrect input");
    break;
}
var city = prompt("do I live in amman city?");
switch(city.toLowerCase()){
    case 'no' :
    case 'n' :
    //console.log("right answer");
    alert("right answer");
    break;
    case 'yes':
    case 'y' :
    //console.log("wrong answer");
    alert("wrong answer");
    break;
    default :
    //console.log("incorrect input");
    alert("incorrect input");
    break;
}
var major = prompt("have I studied mechanical engineering?");
switch(major.toLowerCase()){
    case 'no' :
    case 'n' :
    //console.log("right answer");
    alert("right answer");
    break;
    case 'yes':
    case 'y' :
    //console.log("wrong answer");
    alert("wrong answer");
    break;
    default :
    //console.log("incorrect input");
    alert("incorrect input");
    break;
}
var music = prompt("do I enjoy listening to music?");
switch(music.toLowerCase()){
    case 'yes' :
    case 'y' :
    //console.log("right answer");
    alert("right answer");
    break;
    case 'no':
    case 'n' :
    //console.log("wrong answer");
    alert("wrong answer");
    break;
    default :
    //console.log("incorrect input");
    alert("incorrect input");
    break;
}