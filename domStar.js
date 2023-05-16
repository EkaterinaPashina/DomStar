const exerciseNumber = document.getElementById('exerciseNumber');
let exerciseSquare = document.getElementById('exerciseSquare');
const button = document.querySelector('button');

const squareOfNumber = () => {
    let number = exerciseNumber.value;
    const numberSquare = (number * number);
    exerciseSquare.value = numberSquare;
};

button.onclick = squareOfNumber;