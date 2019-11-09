/* 

This file explains the difference b/w the diffrenet loops
and how to use them

1. forEach
2. for of loop
3. for in loop
*/


// 1. forEach is only applicable to array Objects !!!!

let array = ['a','b','c']
array.forEach( el => {
    console.log(el);
    
});

const customObject = {
    name: [1,2,3],
    email: 'arsalanwaid@hotmail',
    age: 50
}

for(let item in customObject){
    console.log(item);
    
}



// 2. for in loop gives access to the keys of an iterable object and not the values

// 3. for of was introduces in ES6 and example code is in sibling file example.js