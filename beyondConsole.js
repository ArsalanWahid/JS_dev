/* 

console is much more powerful than using the 
standard console.log to print objects and string
*/

const object = { name: 'arsalan', age: 10, love: true }
const object1 = { name: 'arsalan', age: 10, love: true }
const object2 = { name: 'arsalan', age: 10, love: true }

const objectArray = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

let value = 10
// printing a simple string 
console.log('This is working');
console.log(value);
console.log(object);


/* 
    now Image one wants to print a group of related objects
    we better use computed property names which give us the variable name
*/

console.log("\nThis will be working\n",{ object1, object2 });


/* 
    To make object output more beautiful use the console.table() functions
    
    NOTE IMPORTANT!!!
    single object  object use console.table({})
    Array Object use console.table() without the {} braces
*/
console.table(objectArray);


/* 
    Now we look at the console.group
    To make nested object more easy to read


*/
