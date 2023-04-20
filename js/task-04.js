let counter = 0;
const value = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onClickDecrementBtn = (subtract) => {
    counter -= 1;
    value.textContent = counter;
}

const onClickIncrementBtn = (add) => {
  counter += 1;
  value.textContent = counter;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);

