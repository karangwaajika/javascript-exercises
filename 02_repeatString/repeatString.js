const repeatString = function(string, nbr) {
    if(string == ''){
        return '';
    }
    if(1 == nbr){
        return string;
    }
    else if(nbr == 0){
        return '';
    }
    else if(nbr < 0){
        return 'ERROR';
    }
   
    else{
        return string+repeatString(string, nbr-1);
    }
    


};

// Do not edit below this line
module.exports = repeatString;
