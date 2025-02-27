const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numbers) {
	return numbers.reduce((total, currentNum)=> total+currentNum, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, currentNum)=> total*=currentNum, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
  let result = 1;
  
	if (num===0||num===1) return result;

  else if (num>1){
    for (let i =num;i>=1;i--){
      result = result*i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
