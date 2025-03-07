/* Javascript Hoisting */

// In JavaScript, a variable can be declared after it has been used.
// In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.
// var keyword

// var x , y , z
// var support multiple variable in one line
// x = 10
// y = 20
// z = 30

// console.log(x);
// console.log(y);
// console.log(z);

// let keyword
// let support multiple variable in one line
// let a , b , c

// a = 40
// b = 50
// c = 60

// console.log(a);
// console.log(b);
// console.log(c);

// const keyword
//const give only one line variable not support multiple variable in one line
// example

// const i = 70

// console.log(i);

// {
//     let x
//     x = 10
//     x = 20
// }
// console.log(x);

/* Javascript string operator */

//three type of string 1."" 2.'' 3.``

// let str1 = "This is String in Javascript";
// let str2 = 'This is String in Javascript';
// let str3 = `This is
//  String in
// Javascript!`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

/* javascript Template Literals */
// in `` string type can support variable template literals


// let name = "sumit"

// let profile = `my name is ${name}`

// console.log(profile);

/* variable names decalaration */


// let profiles = "sumit"
// console.log(profiles);

// let camelCase = "camelCase"
// console.log(camelCase);

// let PascalCase = "PascalCase"
// console.log(PascalCase);

// let snack_case = "snack_case"
// console.log(snack_case);

// let $name = "$name"
// console.log($name);

// let _snack_case = " _snack_case"
// console.log(_snack_case);

//dose not support variable name start with number 

// let  a1 = "1"
// console.log(a1);

/* Javascript Operators */

/* Arithmetic Operator */

{
    // let x = 40
    // let y = 40
    // let z = "sss"

    // example with Number operators
    // console.log(x + y);
    // console.log(x - y);
    // console.log(x * y);
    // console.log(x / y);
    // console.log(x % y);
    // console.log(x ** y);

    // example with Strings operators
    //only work + operator with string

    // console.log(x + z);
    // console.log(x - z);
    // console.log(x * z);
    // console.log(x / z);
    // console.log(x ** z);
    // console.log(x % z);
}

//two string work with operators
{
    // let str1 = "sumit"
    // let str2 = "pavasiya"
    // console.log(str2 + str1);
    // console.log(str2 - str1);
    // console.log(str2 * str1);
    // console.log(str2 / str1);
    // console.log(str2 ** str1);
    // console.log(str2 % str1);
}
{

    // let y = 100
    // let x = 50
    // x = y + y
    // let z = (y * 10) - x;

    // console.log(z);
}
{

    // let y = 100
    // let x = 50
    // y = x + x + x + x
    // x = x - 10
    // let z = (y - 10) - x;

    // console.log(z);
}

{
    // let x = 1000
    // let y = 2000
    // let z = (y - x) - x + y * 0.5
    // console.log(z)

    // let a = (x / z) * 2220

    // console.log(a)
}

//Assignment Operators 
{
    // let a =4
    // let b =10
    
    // console.log(a += b);
    // console.log(a -= b);
    // console.log(a *= b);
    // console.log(a /= b);
    // console.log(a %= b);
    // console.log(a **= b);
}

//Comparison Operators
{
    let x=10
    let y=10
    let w=11
    let z="sas"
    let s="sas"
    console.log(x==y);
    console.log(x==z);
    console.log(x==z);
    console.log(s==z);
    console.log(x==y);
    console.log(x!=w);
    console.log(x<w);
    console.log(x>w);
    console.log(x>=y);

    let marks = 45;
let res = (marks < 40) ? "Unsatisfactory" :
          (marks < 60) ? "Average" :
          (marks < 80) ? "Good" : "Excellent";

console.log(res);
}