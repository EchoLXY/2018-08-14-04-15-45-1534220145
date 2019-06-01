'use strict'

function remainder() {
	if(arguments.length < 2) {
	return null;
	}
	var num1 = arguments[0];
	var num2 = arguments[1];
	return num1 % num2;
}
