
/** 
 * Functions in JS gives us the power of composition where 
 * we can use smaller functions to make one 
 * BIG function 
 * 
 * Check the exmaple below
 * */

//  Using the filter fucntion which is used on arrays

let data = [
    {
        "name": "arsalan",
        "age": 25
    },
    {
        "name": "armaghan",
        "age": 21
    },
    {
        "name": "lala",
        "age": 18
    },
    {
        "name": "loveman",
        "age": 40
    },
    {
        "name": "kala",
        "age": 25
    },
    {
        "name": "moosa",
        "age": 23
    },
    {
        "name": "gnao",
        "age": 30
    }
]

// Using the power of anonaymous functions here

var isYoung = function(data){
    return data.age <= 25;
}

// here we can put anything inside the filter argument
const younsters = data
.filter(isYoung);
console.log(younsters.length)
console.log('younsters/n',younsters);


// Using the MAP higher order function
const length = data.map(e => e.age).length
console.log('length of ages',length);
var avgAges = data.map(values => values.age).reduce((prev,value) => (prev || 0) + value)/ length;
console.log(avgAges);
