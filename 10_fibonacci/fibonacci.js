const fibonacci = function(index) {
        if(index<0) return "OOPS";
        else if (index < 3) return 1;
        
    // uses binet formula
    return Math.round((1/Math.sqrt(5)) * (Math.pow(((1+Math.sqrt(5))/2),index) - Math.pow(((1-Math.sqrt(5))/2),index)));
};

// Do not edit below this line
module.exports = fibonacci;
