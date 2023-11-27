const firstNumber = document.getElementById('firstNum');
const secondNumber = document.getElementById('secondNum');

const add = () => {
	let a = parseFloat(firstNumber.value);
	let b = parseFloat(secondNumber.value);

	if (isNaN(a) || isNaN(b)) {
		return "Cannot perform addition on strings!"
	} else {
		return a + b;
	}
}

const calculateBtn = document.getElementById('calculate');
const output = document.getElementById('output');

calculateBtn.addEventListener('click', () => {
	output.innerHTML = add();
});

firstNumber.addEventListener('input', () => output.innerHTML = '');
secondNumber.addEventListener('input', () => output.innerHTML = '');