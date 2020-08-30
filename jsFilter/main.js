const search = document.querySelector("#search");
const ul = document.querySelector(".topicsList");

let dictionary = [
  "AngularJs",
  "Ajax",
  "CSS",
  "Bootstrap",
  "Events",
  "ES6",
  "Flexbox",
  "Git",
].sort();

window.onload = init(dictionary);

function init(dictionary) {
  renderList(dictionary);
}

function renderList(dictionary) {
  let currentLetter;
  ul.innerHTML = "";
  for (let word of dictionary) {
    if (currentLetter !== word[0]) {
      currentLetter = word[0];
      ul.append(setLi(currentLetter, "letter"));
      ul.append(setLi(word, "word"));
    } else {
      ul.append(setLi(word, "word"));
    }
  }
}

function setLi(text, addClass) {
  let li = document.createElement("li");
  li.className = addClass;
  li.innerHTML = text;
  return li;
}

search.addEventListener("input", (event) => {
  if (event.target.value == "") {
    renderList(dictionary);
  } else {
    let mainLetter = event.target.value.toLowerCase();
    let newDictionary = dictionary.filter(
      (item) => {
          if(item.slice(0,mainLetter.length).toLowerCase() == mainLetter) return true;
      }
    );
    renderList(newDictionary);
  }
});

