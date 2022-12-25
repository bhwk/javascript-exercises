const convertToCelsius = function(fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * (5/9);

  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheit = celsiusTemp * (9/5) + 32;

  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
