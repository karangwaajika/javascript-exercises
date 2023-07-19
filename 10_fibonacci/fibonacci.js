const fibonacci = function(n) {
    let myArr=[];
    if(n<0){
        return "OOPS";
    }
    let nbr = parseInt(n);
    
    for(let i = 0; i < nbr; i++){
        if(i == 0 || i == 1){
            x = 1;
            myArr.push(x);
        }
        else{
            x = myArr[i-1] + myArr[i-2];
            myArr.push(x);
        }
        }
        return myArr[myArr.length-1];
    
    
};

// Do not edit below this line
module.exports = fibonacci;
