const findTheOldest = function(people) {
    let sortOldest = people.sort((beforePerson, afterPerson)=>{
        if (!beforePerson.yearOfDeath) beforePerson.yearOfDeath = (new Date()).getFullYear();
        if (!afterPerson.yearOfDeath) afterPerson.yearOfDeath = (new Date()).getFullYear();
        let beforePersonAge= beforePerson.yearOfDeath -beforePerson.yearOfBirth;
        let afterPersonAge= afterPerson.yearOfDeath -afterPerson.yearOfBirth;

        if (beforePersonAge > afterPersonAge) return -1;
    });
    return sortOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
