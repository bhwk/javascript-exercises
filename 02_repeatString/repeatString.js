const repeatString = function(string, timesRepeat) {
    if (timesRepeat<0){
        return 'ERROR';
    }
    
    let totalString = "";
    for (let i=0; i<timesRepeat; i++){
        totalString+=string;
    }
    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
