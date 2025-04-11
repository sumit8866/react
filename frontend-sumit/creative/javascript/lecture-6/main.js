// javascript alert,confirm and prompt

{
  // //javascript alert
  // alert("Hello, World!");
  //javascript confirm
  // function change(){
  //   confirm("successfully submitted")
  // }
  //javascript prompt
  // let a =prompt("enter value")
  // console.log(a)
}

{
  // let size = parseInt(prompt("enter number:"));
  // let sum = 0;
  // for (let i = 1; i <= size; i++) {
  //   let value = parseInt(prompt(`enter ${i} number of value`));
  //   sum += value;
  // }
  // console.log(sum);
  // function sum(size) {
  //   let sum = 0;
  //   for (let i = 1; i <= size; i++) {
  //     let value = parseInt(prompt(`enter ${i} number of value`));
  //     sum += value
  //   }
  // }
  // let size = parseInt(prompt("enter number:"));
  // sum(size);
}

// {
//   function sum(size) {
//     let sum = 0;
//     let min = 0;
//     let max = 0;

//     for (let i = 0; i < size; i++) {
//       let value = parseInt(prompt(`Enter number ${i} of ${size}:`));

//       sum += value;
//       if (i === 0) {
//         min = value;
//         max = value;
//       }
//       if (value < min) {
//         min = value;
//       }
//       if (value > max) {
//         max = value;
//       }
//     }

//     console.log(`Sum: ${sum}`);
//     console.log(`Min: ${min}`);
//     console.log(`Max: ${max}`);
//   }

//   let size = parseInt(prompt("Enter how many numbers:"));
//   sum(size);
// }

// function data(a ,b){
//     // total = a+b
//     return a+b
// }
// var text = data(10 , 20)

// console.log(text);

{
  function palindrome(num) {    
    let rev = 0;
    let a = 0;
    a = num;
    while (a != 0) {
      
      let remainder = a % 10;
      rev = rev * 10 + remainder;
      a = parseInt(a / 10);
  
    }
    return rev;
  }
  let num = parseInt(prompt("enter number"))

  let reverse = palindrome(num);

  if (num === reverse) {
    console.log(`${num} is a palindrome number`);
  } else {
    console.log(`${num} is a not palindrome number`);
  }
}

