//Syntax

function (parameters) {
    return parameters;
    //Instructions
  }
  
  //We can assign an anonymous function to a variable
  
  let product = function (a, b) { return a * b; };
  
  console.log(product(3, 3)); //Output: 9
  
  //Function constructor

  let myFunction = new Function("param1", "param2", "return param1 + param2;");

  myFunction(3, 3); //Output: 6

  //Self-invoked anonymous functions

  (function () {
      console.log("Self-invoked function");
  } () );

  /* To declare a self-invoked function, it has to be surrounded by parenthesis 
    and has to have a pair of parenthesis after the closure key 
    
    */