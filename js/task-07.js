const fontSize = document.getElementById("font-size-control");
const text = document.getElementById('text');

function fontSizeChange(event) {
    text.style.fontSize = event.target.value + 'px';
}

fontSize.addEventListener("input", fontSizeChange);
