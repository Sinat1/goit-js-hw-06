const inputRef = document.querySelector("#validation-input");

const requiredInputLength = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(requiredInputLength)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
