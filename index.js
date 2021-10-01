var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;
var highScorers = [{
    name: "Darshil",
    score: "5",
  },
  {
    name: "Rahul",
    score: "4",
  },
  {
    name: "Sonakshi",
    score: "3",
  },
]
var userName = readlineSync.question(chalk.bgBlack("What's you name? "));
console.log(chalk.blue("Welcome " + userName + "! To --- HOW WELL DO YOU KNOW ABOUT AVENGERS?  ---QUIZ"));
console.log("------")


function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.bgBlack(question));
  console.log(chalk.blue("You entered " + userAnswer));

  if (userAnswer === answer) {
    console.log(chalk.green("You were right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("You were worng!"));
    // score = score-1;  I Don't want to penallize user for not knowing me
  }
  console.log(chalk.magentaBright("Your score: " + score));
  console.log("------");
};


var questions = [{
    question: "Which super hero is known for using shield?  ",
    answer: "captainamerica",
  },
  {
    question: "What role scarlett johansson play in series? ",
    answer: "blackwidow",
  },
  {
    question: "Who really defeated THANOS? ",
    answer: "ironman",
  },
  {
    question: "What is the green giant called in series? ",
    answer: "hulk",
  },
  {
    question: "Which superhero is also a billionaire?  ",
    answer: "ironman",
  },
];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.yellowBright(userName + ", Your final score: " + score));
console.log("---------------------------")

console.log(chalk.blue("Check out the high scores:- "));

for (var j = 0; j < highScorers.length; j++) {
  var currentHighscorer = highScorers[j];
  console.log(chalk.yellow(currentHighscorer.name), "-", chalk.green(currentHighscorer.score));
}

if (score >= currentHighscorer.score) {
  console.log("----------------------")
  console.log(chalk.magentaBright("Congratulations!!! " + userName + " You deserve a rank among high scores.Send me a Screenshot your result so that i can update it here. "));
} else {
  console.log();
};