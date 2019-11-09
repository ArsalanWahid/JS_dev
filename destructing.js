// This a convient way to get values from objects and array



//THIS EXAMPLE IS FOR OBJECTS
let name = "app";

const person = {
    name: "arsalan",
    age: 100,
    address: {
        street: "something",
        zip: "90201",
        city: "KHI"
    }
}

// we can easily extract values from the above object 

let {name: personName,age: b,address: c} = person;

console.log(personName + b + c.city);


//THIS EXAMPLE IS FOR ARRAYS
