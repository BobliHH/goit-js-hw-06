// const inputText = document.getElementById('validation-input');

// inputText.addEventListener("focus", event => {
//     event.target.style.borderColor = 'green';
// });

// inputText.addEventListener("blur", (event) => {
//   const dataLength = inputText.dataset.length;
//   const inputValueLength = inputText.value.length;

//     if (inputValueLength === dataLength) {
//         event.target.style.borderColor = "green";
//         console.log(inputValueLength);
//         console.log(inputDataLength);
//     }
//     else {
//         event.target.style.borderColor = "red";
//         console.log(inputValueLength);
//         console.log(inputDataLength);
//     }

// });

const inputText = document.getElementById("validation-input");
// inputText.addEventListener("blur", event);

// function event() {
//   const dataLength = inputText.dataset.length;
//   const inputValueLength = inputText.value.length;

//   if (inputValueLength == dataLength) {
//     inputText.classList.add("valid");
//     inputText.classList.remove("invalid");

//     console.log(inputValueLength);
//     console.log(dataLength);

//   } else {
//     inputText.classList.remove("valid");
//     inputText.classList.add("invalid");

//     console.log(inputValueLength);
//     console.log(dataLength);
//   }
// }

inputText.addEventListener("blur", borderColor => {
  if (borderColor.target.value.length == inputText.dataset.length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");

    console.log(borderColor.target.value.length);
    console.log(inputText.dataset.length);
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");

    console.log(borderColor.target.value.length);
    console.log(inputText.dataset.length);
  }
});
