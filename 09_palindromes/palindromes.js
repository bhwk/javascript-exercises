const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"",).replace(/\s/g, '');
    let reverseString = string.split("").reverse().join("");
    return string === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
