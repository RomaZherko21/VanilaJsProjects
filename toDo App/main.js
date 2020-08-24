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
  if (input.value.length < 50 && input.value.length > 1) {
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
  }
  complete(event) {
      if(event.target.style.color == "green"){
        event.target.style.color = "black"
      }else{
          event.target.style.color = "green";
      }
  }
  addLi() {
    let li = document.createElement("li");
    li.className = "toDoTask";

    let trash = document.createElement("i");
    trash.className = "fas fa-trash";
    trash.addEventListener("click", this.remove);

    let check = document.createElement("i");
    check.className = "fas fa-check";
    check.addEventListener("click", this.complete);

    let div = document.createElement("div");
    div.className = "listIcons";

    div.append(check, trash);
    li.append(this.value, div);
    ul.append(li);
  }
}
