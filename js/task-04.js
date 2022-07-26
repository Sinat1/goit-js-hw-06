let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

const minusCount = () => {
  counterValue -= 1;

  counter.textContent = counterValue;
};

const plusCount = () => {
  counterValue += 1;

  counter.textContent = counterValue;
};

decrementBtn.addEventListener("click", minusCount);
incrementBtn.addEventListener("click", plusCount);
