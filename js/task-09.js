function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
// console.log(getRandomHexColor());
const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.querySelector('body')
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick (event) {
  refs.span.textContent = refs.body.style.backgroundColor = getRandomHexColor();
};
