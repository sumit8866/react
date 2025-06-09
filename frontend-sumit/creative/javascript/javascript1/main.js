//loops

// for loop

// 1
// 12
// 123
// 1234
// 12345
{
  //   for(let i=1 ;i<=5 ;i++){
  //   for(let j =1; j<=i ;j++){
  //     document.write(j);
  //   }
  //   document.write("<br>")
  // }
}

// 1
// 22
// 333
// 4444
// 55555
{
  //   for(let i=1 ;i<=5 ;i++){
  //   for(let j =1; j<=i ;j++){
  //     document.write(i);
  //   }
  //   document.write("<br>")
  // }
}

// 11111
// 2222
// 333
// 44
// 5
{
  // for (let i = 1; i <= 5; i++) {
  //   for (let j = i; j <= 5; j++) {
  //     document.write(i);
  //   }
  //   document.write("<br>");
  // }
}

// 12345
// 1234
// 123
// 12
// 1

{
  // for (let i = 5; i >= 1; i--) {
  //   for (let j = 1; j <= i; j++) {
  //     document.write(j);
  //   }
  //   document.write("<br>");
  // }
}

// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

{
  // let a= 1
  // for(let i=1 ;i<=5 ;i++){
  //     for(let j =1; j<=5 ;j++){
  //       document.writeln(a);
  //       a++
  //     }
  //     document.writeln("<br>")
  //   }
}

// 1 2 3 4 5
// 6 7 8 9
// 10 11 12
// 13 14
// 15
{
  // let a = 1;
  // for (let i = 1; i <= 5; i++) {
  //   for (let j = i; j <= 5; j++) {
  //     document.writeln(a);
  //     a++;
  //   }
  //   document.writeln("<br>");
  // }
}

// 5
// 54
// 543
// 5432
// 54321
{
  //  for(let i=5 ;i>=1 ;i--){
  //   for(let j =5; j>=i ;j--
  //   ){
  //     document.write(j);
  //   }
  //   document.write("<br>")
  // }
}

// *
// * *
// * * *
// * * * *
// * * * * *

{
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      document.writeln("*");
    }
    document.writeln("<br>");
  }

  for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
      document.writeln("*");
    }
    document.writeln("<br>");
  }

  for (let i = 1; i <= 5; i++) {
    for (let j = i; j >= 1; j--) {
      document.writeln("*");
    }
    document.writeln("<br>");
  }

  for (let i = 5; i >= 1; i--) {
    for (let j = i; j <= 5; j++) {
      document.writeln("*");
    }
    document.writeln("<br>");
  }
}

//javascript program for given 4 digit number to find first and last digit

let num = 1234;

let firstDigit = parseInt(num / 1000);
let lastDigit = num % 10;

console.log("First digit: " + firstDigit);
console.log("Last digit: " + lastDigit);
