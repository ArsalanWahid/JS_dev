const firstMethod = function() {
  let promise = new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log("First method complete")
      resolve({data: "1"})
    },2000);
  })
  return promise
};

const secondMethod = function(stuff) {
  let promise = new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log(stuff.data + " Second method complete")
      resolve({data: "2"})
    },2000);
  })
  return promise
};

const thirdMethod = function(stuff) {
  let promise = new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log(stuff.data + " Third method complete")
      resolve({data: "3"})
    },3000);
  })
  return promise
};

firstMethod().then(secondMethod).then(thirdMethod)
