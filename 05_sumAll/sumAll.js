const sumAll = function(nbr1, nbr2) {
    let sumOfInterval = 0;
    let maxNumber=0;
    let minNumber=0;
    if(nbr2 >= nbr1){
        maxNumber = nbr2;
        minNumber = nbr1;
    }
    else{
        maxNumber = nbr1;
        minNumber = nbr2;
    }
    for(let i = minNumber; i <= maxNumber; i++){
        sumOfInterval += i; 
    }
    return sumOfInterval;

};

// Do not edit below this line
module.exports = sumAll;
