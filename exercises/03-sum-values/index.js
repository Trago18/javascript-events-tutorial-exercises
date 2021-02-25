window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;

	let result = parseInt(stringA) + parseInt(stringB);

	document.querySelector("#resultNumber").value = result;
};
