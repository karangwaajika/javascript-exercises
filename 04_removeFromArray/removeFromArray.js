const removeFromArray = function(arr, ...args) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<args.length; j++){
            let itemIndex = arr.indexOf(args[j]);
            if(arr[itemIndex] == args[j] && itemIndex != -1) {
                arr.splice(itemIndex, 1);
                if(i == 0){
                    i = 0;
                    continue;
                }
                else{
                    i--;
                    continue;
                }
            }
        }
        

    }
    
    return arr;

};
// console.log(removeFromArray([1,2,3,4,5,2], 1,2))
// Do not edit below this line
module.exports = removeFromArray;
