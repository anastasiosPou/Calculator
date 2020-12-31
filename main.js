const resultsPane = document.getElementById('results-pane');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');
const arithmeticOperationsSection = document.getElementById('arithmetic-operations');
const numberPadSection = document.getElementById('number-pad');
const equalsButton = document.getElementById('equals-btn');

let inputNumbers = [];
let operations = [];

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function equals(result) { 
	resultsPane.textContent = result;
}

function determineOperationFrom(value) {
	switch (value) {
		case 'add':
			return add;
			break;
		case 'subtract':
			return subtract;
			break;
		case 'multiply':
			return multiply;
			break;
		case 'divide':
			return divide;
			break;
		case 'equals':
			return equals;
			break;
	}
}

function reset() {
	mathResult = 0;
	inputNumbers = [];
}

function clearResultsPane() {
	resultsPane.textContent = '0';
}

function evaluateMath(result) {
	result = inputNumbers.reduce(operations[operations.length - 2]);
	
	if (operations[operations.length - 1] === equals) {
		equals(result);
		reset();
	} else {
		inputNumbers = [result];
	}
}

resultsPane.textContent = '0';

//The event on the numberpad will output the number clicked on the results pane and 
//will trigger some other functionality
numberPadSection.addEventListener('click', (e) => {
	e.stopPropagation();
	
	if (resultsPane.textContent.match(/^0|[a-zA-Z]/)) {
		resultsPane.textContent = '';
	}
	
	resultsPane.textContent += e.target.value;
});

//Event to clear the results pane from any number that we input.
clearButton.addEventListener('click', (e) => {
	clearResultsPane();
	reset();
});

//Event to delete the last number entered
deleteButton.addEventListener('click', (e) => {
	e.stopPropagation();

	if (resultsPane.textContent.length > 0) {
		resultsPane.textContent = resultsPane.textContent.slice(0, resultsPane.textContent.length - 1);
	} 
	
	if (resultsPane.textContent.length < 1) {
		resultsPane.textContent = '0';
	}
	
});

// Event listener for the arithmetic operations section
arithmeticOperationsSection.addEventListener('click', (e) => {
	e.stopPropagation();
	const mathResult = 0;
	
	if (resultsPane.textContent !== '0') {
		
		//add the number that we type to the array of input numbers
		inputNumbers.push(Number.parseInt(resultsPane.textContent));
		
		//We push the opearation to the operations array
		operations.push(determineOperationFrom(e.target.value));
		
		resultsPane.textContent = '0';
		
		if (inputNumbers.length > 1) {
			evaluateMath(mathResult);
		}
	} 
});



