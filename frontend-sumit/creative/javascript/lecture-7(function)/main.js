//javascript function type

//normal function

{
  // function demo(){
  //   console.log("Hello, World!");
  // }
  // demo();
}

//javascript Anonymous Function**************************************************************************************
// anonymous function is a function without a name but run with variables name
// it is store in variables
// it is also known as lambda function in other languages

{
  //   let set = function(){
  //   console.log("Hello, World!");
  // }
  // set()
}

//javascript arrow function******************************************************************************************
// arrow function is a shorthand for anonymous function

{
  // let store = ()=>{
  //   console.log("Hello, World!");
  // }
  // store()
}

//javascript immediately invoked Function****************************************************************************
// immediately invoked function is a function that run as soon as it is defined
// it is used to prevent global scope pollution
//it is run without function name or variables name
//and that's call only one and first call
//we have 2 function one normal or one immediately invoked Function than first call immediately invoked Function

{
  // (function(){
  //   console.log("Hello, World!");
  // })()
}

//javascript closure function***************************************************************************************
// closure function is a function that have access to its outer scope even when the outer function has be
// closed
// it is used to create private variables and functions
// it is used to create a new scope

{
  // function over() {
  //   let a = 10;
  //   function inner() {
  //     console.log(a);
  //   }
  //   inner();
  // }
  // over();
}

//javascript callback function***************************************************************************************
// callback function is a function that is passed as an argument to another function
// it is used to perform a specific task after a certain operation is completed
// it is used to handle asynchronous operations
// it is used to handle events

{
  function first(mark,callback){
    callback()
    console.log(`and i got ${mark} in english`);
  }
  function callback(){
   return console.log(`my name is sumit`);
    
  }
  first(90,callback)
}

