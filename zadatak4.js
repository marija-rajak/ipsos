const numberInput = document.getElementById('number');
const output = document.getElementById('output');
const expBtn = document.getElementById('exp');

const power = (number) => {
	for (let i = 1; i <= number; i++) {
		output.innerHTML += `<p>${Math.pow(i, 2)}</p>`
	}
}

expBtn.addEventListener('click', () => {
	const number = parseInt(numberInput.value);
	if (Number.isInteger(number) && number > 0) {
		power(number);
	} else {
		output.innerHTML = "Input must be integer and greater than 0"
	}
});

numberInput.addEventListener('input', () => output.innerHTML = '');