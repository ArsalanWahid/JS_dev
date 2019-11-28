
// using the object literal syntax
const obj = {
  name: "arsalan",
  age: 20,
}

console.log(obj.name);
console.log(obj.answer);


// dynamic proeprty example

const height = 'bar'
const weight = 'weight'
const age = 'age'


const data = {
   bar: 1,
  [weight]: 96,
  [age]: 26
}

console.log(data[height]);
console.log(data.weight); //dynamic perperty example
console.log(data.age);

