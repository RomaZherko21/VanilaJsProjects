const copy = document.querySelector("#copyPassword");
const password = document.querySelector("#generatedPassword");

const length = document.querySelector("#passwordLength");
const generate = document.querySelector("#generatePassword");

const numbers = document.querySelector("#numbersInclude");
const symbols = document.querySelector("#specialSymbols");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(password.value);
  password.value = "";
});

function lengthValidate() {
  if (length.value < 5 || length.value > 25) {
    let err = document.querySelector(".wrongLength");
    err.innerHTML = "Select a length between 5 and 25";
    err.style.display = "block";
    setTimeout(() => {
      err.style.display = "none";
    }, 2000);
    return false;
  }
  return true;
}

generate.addEventListener("click", () => {
  if (lengthValidate()) password.value = randomPassword();
});

let randomFunctions = [
  getRandomUppercase,
  getRandomLowercase,
  getRandomNumber,
  getRandomSymbol,
];

function randomPassword() {
  let str = "";
  for (let i = 0; i < length.value; i++) {
    if (numbers.checked && symbols.checked) {
      str += randomFunctions[Math.floor(Math.random() * 4)]();
    }
    if (numbers.checked && !symbols.checked) {
      str += randomFunctions[Math.floor(Math.random() * 3)]();
    }
    if (!numbers.checked && symbols.checked) {
      randomFunctions[2] = getRandomSymbol;
      str += randomFunctions[Math.floor(Math.random() * 3)]();
      randomFunctions[2] = getRandomNumber;
    }
    if (!numbers.checked && !symbols.checked) {
      str += randomFunctions[Math.floor(Math.random() * 2)]();
    }
  }
  return str;
}

function getRandomUppercase() {
  // (65 to 90) ascii values for (A to Z)
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowercase() {
  // (97 to 122) ascii values for (a to z)
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10).toString();
}

function getRandomSymbol() {
  const str = "!@#$%^&*()_+<>{}?:";
  return str[Math.floor(Math.random() * str.length)];
}
