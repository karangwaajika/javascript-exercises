const palindromes = function (word) {
  let newArr = [];
  let reverse = "";
  let newWordArr=[]
  let newWord= "";
  for (let i = 0; i < word.length; i++) {
    newArr.unshift(word[i]);
  }
  for (let k = 0; k < word.length; k++) {
    newWordArr.push(word[k]);
  }
  for(let o = 0; o < newWordArr.length; o++){
    if(newWordArr[o] == ' ' || newWordArr[o] == '!' || newWordArr[o] == '.'|| newWordArr[o] == ','){
        newWordArr.splice(o,1);
        o--;
        continue;
    }
    newWord += newWordArr[o];
  }
  for (let j = 0; j < newArr.length; j++) {
    if(newArr[j] == ' ' || newArr[j] == '!' || newArr[j] == '.' || newArr[j] == ','){
        newArr.splice(j,1);
        j--;
        continue;
    
    }
    reverse += newArr[j];
    
  }

  if(newWord.toLowerCase() ==reverse.toLowerCase()){
    return true;
  }
  else{
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;

