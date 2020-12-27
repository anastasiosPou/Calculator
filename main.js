const resultsPane = document.getElementById('results-pane');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');
const arithmeticOperationsSection = document.getElementById('arithmetic-operations');
const numberPadSection = document.getElementById('number-pad');

//The event on the numberpad will output the number clicked on the results pane and 
//will trigger some other functionality
numberPadSection.addEventListener('click', (e) => {
	e.stopPropagation();
	
	if (resultsPane.textContent.match(/^0/)) {
		resultsPane.textContent = '';
	}
	
	resultsPane.textContent += e.target.value;
});

//Event to clear the results pane from any number that we input.
clearButton.addEventListener('click', (e) => resultsPane.textContent = '0');

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