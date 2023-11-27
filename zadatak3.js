const numberInput = document.getElementById('number');
const output = document.getElementById('output');
const checkBtn = document.getElementById('check');

const checkEven = (num) => {
	if (num % 2 === 0) {
		output.innerHTML = "Number is even";
	} else {
		output.innerHTML = "Number is odd";
	}
}

checkBtn.addEventListener('click', () => {
	const number = parseFloat(numberInput.value);
	if (Number.isInteger(number)) {
		checkEven(number);
	} else {
		output.innerHTML = "Decimal numbers or strings can't be tested"
	}
});

numberInput.addEventListener('input', () => output.innerHTML = '');
