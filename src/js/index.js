const rollButton = document.getElementById("die__button");
const dieNumber = document.getElementById("die__number");

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

rollButton.addEventListener("click", function () {
  dieNumber.innerHTML = roll();
});
