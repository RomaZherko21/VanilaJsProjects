const questions = {
  "Which of the following is used to request and load data Asynchronously?": [
    ["SQL", "Ajax", "JSON", "Bootstrap"],
    "Ajax",
  ],
  "Which of the following is not an inbuilt array function in JavaScript?": [
    ["filter", "forEach", "map", "set"],
    "set",
  ],
  "You want to store an Array called 'items' to local storage. How will you convert it?": [
    [
      "JSON.stringify(items)",
      "items.indexOf()",
      "Object.keys(items)",
      "item.toString()",
    ],
    "JSON.stringify(items)",
  ],
  "Which property references the DOM object that dispatched an event?": [
    ["self", "object", "target", "source"],
    "target",
  ],
  "How does a function create a closure?": [
    [
      "It reloads the document whenever the value changes",
      "It returns a reference to a variable in its parent scope",
      "It completes execution without returning",
      "It copies a local variable to the global scope",
    ],
    "It returns a reference to a variable in its parent scope",
  ],
  "How is a forEach statement different from a for statement?": [
    [
      "Only a for statement uses a callback function",
      "A for statement is generic, but a forEach statement can be used only with an array",
      "Only a forEach statement lets you specify your own iterator.",
      "A forEach statement is generic, but a for statement ca be used only with an array",
    ],
    "A for statement is generic, but a forEach statement can be used only with an array",
  ],
};

const keys = Object.keys(questions);
const values = Object.values(questions);

const question = document.querySelector("#question");
const correct = document.querySelector("#correct");
const answers = document.querySelector("#answers");

let count = -1;
let score = 0;

function makeQuestionListeners() {
  for (let div of answers.children) {
    div.addEventListener("click", () => {
      makeNewQuestions(div);
    });
  }
}

function makeNewQuestions(div) {
  if (div && div.textContent == values[count][1]) {
    score++;
  }
  if (count == keys.length - 1) {
    makeScore();
    return;
  }
  count++;
  question.innerHTML = keys[count];
  for (let i = 0; i < values[0][0].length; i++) {
    answers.children[i].innerHTML = values[count][0][i];
  }
}

function makeScore() {
  correct.innerHTML = `Your score: ${score}/${keys.length}`;
}

function init() {
  makeQuestionListeners();
  makeNewQuestions();
}

window.onload = init;
