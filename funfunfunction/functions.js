// Functions in JS are like Higher order functions

function something(x) {
    return x
}


// But in JS function can be passed around as well 
// This is what is called an anonaymous function
const giveMeFunction = function (a, b) { return a + b }

// passing the anonaymous function to a variable
let iEatFunctions = giveMeFunction
console.log(iEatFunctions(1, 2));


// functions as closures
function greet(person) {
    var date = new Date();
    var time = date.getHours();
    console.log(time);
    function timeOfDay() {
        if (time >= 0 && time <= 11) {
            return 'Good Morning';
        } else if (time >= 12 && time <= 17) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    }
    return console.log("Hi " + person + " " + timeOfDay());
}
greet('arsalan');



