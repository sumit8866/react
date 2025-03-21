// ES 5 - variable
// var keyword [global scope variable]

// var x=10;
// // var y=20;

// {
//     console.log(x);
//     console.log(x+y);
// }

// var x=20;
// {
//     console.log(x);
//     console.log(x+y);
// }
// var y=30;

// ES6 - const,let

// var - [global scope variable] redefine/ redeclare
// let - [block scope variable] reassigned / not redeclare
// const -[block scope variable] not reassigned / not redeclared

// let x = 10
// x=20

// {
//     x=50
//     console.log(x);
// }

// console.log(x);

// const variable

// const name = "java"
// console.log(name);   (predefine)

// const boolean = "java"
// console.log(boolean);

// const profile = "srushti"
// // profile = "srushti" - not reassigned
// // profile = "riya"   - not redeclared

// {
//     console.log(profile);

// }
// console.log(profile);

// javascript hoisting [var / let support hoisting] const not supported

// {var x
// var y
// var z

// x=10
// y=20
// z=30

// console.log(x);
// console.log(y);
// console.log(z);
// }

// {
//     let x
// let y
// let z

// x=10
// y=20
// z=30

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// {
// const variable not supported hoisting
// const x
// const y
// const z

// x=10
// y=20
// z=30

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// javascript templet literals

// {
//     let str1='java'
//     let str3="javvva"
//     let str2=`javaaa`

//     console.log(str1);
//     console.log(str2);
//     console.log(str3);

//     let str4 = 'This is "Javascri☺☻♥♦♣♠•◘○pt"'
//     let str5 = "This is `Javascript`"
//     let str6 = `This is "Javascript"`

//     console.log(str4);
//     console.log(str5);
//     console.log(str6);

//     let namee = "srushti"

//     let str7 = `this is ${namee}`  only [``]

//     console.log(str7);
// }

// string object - [declare with new]

// {
//     let names = 'SkillQode'

//     let str = String(`This is ${names} String Object`)
//     // let str = new String(`This is ${names} String Object`)

//     console.log(str);
// }

// STRING OPERATORS [inside () all operators works]

// let str = 'java' + ' script'
// console.log(str);

// let str1 = 'Javascript' - 'Lecture'
// console.log(str1);

// let math = 100 + 100 + 'Javascript' + 100 + 100 - 100 - 100
// console.log(math);

// let sum = 'srushti ' + (100 + 100 ) + 100
// console.log(sum);

// let str2 = 'java' + 100 + 100
// console.log(str2);

// let str3 = 'javaa' + 100 - 100
// console.log(str3);

// let math2 = "100" + 100 - 100 - 100 // 99900
// console.log(math2);

// let math3 = (100 - 100 + 'Javascript' + 100 + 100 + 100) + 100 // 0javascript100100100100
// console.log(math3);

// operators in js

// 1. Arithmetic
// 2. Assigement
// 3. Logical
// 4. Comparision
// 5. Ternary
// 6. typeOf
// 7. instanceOf
// 8. Bitwise
// 9. ++ , -- [ unary operators ]

// Arithmetic operators

// {
//     let x=10
//     let y=5

//     console.log(x + y);
//     console.log(x - y);
//     console.log(x * y);
//     console.log(x / y);
//     console.log(x % y);
//     console.log(x ** y);

// }

// Assignment operators

// {
//     let x=10
//     let y=5

//     console.log(x += y); //15
//     console.log(x -= y); //10
//     console.log(x /= y); //2
//     console.log(x *= y); //10
//     console.log(x %= y); //0
//     console.log(x **= y); //0

// }

// logical operators

// {
//     let x=true
//     let y=false
//     let z=true

//     console.log(x && y);
//     console.log(x && z);
//     console.log(x && y && z);
//     console.log(x || y);
//     console.log(x || z);
//     console.log(x || y || z);
//     console.log(!(x || y) && !(x || z) && !(y && z)); // false

// }

// comparison operators

// {
//     let x=1000
//     let y="1000"

//     console.log(x == y);
//     console.log(x === y);  // data type check
//     console.log(x != y);
//     console.log(x !== y);
//     console.log(x > y);
//     console.log(x < y);
//     console.log(x >= y);
//     console.log(x <= y);

// }

// Ternary Operator [?]

// syntax : statement ? code1 : code2

// {
//     let Age=17

//     Age>=18 ? console.log('you are eligible') : console.log('you are under 18');

// }

// typeof operator

// {
//     console.log(typeof 'string');
//     console.log(typeof true);
//     console.log(typeof 12);
//     console.log(typeof []);

// }

// Bitwise Operators [with boolean values]

// {
//     let x=10 // 1010
//     let y=5 //  0101

//     console.log(x & y);
//     console.log(x | y);
// }

// Task:-   for(let key in Profile){
//     console.log(`For in ${Profile.key}`);
// }

// {
//     let profile = {
//         name: 'Rakesh',
//         age: 45,
//         email: `Rakesh@gmail.com`,
//         occupation: 'farmer'
// };
//     for(let key in profile){
//         // console.log(`${key}`);
//         // console.log(`${profile[key]}`);
//         console.log(`${key} = ${profile[key]}`);
//     }
// }

// {
//     let array = [1 , 2 , 3 , 4 , 5 , 6]

//     for(value of array){
//         console.log(`${value * 2}`);
//     }
// }

// Javascript String Method

// String.prototype.at()

// at(index) [ + and - both allowed]

{
  // let str = "This is Javascript String Method!"
  // console.log(str.at(-12));
  // console.log(str.at(12));
}

// String.prototype.CharAt()

// charAt(index) [only + number allowed]

// {
// let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

// console.log(str.charAt(1));
// }

// String.prototype.charCodeAt()

// charCodeAt(index) [returns ascii value of index number]

// https://www.toptal.com/designers/htmlarrows/letters/

// {
// let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

// console.log(str.charCodeAt(10));
// }

// String.prototype.concat()

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

// {
// let x = "Hello"
// let y = "Javascript"

// console.log(y.concat("\t"+x));

// }

// String.prototype.includes()

// includes(searchString) [answer is true or false]
// includes(searchString, position)

// {
// let str = "Dog is very cute and cat is lovable"

// console.log(str.includes('cute'));
// console.log(str.includes('cute' , 10));

// }

// String.prototype.indexOf()

// indexOf(searchString)
// indexOf(searchString, position)

// {
// let str = "Dog is very cute and cat is lovable"

// console.log(str.indexOf("v" , 20));

// }

// String.prototype.lastIndexOf()

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// {
//     let str = "Dog is very cute and cat is lovable"

//     console.log(str.lastIndexOf("v" , 20));
// }

// String.prototype.padStart() /  padEnd()

// padStart(targetLength) [ oly string is allowed]
// padStart(targetLength, padString)
// padEnd(targetLength)
// padEnd(targetLength, padString)

// {
// let x = 'hello'

// console.log(x.padStart(20)); [space in start]
// console.log(x.padEnd(15 , 'h')); [add in last]

//     // 03:12

// let x = '3'

// console.log(x.padStart(2 , '0'));

//     console.log(x.repeat(10));
// }

// Slice and Substring

// {
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                01234567890123456789012345
//                12345678901234567890123456

//     // slice(indexStart)
//     // slice(indexStart, indexEnd)

//     console.log(str.slice(0));
//     console.log(str.substring(0));
//     console.log(str.slice(10));
//     console.log(str.substring(10));
// console.log(str.slice(-10)); [ last starts with 1]
//     console.log(str.substring(-10)); [start with 0 - not alloud]
// console.log(str.slice(10 , 15));
//     console.log(str.substring(10 , 15));
//     console.log(str.slice(-10 , 10));
//     console.log(str.substring(-10 , 15));
// console.log(str.slice(-10 , -8));
// console.log(str.substring(-10 , -1));
// console.log(str.slice(0 , 0));
// console.log(str.substring(0 , 0)); [empty]

// }

// String.prototype.split() [ convert string to array]

// syntax :
// slice(indexStart)
// slice(indexStart, indexEnd)
{
  // let str = "i am srushti gangani"
  // console.log(str.slice(5));
  // console.log(str.slice(-4));
  // console.log(str.slice(5 , 14)); [doesn't print index end char]
  // console.log(str.slice(5 , -10)); [print srush]
}

// String.prototype.startsWith()

// syntax:
// startsWith(searchString)
// startsWith(searchString, position)
//  [gives output in boolean value (true or false)]

{
  // let str = "java script or java"
  // console.log(str.startsWith('java'));
  // console.log(str.startsWith('java' , 1)); [false]
}

// String.prototype.toLowerCase()

// syntax:
// toLowerCase()

// {
//     let str = "THE MAN AND WOMEN"

//     console.log(str.toLowerCase());

// }

// String.prototype.toString()

// syntax:
// toString()

{
  // let str = new String ("tooo many")
  // console.log(str); [string('tooo many')]
  // console.log(str.toString()); [tooo many]
}

// String.prototype.toUpperCase()

// syntax:
// toUpperCase()

// {
//     let str = "the man and women"

//     console.log(str.toUpperCase());

// }

// String.prototype.trim()

// syntax:
// trim()  [remove spaces]

/* javascript string match and matchAll Method [output in array]*/

// match(regexp)  [g-global i-ignore case]
// matchAll(regex) [only gi and g allowed]

// {
//     let str= "Dog is sweet and Cat is very cute but dog and cats both are scary"

//     let regex = /[Dog]/gi

//     // let demo = str.match(regex)
//     // let demo = [...str.matchAll(regex)]

//     console.log(demo);

// }

// replace(pattern, replacement)

{
  // let str ="Dog is sweet and Cat is very cute but dog and cats both are scary this is dog his name is candy and this is cat her name is pummy . cat are blessed with beautiful scary eyes that kill all dogs  ";
  // let regex = /Dog/g
  // console.log(str.replace(/Dog/gi,'fox'));
  // console.log(str.replace(/dog/gi,'fox'));
}

// object

{
  // let object = {
  //   name: "SkillQode",
  // };
  // let obj = (object.name = "srushti");
  // console.log(object.name);
  // console.log(object);
  // console.log(obj);
}

// map

{
  //   let demo = new Map()
  //   demo.set('language' , 'javascript')
  //   console.log(demo);
  // multile values in map using multidimention array
  // let mapobj = new Map([['language' , 'javascript'] , ['name' , 'srushti']]).forEach(show)
  // function show(value1 , value2 , mapobj){
  //   console.log(`${value1} = ${value2}`);
  // }
  // console.log(mapobj);
  // let map = [[1 , 2 , 3] ,[4 , 5 , 6 ], [7 , 8 ]]
  // console.log(map);
}

// math functions

// Math.pi

// {
//   console.log(Math.PI);
//   console.log(`${22/7}`);
// }

//Math.abs

// {
//   let a=-20
//   console.log(Math.abs(a));
// }

//Math.ceil

// {
//   let a=30.25

//   console.log(Math.ceil(a));

// }

//Math.floor

{
  // let a=30.25
  // console.log(Math.floor(a));
}

//Math.cos

{
  // console.log(Math.cos(`${90*3.14/180}`));
}

//Math.sin

// Math.sqrt

{
  // console.log(Math.sqrt(64));
  // console.log(Math.sqrt(25));
}

// Math.random

{
  // console.log(Math.random());
}

// Math.round

{
  // console.log(Math.round(14.40));
  // console.log(Math.round(15.60));
}

// Math.min
// Math.max

{
  // let arr=[10,20,500,1000,300];
  // console.log(Math.min(...arr));
  // console.log(Math.min(10,0.5,30));
  // console.log(Math.max(...arr));
}

// Math.log10

{
  // let x=2
  // let y=8
  // console.log(Math.log10(4));
}

//Math.pow

{
  // console.log(Math.pow(2,3));
}

// Math.trunc  [print value removing point]

{
  // console.log(Math.trunc(3.40));
  // console.log(Math.trunc(3.60));
}

// date-time function

// {

//   let today = Date.parse('01 Jan 2025 21:00:00')
//     let date = new Date()
//     let demo = date.getDate()
//     let demo1 = date.getDay()
//     let demo2 = date.getFullYear()
//     let demo3 = date.getHours()
//     let demo4 = date.getMinutes()
//     let demo5 = date.getMonth()  // start with 0-11
//     let demo6 = date.getMilliseconds()
//     let demo7 = date.getSeconds()
//     let demo8 = date.getTime()
//     let demo9 = date.getTimezoneOffset()
// let date= Date.now()

//     console.log(today);
// console.log(date);

//     console.log(date);
//     console.log(demo);
//     console.log(demo1);
//     console.log(demo2);
//     console.log(demo3);
//     console.log(demo4);
//     console.log(demo5);
//     console.log(demo6);
//     console.log(demo7);
//     console.log(demo8);
//     console.log(demo9);

//     let demoo = new Date()
//     demoo.setDate(10)
//     demoo.setFullYear(2026)
//     demoo.setHours(23)
//     demoo.setMinutes(59)
//     demoo.setSeconds(61)
//     demoo.setTime()
//     console.log(demoo);

// }

// number methods

// Number values represent floating-point numbers like 37 or -9.25.

// The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

// new Number(value)
// Number(value)

// {
//     let x = "10"

//     let y = Number(x)

//     console.log(y);

//     console.log(typeof x);
//     console.log(typeof y);
// }

// {
//     console.log(Number.isFinite(0/-1));
//     console.log(Number.isFinite(1/0));
//     console.log(Number.isFinite(0/1));
//     console.log(Number.isFinite(Infinity/1));
//     console.log(Number.isFinite(1/-1));
// }

// {
//     console.log(Number.isInteger(10));
//     console.log(Number.isInteger(10.10));
//     console.log(Number.isInteger(Number(true)));
//     console.log(Number.isInteger(false));
// }

// {
//   console.log(Number.isNaN());
//   console.log(Number.isNaN(NaN));
//   console.log(Number.isNaN(0));
// }

{
  // console.log(Number.isSafeInteger(1/1));
  // console.log(Number.isSafeInteger(12/2));
  // limit 0-20
}

// {
//   console.log(Number.parseFloat(10.20));
//   console.log(Number.parseFloat(20.00));
//   console.log(Number.parseInt(50.30));
//   console.log(Number.parseInt(100));
// }

// Number.prototype.toExponential()

// {
//       let number = 450000

//       let expontial1 = number.toExponential()
//       let expontial2 = number.toExponential(3)
//       let expontial3 = number.toExponential(20)

// {
//     console.log(Number.isFinite(0/-1));
//     console.log(Number.isFinite(1/0));
//     console.log(Number.isFinite(0/1));
//     console.log(Number.isFinite(Infinity/1));
//     console.log(Number.isFinite(1/-1));
// }

// {
//     console.log(Number.isInteger(10));
//     console.log(Number.isInteger(10.10));
//     console.log(Number.isInteger(Number(true)));
//     console.log(Number.isInteger(false));
// }

// {
//   console.log(Number.isNaN());
//   console.log(Number.isNaN(NaN));
//   console.log(Number.isNaN(0));
// }

// {
//   console.log(Number.isSafeInteger(1/1));
//   console.log(Number.isSafeInteger(12/2));
//   console.log(Number.isSafeInteger(5.40/1.5));

//   // limit 0-20
// }

// {
//   console.log(Number.parseFloat(10.20));
//   console.log(Number.parseFloat(20.10));
//   console.log(Number.parseInt(50.30));
//   console.log(Number.parseInt(100));
// }

// Number.prototype.toExponential()  giv value in e notation

// {
//       let number = 450000

//       let expontial1 = number.toExponential()
//       let expontial2 = number.toExponential(3)
//       let expontial3 = number.toExponential(10)

//       console.log(expontial1);
//       console.log(expontial2);
//       console.log(expontial3);
//   }

//   {
//     let number = 40.42563214

//     let fixed = number.toFixed(0)
//     let fixed1 = number.toFixed(1)
//     let fixed2 = number.toFixed(2)

//     console.log(fixed);
//     console.log(fixed1);
//     console.log(fixed2);
// }

// {
//     let number = 4.4521863251

//     let precision = number.toPrecision(1)
//     let precision1 = number.toPrecision(3)
//     let precision2 = number.toPrecision(50)
//     let precision3 = number.toPrecision(2)

//     console.log(precision);
//     console.log(precision1);
//     console.log(precision2);
//     console.log(precision3);
// }

// {
//     let number = 10.10
//     let string = number.toString()
//     let value = number.valueOf()
//     console.log(number);
//     console.log(string);
//     console.log(value);
// }

// function in javascript

// function demo(){
//   console.log(`hello world!!!!`);
// }

// demo()

// using return keyword

// function demoo() {
//   return console.log("heloo javascript!!!!!!!!!!!!!!!!!!!!!!");
// }

// demoo();

//callback function

// function demo(callback) {
//   console.log("hiiiiiiiiiiiiiiiiiiiiii");
//   callback();
// }

// function demo1() {
//   console.log("helloooooooooooooooooooo");
// }

// demo(demo1);

// function with arguments

// function sum(a, b) {
//   return a + b;
// }

// sum(3,5)
// console.log(`sum is : ${sum(3, 5)}`);

// array in js

// function demo() {
//     return console.log("helloo srushti!!!!!!!");
// }

// demo()

// Array in javascript

// {
//   let arr = [1, 2, 3, 4];
//   arr.push(5, 6);
//   arr.push("items");
//   console.log(arr.length);
//   arr.length = 3;
//   arr[2] = "item3";
//   console.log(typeof arr);

//   console.log(arr);
// }

// Array.from()

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// {
//   let array = [1, 2, 3, 4, 5];

//   console.log(Array.from(array));
//   console.log(Array.from(array, (item) => item + item));

//   let arr = [...array, 6];
//   console.log(arr);
//   arr.push(7, 8, 9, 10);
//   console.log(arr);
// }

// Array.of()

// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)

{
  // let arr = Array.of(1, 2, 3, 4);
  // console.log(arr);
}

// at(index)

// {
//   let array = [1,2,3,4]

//   console.log(array.at(2));
// }

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)

// {
//   let arr1 = [1,2]
//   let arr2 = [3,4]

//   console.log(arr1.concat(arr2,arr2));

// }

// pop method
// pop()

{
  // let arr = [1,2,3,4,5,6]
  // let array= arr.pop();
  // console.log(arr);
  // find(callbackFn) [giv index value]
  // find(callbackFn, thisArg)
  // let arr = [1,2,3,4,5,6]
  // let findarr = arr.find((element) => element > 5)
  // console.log(findarr);
  // findIndex(callbackFn)  [giv index]
  // findIndex(callbackFn, thisArg)
  // let arr = [10,20,30,40,50]
  // let fi = (element) => element > 10
  // console.log(arr.findIndex(fi));
  // findLast(callbackFn)
  // findLast(callbackFn, thisArg)
  // const array1 = [5, 12, 50, 130, 44];
  // const found = array1.findLast((element) => element > 40);
  // console.log(found);
  // findLastIndex(callbackFn)
  // findLastIndex(callbackFn, thisArg)
  // const array1 = [5, 12, 50, 130, 44];
  // const found = array1.findLastIndex((element) => element > 40);
  // console.log(found);
  // join()
  // join(separator)
  // let arr = ['srushti','gangani']
  // console.log(arr.join());
  // console.log(arr.join(''));
  // console.log(arr.join('-'));
  // lastIndexOf(searchElement)
  // lastIndexOf(searchElement, fromIndex)
  // let arr = ['srushti','gangani']
  // console.log(arr.lastIndexOf('gangani'));
  // reverse()
  // let arr = ['srushti','gangani']
  // console.log(arr.reverse());
  // shift()
  // let arr = [1,2,3,4,5]
  // console.log(arr.shift());
  // console.log(arr);
  // unshift()
  // unshift(element1)
  // unshift(element1, element2)
  // unshift(element1, element2, /* …, */ elementN)
  // console.log(arr.unshift());
  // console.log(arr);
  // console.log(arr.unshift(0,10));
  // console.log(arr);
  // values()
  // let arr = ['apple','mango','pineapple']
}

// Array.prototype.copyWithin()

// copyWithin(target, start)
// copyWithin(target, start, end)

{
  // let arr = [1,2,3,4,5,6,7,8,9]
  // console.log(arr.copyWithin());
  // console.log(arr.copyWithin(3));
  // console.log(arr.copyWithin(6));
  // console.log(arr.copyWithin(3,5));
  // console.log(arr.copyWithin(3,6,8));  //123786789
}

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
  // let arr = [1,2,3,4,5,6,7,8,9]
  // console.log(arr.splice(3));
  // console.log(arr.splice(3,2));
  // console.log(arr.splice(3 , 2 , 'may'));
  // console.log(arr);
}

// entries()

// {
//   let arr = [1,2,3,4,5,6,7,8,9]

//   i1 = arr.entries();

//   console.log(i1.next().value);
//   console.log(i1.next().value);

// }

// {
//     for(let i=0 ; i<10 ; i++){
//       li=4*i

//       console.log(`${li} , ${4*(i+1)}`);
//     }
// }

// {
//   let product = [
//     {
//       price: "9.60",
//       stock: 58,
//     },
//     {
//       price: "20.60",
//       stock: 50,
//     },
//     {
//       price: "19.60",
//       stock: 80,
//     },
//     {
//       price: "50.60",
//       stock: 85,
//     },
//     {
//       price: "10.50",
//       stock: 30,
//     },
//     {
//       price: "15.70",
//       stock: 40,
//     },
//     {
//       price: "19.30",
//       stock: 70,
//     },
//     {
//       price: "22.35",
//       stock: 45,
//     },
//     {
//       price: "35.30",
//       stock: 60,
//     },
//     {
//       price: "90.30",
//       stock: 90,
//     },
//   ];

//   // let [number  , setNumber]  = useState(1)

//   let nextnumber = 1;
//   let prevnumber = 1;

//   function handlenext() {
//     const pageindex = 4;

//     let lastindex = pageindex * nextnumber;
//     let firstindex = lastindex - pageindex;

//     console.log(`firstindex : ${firstindex}`);
//     console.log(`lastindex : ${lastindex}`);

//     document.getElementById("demo1").innerHTML = product
//       .slice(firstindex, lastindex)
//       .map((item) => `${item.price}`);

//     nextnumber++;

//     if (nextnumber > 3) {
//       return (nextnumber = 1);
//     }
//   }


//   function handleprev() {
//     const pageindex = 4;

//     let lastindex = pageindex * prevnumber;
//     let firstindex = pageindex - lastindex;

//     console.log(`first index : ${firstindex}`);
//     console.log(`last index : ${lastindex}`);

//     document.getElementById("demo2").innerHTML = product
//       .slice(firstindex, lastindex)
//       .map((item) => `${item.price}`);
      
//       prevnumber--

//       if (prevnumber ) {
//     }
      
//   }

//   // filter item

//   let filter = product.filter((item) => item.price <= 50)
//   let filter1 = product.filter((item) => item.price > 50)

//   console.log(filter);
//   console.log(filter1);
  
// }

/* Array.every */

// every(callbackFn)
// every(callbackFn, thisArg)

{
  let arr = [10,2,30,400,550,15]

  let every = arr.every((item) => item < 100)
  console.log(every);
  
}

// some(callbackFn)
// some(callbackFn, thisArg)

{
  let arr = [10,2,30,400,550,15]

  let some = arr.some((item) => item < 100)
  console.log(some);
  
}

// fill(value)
// fill(value, start)
// fill(value, start, end)

{
  let arr = [10,20,30,40,50]

  // console.log(arr.fill(100));
  console.log(arr.fill(100,2,4));
  
}
// {

//   let num = [10 , 455 , 89 , 105 , 76 , 98 , 225]

//   let fill = num.fill(10 , 0 , 5)

//   console.log(fill);

//   console.log(num);

// }

// flat()
// flat(depth)

{
  // let arr = [100,200,[300,400],[500,600,700]]
  let arr2 = [0, 1, [2, [3, [4, 5]]]];

  // console.log(arr.flat());
  console.log(arr2.flat(4));
  
}

// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

{
  let arr = [1,2,3,4,5,6,7]

  let flatmap = arr.flatMap((item) => item<=2 ? [200,300] : item);

  console.log(flatmap);
  
}

// keys()

{
  let arr = ['a','b','c','d']

  let iterator = arr.keys()

  for(let key of iterator){
    console.log(key);
    
  }
}

// Array.reduce()

// reduce(callbackFn)
// reduce(callbackFn, initialValue)

{
  let arr = [10,20,30,40]

  // console.log(arr.reduce((next,prev) => next*prev));
  console.log(arr.reduceRight((next,prev) => next*prev));
  
}

// Array.sort()

{
  let arr = ['srushti' , 'ami' , 'bansi' , 'charmi' , 'deny' , 'jemi']
  let arr1 = [1 , 2 , 300 ,320 , 4 , 450 ,42 ,51 ]

  console.log(arr.sort());
  console.log(arr1.sort());
  console.log(arr1.sort((a,b) => a-b));
  
}

// Array.With()

// arrayInstance.with(index, value)

{
    const array = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
    3: 3,
  };

  console.log(array);
  console.log(Array.prototype.with.call(array , 1 , 4));
  console.log(Array.prototype.with.call(array , 3 , 40));
}
