# mohammad-samara-Blog

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage) \*[New Feature](#New-Feature)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

# About the Project

A blog that show off my scientific and practical history as well as personal information and a outline of my projects in the field of web development.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites

- Operating system: Mac OS, Windows, Linux
- Git
  Follow the instruction in the links below to install git in your machine
  - [Windows](https://git-scm.com/download/win)
  - [Mac OS](https://git-scm.com/download/mac)
  - [Linux](https://git-scm.com/download/linux)
- [Codeing Editor](https://www.wpbeginner.com/showcase/12-best-code-editors-for-mac-and-windows-for-editing-wordpress-files/)

# Installation

1. open your terminal

2. Clone the repo

`git clone https://github.com/AbdallahSafi/AbdallahSafi-Blog.git`

# Usage

You can use this project to start youe own blog. For now there is just about me page and I will add to the project later the other pages incrementally so you can check this repo from time to time.

I added a guessing game to the blog so the visitor can guess who your through series of questions.

# Code Example

You can Change the questions and the answers based on your interest

```javascript
function Q1() {
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
}
```

- `Q1` where you put your first question
- The alerts where you put your responses

_Note_: There is five functions for five question you can repeat this as many times as you wish.

# New Feature

I added new type of questions to the guessing game.

Now You have a 6th and 7th Question.

**6th Question**
This question accepts a numeric input and the user have 4 attemps to guess the right answer.

see the code

```javascript
function Q6() {
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
}
```


**7th Question**
This question is about guessing a the correct answer from a multiple correct answers and the user have 6 attemps to get the correct answer.

```javascript
function Q7() {
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
}
```

# Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

# contribution

this project has been edited by Hisham Alnaji

# License

Distributed under the MIT License. See [LICENSE](https://www.mit.edu/~amini/LICENSE.md) for more information.

# Contact

Mohammad samara - mohammad.ab.samara@gmail.com

Project Link: https://github.com/mohammad-samara/About-Me
