const reverseString = function(string) {
    i = string.length - 1;
    let reversedString = "";
    
    while (reversedString.length < string.length){
        reversedString += string.charAt(i);
        i--;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
