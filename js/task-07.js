const refs = {
    input: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text')
}

refs.input.addEventListener('input', onRangeMove);

function onRangeMove(event) {
    // refs.spanText.style.fontSize = event.currentTarget.value + 'px';
    refs.spanText.style.fontSize = `${event.currentTarget.value}px`;
    console.log(event.currentTarget.value);
}











