// Destructing work for both arrays and objects

// exmaple 
// const [PI,E,SQRT2] = Math


// object Exmape


const room = {
  width: 10,
  height: 10,
  roof:true
}

const area = ({width,height}) => {
  return width * height
}

console.log(area(room));


// destructuring values from object
const {width,...tallroom}  = room

console.log(width);
console.log(tallroom);
