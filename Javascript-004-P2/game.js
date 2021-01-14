const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the Javascript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href = 'xxx.js'>",
    choice2: "<script name = 'xxx.js'>",
    choice3: "<script src = 'xxx.js'>",
    choice4: "<script file = 'xxx.js'>",
    answer: 3,
  },
  {
    Question: "How do you write 'hello world' in an alert box?",
    choice1: "msgBox('hello world');",
    choice2: "alertBox('hello world');",
    choice3: "msg('hello world');",
    choice4: "alert('hello world');",
    answer: 4,
  },
];

//Constants
const CORRECTION_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
};
