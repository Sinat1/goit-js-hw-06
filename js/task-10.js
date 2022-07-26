function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  numInput: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesDiv: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => {
  createBoxes(refs.numInput.value);
});

let size = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEL = document.createElement("div");
    divEL.style.width = `${size}px`;
    divEL.style.height = `${size}px`;
    size += 10;
    refs.boxesDiv.append(divEL);
    divEL.style.backgroundColor = getRandomHexColor();
  }
}

refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
  refs.numInput.value = "";
  size = 30;
}
