let words = [
  "start",
  "journey",
  "travel",
  "explore",
  "life",
  "experience",
  "happiness",
  "gratitude",
  "discipline",
  "exercise",
  "workout",
  "friendship",
  "practice",
  "routine",
  "morning",
  "reading",
  "books",
  "education",
  "amour",
  "delibrate",
  "protein",
  "partner",
  "empathy",
  "concert",
  "patience",
  "humor",
  "resilience",
  "confidence",
  "consistency",
  "appreciation",
  "literature",
  "meaning",
  "humble",
  "province",
  "flight",
  "alchemy",
  "intense",
  "adorable",
  "swoon",
  "stunning",
  "sensational",
  "provocative",
  "apocalypse",
  "compliance",
  "meticulous",
  "replicate",
  "relentless",
  "pursuit",
  "proactive",
  "astounding",
  "delightful",
  "legitimate",
  "mesmerizing",
  "polarizing",
  "validate",
];

const currentWord = document.querySelector("#word");
const select = document.querySelector("#difficulty");
const wordInput = document.querySelector("#wordInput");
const timeCounter = document.querySelector("#timeCounter");
const scoreCounter = document.querySelector("#scoreCounter");
const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", startGame);

setInterval(setCount, 1000);
setInterval(checkType, 50);

let start = false;
let sec;
let id = 0;

function setCount() {
  if (start && sec >= 0) {
    timeCounter.innerHTML = --sec;
  } 
}

function startGame() {
  currentWord.innerHTML = words[id];
  start = true;
  if (select.value == "Easy") {
    sec = 9;
  }
  if (select.value == "Medium") {
    sec = 7;
  }
  if (select.value == "Hard") {
    sec = 5;
  }
}

function checkType() {
  if (wordInput.value == words[id] && sec > 0) {
    id = Math.floor(Math.random() * words.length);
    wordInput.value = "";
    scoreCounter.innerHTML = `${1+ +scoreCounter.textContent}`;
    startGame();
  } else if (sec == 0 && start) {
    start = false;
    currentWord.innerHTML = "Try Again";
    scoreCounter.innerHTML = '0';
  }
}
