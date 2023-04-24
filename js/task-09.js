function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

const changeBgColor = () => {
  body.style.backgroundColor = textColor.textContent = getRandomHexColor();
  // textColor.textContent = getRandomHexColor();
}

changeColorBtn.addEventListener('click', changeBgColor);
