const add = function(a, b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
  let reduce = arr.reduce((total, item)=>{
    return total + item;

  },0);
  return reduce;
	
};

const multiply = function(...arr) {
  let reduce = arr.reduce((total, item) => {
    return total * item;

  },1)

  return reduce;

};

const power = function(nbr, pwr) {
  let result=1;
  for(let i = 1; i <= pwr; i++ ){
    result *= nbr;

  }
  return result;
	
};

const factorial = function(nbr) {
  let result = 1;
  if (nbr === 0) return 1;
  for(let i = nbr; i >= 1; i--){
    result *=i ;
  }
  return result;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
