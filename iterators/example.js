

/** 
 * 
 * Iterators are a new way to loop over any collection in JAVASCRIPT
 * Simple data structures are easy to loop , but things get complicated 
 * with complex nested custom data strcutures and loop is hard then
 * 
 * */


const simpleStrcuture = [ 'Hi', 'there', 'developer' ];

//  looping over the above can be done easily

for (const n in simpleStrcuture) {
    console.log(n); //with output the data
}


/* 
But when dealing with a custom data structure things can get a bit
complex and we need a better solution 
For example
*/

const myFavAuthors = {
    allAuthors:{
        fiction: [
            'a','b','v'
        ],
        scienceFiction:[
            'a','b','v','aa','e','a','das',
        ],
        anime:[
            '12345f','afvvcc','ad','asd','adasd','sadasd',
        ]
    }
}

/* 
Now the above const is an object that contains another object that 
contains 3 arrays with their respective keys trying out the loop
below will not work getting the error that author is
         not iteratable!!
*/

// for(let author of myFavAuthors){
//     console.log(author);
    
// }


/*  
To make the custom model an iterable we have to use some complex logic
using the Symbol.iteraltor

*/




