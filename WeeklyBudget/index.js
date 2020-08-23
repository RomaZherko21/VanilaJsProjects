let budgetBlock = document.querySelector(".weeklyBudgetAmmount");

let budget = document.querySelector("#budget");
let balance = document.querySelector("#balance");

budgetBlock.children[1].addEventListener("click", () => {
  if (
    +budgetBlock.children[0].value > 0 &&
    +budgetBlock.children[0].value < 10e10
  ) {
    budget.append(+budgetBlock.children[0].value);
    balance.append(+budgetBlock.children[0].value);
    budgetBlock.style.display = "none";
  }
});

const add = document.querySelector("#addBtn");
const name = document.querySelector("#name");
const price = document.querySelector("#ammount");

add.addEventListener("click", (event) => {
  if (
    name.value &&
    +price.value > 0 &&
    +price.value.length < 10 &&
    !isNaN(price.value) &&
    budget.textContent !== ""
  ) {
    makeLi(name.value, price.value);
    changeBalance(price.value);
    lowBalance(balance.textContent);
    name.value = "";
    price.value = "";
  }
});

const ul = document.querySelector(".currentExpenses");

function makeLi(name, price) {
  let li = document.createElement("li");
  li.innerHTML = `${name}: ${price}`;
  ul.append(li);
}

function changeBalance(price) {
  balance.innerHTML = (balance.textContent - price).toFixed(2);
}

function lowBalance(balance) {
  if (balance < 0) {
      let err = document.querySelector('.error');
    err.style.display = 'block';
    err.innerHTML = 'You have used up your entire budget for the week!';
  }
}
