let input = document.querySelector(".inputWeight");
let select = document.querySelector(".units");
let output = document.querySelector(".outputInfo");

input.addEventListener("input", () => converter(input.value, select.value));
select.addEventListener("click", () => converter(input.value, select.value));

function converter(value, measure) {
    if (measure == "kg") output.innerHTML = `${(value * 2.2).toFixed(2)} pounds`;
    if (measure == "pounds")
    output.innerHTML = `${(value / 2.2).toFixed(2)} killogramms`;
    if (typeof value == "string") output.innerHTML = `Need a number!`;
}
