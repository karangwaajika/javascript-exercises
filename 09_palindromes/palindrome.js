const palindromes=function(word){
    let WordArr = [];
    let reverseArr=[];
   
    for(let i =0; i<word.length; i++){
        WordArr.push(word[i]);
    }
    const filter = WordArr.filter(item=>{
        if(item != ',' && item !=' ' && item != '.' && item != '!'){
            return true;
        }
    });
    const newWord = filter.reduce((text, item)=>{
        return text += item;
    }, '');
    for(let j = 0; j < filter.length; j++){
        reverseArr.unshift(filter[j])
    }
    const reverseWord = reverseArr.reduce((text, item) =>{
        return text += item;
    });

    if(newWord.toLowerCase() == reverseWord.toLowerCase()){
        return true;
    }
    else{
        return false;
    }

}
console.log(palindromes('A car, a man, a maraca.'))
module.exports = palindromes;