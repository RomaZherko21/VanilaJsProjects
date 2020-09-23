const budgetBlock = document.querySelector(".weeklyBudgetAmmount");
const budget = document.querySelector("#budget");
const balance = document.querySelector("#balance");

budgetBlock.children[1].addEventListener("click", () => {
  if (
    /^\d{1,10}$/g.test(budgetBlock.children[0].value)
  ) {
    budget.append(+budgetBlock.children[0].value);
    balance.append(+budgetBlock.children[0].value);
    budgetBlock.style.display = "none";
  }
});

const add = document.querySelector("#addBtn");
const name = document.querySelector("#name");
const price = document.querySelector("#ammount");
const ul = document.querySelector(".currentExpenses");

add.addEventListener("click", (event) => {
  if (
    name.value &&
   /^\d{1,10}$/g.test(price.value) &&
    budget.textContent !== ""
  ) {
    makeLi(name.value, price.value);
    changeBalance(price.value);
    lowBalance(balance.textContent);
    name.value = "";
    price.value = "";
  }
});

function makeLi(name, price) {
  let li = document.createElement("li");
  li.innerHTML = `${name}:  $${price}`;
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
