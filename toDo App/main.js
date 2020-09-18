const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector(".toDoList");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addToDoHandler();
  }
});

addBtn.addEventListener("click", addToDoHandler);

function addToDoHandler() {
  if (
    input.value.length < 50 &&
    input.value.length > 1 &&
    !localStorage.getItem(input.value)
  ) {
    localStorage.setItem(
      input.value,
      JSON.stringify({ value: input.value, complete: false })
    );

    let li = new Li(input.value);
    li.addLi();
    input.value = "";
  }
}

class Li {
  constructor(value) {
    this.value = value;
  }

  remove(event) {
    event.target.parentNode.parentNode.remove();
    localStorage.removeItem(this.value);
  }
  complete(event) {

    let item = JSON.parse(localStorage.getItem(this.value));
    localStorage[item.value] = `{"value": "${
      item.value
    }", "complete": ${!item.complete}}`;

    if (item.complete) {
      event.target.style.color = "black";
    } else {
      event.target.style.color = "green";
    }
  }
  addLi() {
    let li = document.createElement("li");
    li.className = "toDoTask";

    let trash = document.createElement("i");
    trash.className = "fas fa-trash";
    this.remove = this.remove.bind(this);
    trash.addEventListener("click", this.remove);

    let check = document.createElement("i");
    check.className = "fas fa-check";
    this.complete = this.complete.bind(this);
    check.addEventListener("click", this.complete);

    let div = document.createElement("div");
    div.className = "listIcons";

    div.append(check, trash);
    li.append(this.value, div);
    ul.append(li);

 
  }
}

window.onload = function () {
  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    let li = new Li(JSON.parse(localStorage.getItem(key)).value);
    li.addLi()

  }
};
