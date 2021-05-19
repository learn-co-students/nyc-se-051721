// function declaration

// Check Input Values
function takesThreeArgs(arg1, arg2, arg3){
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);

  return "hello"
// Check Logic of function
}
// Check values being returned

// arrow function
let takesTwoArgs = (arg1, arg2) => {
  return "World"
}

// functions expression
let takesOneArg = function(arg1){
  return arg1
}

let funcArray = [takesThreeArgs(), takesTwoArgs, addThree()]
// let funcArray = ["Cat", "Dog", "Bird"]
let funcArrayReturn = takesOneArg(funcArray)

// takesOneArg(takesTwoArgs)



// let valueOfThreeArg = takesThreeArgs(1,2,3)
// let valueOfThreeArg = takesThreeArgs
// let valueOfThreeArg = "hello"







// let numArray = [1,5,3,6]


function addThree(someNumber){
  // return someNumber + 3
  return "goodbye"
}

// numArray.map(num => num + 3)

// console.log(numArray.map(addThree))

// numArray.forEach(() => {})
// numArray.filter(() => {})



let superNum = 10

function addNumbers(numPassed){
  let num = numPassed
  return function(userNum){
   console.log(userNum + num);
  }
}


let add3 = addNumbers(3)
let add10 = addNumbers(10)
let add20 = addNumbers(20)























takesThreeArgs(2, 4, 7)