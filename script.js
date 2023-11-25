// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);    //this tries the function above to see if it works
  } catch (e) {   //not sure what e is but used it because it was used int he example in the book
    if (e instanceof MultiplicatorUnitFailure) {  //used MultiplcatorUnitFailure because that what indicates there was an error
      return reliableMultiply(a, b);  //return this because function because that is the name of the function we are using to test if the code will fail?
    } else {
      throw e;  //not sure what this does, i think it will throw e if the code does not fail, used it because it was in the example in the book
    }
  }
}
console.log(reliableMultiply(8 , 8));