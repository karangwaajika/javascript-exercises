const reverseString = function(string) {
    const reversedStringArray = [];
    let reversedString = '';
    for(let i = 0; i < string.length; i++) {
        reversedStringArray.unshift(string[i]);
    }

    for(let j = 0; j < reversedStringArray.length; j++) {
        reversedString += reversedStringArray[j];
    }
    return reversedString;
        

};

// Do not edit below this line
module.exports = reverseString;
