const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

const getInputValue = () => {
  if (inputName.value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputName.value;
  }
};

inputName.addEventListener("input", getInputValue);
