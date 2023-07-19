const findTheOldest = function(arr) {
    const oldest = arr.reduce((x,y)=>{
        let one =  x.yearOfDeath - x.yearOfBirth;
        let nextOne =  y.yearOfDeath - y.yearOfBirth;
        if(one > nextOne){
            return x.name;
        }
        else{
            return y
        }
    });
    return oldest;


};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
