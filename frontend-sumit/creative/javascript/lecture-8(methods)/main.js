//javascript math methods


{
//math.PI
//give PI value 3.141592653589793


{
  let math1 = Math.PI

  console.log(math1);
}

//math.abs
//if value is in nagative than math.abs convert in to positive


{
  let math = Math.abs(-10)

  console.log(math);
}

//math.ceil
//if value is floting than ans is next integer  value example 5.1 ans is 6
  
{
  let math =Math.ceil(5.1)

  console.log(math);
  
}

//math.floor
//if value is floting than ans is same integer  value example 5.9 ans is 5
  
{
  let math =Math.floor(5.9)

  console.log(math);
  
}

//math.round
//if value is floting and above 0.5 than ans is next integer and below 0.5 than ans is same integer example 5.1 ans is 5 and 5.5 or 5.6 ans is 6

{
  let math = Math.round(5.1)
  let math1 = Math.round(5.5)
  let math2 = Math.round(5.6)

  console.log(math);
  console.log(math1);
  console.log(math2);
  
}

// Math.sign
//ans give in -1,1and 0
//integer is nagative than ans is -1
//integer is positive than ans is 1
//integer is Zero than ans is 0

{
  let math = Math.sign(-5)
  let math1 = Math.sign(5)
  let math2 = Math.sign(0)
  
  console.log(math);
  console.log(math1);
  console.log(math2);
}

// Math.sin and math.cos

// Angles (in degrees)	0°	30°	    45°	   60°	    90°
// Angles (in radian)	0	π/6	    π/4	   π/3	    π/2
// Sin θ	            0	1/2	    1/√2   √3/2	    1
// Cos θ	            1	√3/2	1/√2   1/2	    0
// Tan θ	            0	1/√3	1	   √3	    ∞
// Cot θ	            ∞	√3	    1	   1/√3	    0
// Sec θ	            1	2/√3	√2	   2	    ∞
// Cosec θ	            ∞	2	    √2	   2/√3	    1

// formula:
// degrees*3.141592653589793/180


{
  let math = Math.sin(30*3.141592653589793/180)
  console.log(math);
  
  let math1 = Math.cos(60*3.141592653589793/180)
  console.log(math1);

}

// Math.max
//give a maximum number

{
  let math11 = Math.max(5100 , 2501 , 730 , 4560 , 4985 , 768)

  console.log(math11);
}

// Math.min
//give a minimum number

{
  let math12 = Math.min(1900 , 20819 , 5930 , 4540 , 4495 , 8)

  console.log(math12);
}

// Math.trunc
//if value is floting than ans is same integer  value example 5.66 ans is 5

{
  let math = Math.trunc(5.66)

  console.log(math);
}

// Math.log
// Math.log2
// Math.log10

{
  let math = Math.log(5)
  let math1 = Math.log2(5)
  let math2 = Math.log10(5)

  console.log(math);
  console.log(math1);
  console.log(math2); 
  
}

}

// __________________________________________________________________________________________
//javascript string methods
// __________________________________________________________________________________________

{

  // javascript method String

// String.At()*****************************************************************************************

// syntax: at(index)

// The index (position) of the string character to be returned. Supports relative indexing from the end of the string when passed a negative index; i.e. if a negative number is used, the character returned will be found by counting back from the end of the string.

// Returns undefined if the given index can not be found.

// Give ans in new string with enter index value
{
  // let str =`**** <<pavasiya sumit>> ****`
  //     //    0123456789012345678901234567
  //     let length = str.slice(7, 15); 

  //     console.log(length);
      
  // console.log(str.at(18));
  // console.log(str.at(10)); 
  // console.log(str.at(2));
  // console.log(str.at(7));
  // console.log(str.at(50));
  // console.log(str.at(-9));
  
}


//  Javascript 
// String.trimStart() ,
// String.trimEnd() , 
// String.trim() method*****************************************************************************************

// syntax:
// trim(),
// trimStart(),
// trimEnd()

// Give ans in new string with remove extra whitespace on string start and end
{
  // let str =`      **** <<pavasiya sumit>> ****     `
       
  // console.log(str.length);

  // console.log(str.trim());
  // let length = str.trim();
  // console.log(length.length);
  
  // console.log(str.trimStart());
  // let length2 = str.trimStart();
  // console.log(length2.length);

  // console.log(str.trimEnd());
  // let length3 = str.trimEnd();
  // console.log(length3.length);
  
}

// javascript 
// String.charCodeAt() method*******************************************************************************

// syntax:
// charCodeAt(index)

// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// ASCII (American Standard Code for Information Interchange) value of char 

// Give ans in new string with enter index value's ASCII value
{

// let str =`**** <<pavasiya sumit>> ****`

// console.log(str.charCodeAt(15));

}

// javascript 
// String.charAt() method************************************************************************************

// charAt(index)

// A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of the range of 0 – str.length - 1, charAt() returns an empty string.

// The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

// Give ans in new string with enter index value same as (.at() method)
{
  // let str =`**** <<pavasiya sumit>> ****`

  // console.log(str.charAt(18));
  // console.log(str.charAt(-18)); //empty string

}

// javascript 
// String.concat() method************************************************************************************

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)


// The string concat() method concatenates (appends) a string to the end of another string.
// It returns the combined string.

// A new string containing the combined text of the strings provided.

// Give ans in two or more combined(marge) new string
{

  // let str= `hello `
  // let str2= `pavasiya `
  // let str3= `sumit`

  // console.log(str);
  // console.log(str.concat(str2));
  // console.log(str.concat(str2,str3));
  
}

// javascript 
// String.padStart() and 
// String.padEnd() Method**********************************************************************************

// padEnd(targetLength)
// padEnd(targetLength, padString)
// padStart(targetLength)
// padStart(targetLength, padString)

// The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

// The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

// Give ans in addstring with start or end
{
  // let str ="7"

  // console.log(str.padStart(7,"0"));
  // console.log(str.padEnd(7,"0"));
  
}

// javascript 
// String.includes() Method************************************************************************************

// includes(string)
// includes(searchString, position)

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// Give ans in true and false

{
  // let str =`**** <<pavasiya sumit>> ****`

  // console.log(str.includes("sumit"));
  
}

// javascript
//  String.startsWith() and 
// String.endsWith() Method**************************************************************************************

// startsWith(searchString)
// startsWith(searchString, position)
// endWith(searchString)
// endWith(searchString, position)

// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

//Give ans in true and false

{
  // let str =`**** <<pavasiya sumit>> ****`

  // console.log(str.startsWith("**"));
  // console.log(str.startsWith("pavasiya", 7));

  // console.log(str.endsWith("*"));
  // console.log(str.endsWith("sumit"));

}

// javascript 
// String.split() Method****************************************************************************************

// split(separator)
// split(separator, limit)


// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

//Give ans in array (in this separator (one space means single char array, two space means single word array,three space means all string array ))

{
  // let str =`**** << pavasiya sumit >> ****`

  // console.log(str.split(``));
  // console.log(str.split(` `));
  // console.log(str.split(`  `));
}


//javascript 
// String.repeat() Method********************************************************************************************************

// String.repeat(count)

// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

//Give ans in string with count number if count is 5 than the string repeat 5 time in same string

{
  // let str =`**** <<pavasiya sumit>> ****`

  // console.log(str.repeat(5));
  
}

// javascript
//  String.toUppercase() Method*************************************************************************************************


// The toUpperCase() method of String values returns this string converted to uppercase.

// Give and in uppercase string

{
  // let str =`**** <<pavasiya sumit>> ****`
  
  // console.log(str.toUpperCase());
  
}

// javascript
//  String.toLowercase() Method*************************************************************************************************


// The toUpperCase() method of String values returns this string converted to Lowercase.

// Give and in Lowercase string

{
  // let str =`**** <<PAVASIYA SUMIT>> ****`
  
  // console.log(str.toLowerCase());
  
}

// javascript 
// String.toString() Method******************************************************************************************************

// The toString() method of String values returns this string value.

//Give ans in array,number and object to string

{

  // let str = new String("Hello")
  // let str = new String(123)
  // let str = 123

  // console.log(str);
  // console.log(str.toString());
  // console.log(str.valueOf());

}

// javascript 
// String.slice() and 
// String.subString() Method******************************************************************************************************


// slice(indexStart)
// slice(indexStart, indexEnd)
// substring(indexStart)
// substring(indexStart, indexEnd)


{
  // let str =`**** <<PAVASIYA SUMIT>> ****`
  
  // console.log(str.slice(10));
  // console.log(str.substring(10));
  
  // console.log(str.slice(-10));
  // console.log(str.substring(-20));
  
  // console.log(str.slice(-10 , 18));
  // console.log(str.substring(-10 , 20));
  
  // console.log(str.slice(10 , 20));
  // console.log(str.substring(10 , 20));
  
  // console.log(str.slice(10 , 0));
  // console.log(str.substring(10 , 0));
  
  
  // console.log(str.slice(-10 , -18));
  // console.log(str.substring(-10 , -20));
}


// Javascript Regex*********************************************************************************************   

// A regular expression is a pattern of characters.

// The pattern is used for searching and replacing characters in strings.

// The RegExp Object is a regular expression with added Properties and Methods.

// syntax:
//   /pattern/modifier(s);

// modifier:
//   /g	  : Perform a global match (find all)
//   /i	  : Perform case-insensitive matching
//   /m	  : Perform multiline matching


// Brackets:
// [abc] 	: Find any character between the brackets
// [^abc] 	: Find any character NOT between the brackets
// [0-9] 	: Find any character between the brackets (any digit)
// [^0-9] 	: Find any character NOT between the brackets (any non-digit)
// (x|y) 	: Find any of the alternatives specified

//Metacharacters
// .	    : Find a single character, except newline or line terminator
// \w	    : Find a word character
// \W	    : Find a non-word character
// \d	    : Find a digit
// \D	    : Find a non-digit character
// \s	    : Find a whitespace character
// \S	    : Find a non-whitespace character
// \b	    : Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// \B	    : Find a match, but not at the beginning/end of a word
// \0	    : Find a NULL character
// \n	    : Find a new line character
// \f	    : Find a form feed character
// \r	    : Find a carriage return character
// \t	    : Find a tab character
// \v	    : Find a vertical tab character
// \xxx	    : Find the character specified by an octal number xxx
// \xdd	    : Find the character specified by a hexadecimal number dd
// \udddd	: Find the Unicode character specified by a hexadecimal number dddd

//Quantifiers
// n+	    : Matches any string that contains at least one n
// n*	    : Matches any string that contains zero or more occurrences of n
// n?	    : Matches any string that contains zero or one occurrences of n
// n{X}	    : Matches any string that contains a sequence of X n's
// n{X,Y}	: Matches any string that contains a sequence of X to Y n's
// n{X,}	: Matches any string that contains a sequence of at least X n's
// n$	    : Matches any string with n at the end of it
// ^n	    : Matches any string with n at the beginning of it
// ?=n	    : Matches any string that is followed by a specific string n
// ?!n	    : Matches any string that is not followed by a specific string n


  

//javascript
//  String.replace() and 
// String.repalceAll() Method*********************************************************************************

// replaceAll(pattern, replacement)
// replace(pattern, replacement)

// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// Give ans in new string with Regex pattern(word)


{
  //  let str = "My city Is big but it is dirty and your city is small but it is beautiful!"

  // let Regex = /city/gi

  // console.log(str.replace(Regex , 'villege'));
  // console.log(str.replaceAll(Regex , 'villege'));
}


// javcasctipt 
// String.search() method*************************************************************************************

// search(regexp)

// The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

// give ans in number the number is Regex pattern start index number

{
  // let str = "My city Is big but it is dirty and your city is small but it is beautiful!"

  // let Regex = /beautiful/gi
  
  // console.log(str.search(Regex));
  
  // let str2 = "My city Is big but it is dirty and your city is small but it is beautiful!"

  // let Regex2 = /my/gi
  
  // console.log(str2.search(Regex2));
}


// Javascript 
// String.match() and 
// String.matchAll() Method*************************************************************************************

// match(regexp)
// matchAll(regexp)

//The match() method of String values retrieves the result of matching this string against a regular expression.

{
  // let str = "My City Is Big but it is dirty and your City is Small but it is beautiful!"

  // let Regex = /[A-Z]/g
  // let Regex2 = /[a-z]/gi

  // console.log(str.match(Regex));
  // console.log([...str.matchAll(Regex2)]);
  
}

}

// __________________________________________________________________________________________
//javascript array methods
// __________________________________________________________________________________________

{

  //javascript array and Methods of array

//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// Javascript Array Method

// let array = [1 , 2 , 3 , 4]

// let array2 = [...array]

// let array1 = [1 , 2 , 3]

// console.log(array == array1);

// console.log(array2);

// array2[4] = 5

// console.log(array2);

// console.log(array);

/* Array */

{
  // let array = ['html', 20, undefined, true, 56]

  // console.log(array);

  // console.log(array.length);

  // console.log(array[0]);
  // console.log(array[1]);

  // array.length = 10

  // console.log(array);

  // array[10] = 100

  // console.log(array);

  // let data = Object.keys(array)

  // console.log(data);

  // let array4 = new Array(10, 12)

  // console.log(array4);

}

/* Javascript Array Method */


// Array.from()**********************************************************************************************

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)


{
  // let num = [1, 2, 3, 4]

  // console.log(Array.from(num, (x) => x * x));

  // console.log(Array.fromAsync(num, (x) => x * x));

  // console.log(num);

  // num[4] = 5

  // console.log(num);

  // console.log(typeof null);
}


//Array.every()**************************************************************************************************

// every(callbackFn)
// every(callbackFn, thisArg)
//every methods can check all elements (check all elements and all elements get true than ans is true or one false than all false)
// some(callbackFn)
// some(callbackFn, thisArg)
//some methods can not check all elements(check elements one by one and give one true than all true)


{

  let array1 = [2, 43, 34, 10, 3, 345, 212]
  let array2 = [2, 43, 34, 345, 212]

  // let every = array1.every((item) => item > 10)
  // console.log(every);
  //     let some = array1.some((item) => item < 44)
  //   console.log(some);
  // let array1 = [5]
  // let array2 = [5]

  // let every = array1.every((item) => item == array2[0])

  // every ? console.log("array like same value") : console.log("array value diffence!!!");
}

//Array.copyWithin()*********************************************************************************************

// copyWithin(target)
//GIVE ARRAY YOU GIVE TARGET AND FILL EMPTY WITH START OF ARRAY

// copyWithin(target, start)
// give array your target and start to end example array is 11 target is 3 start is 6 
// array is 1,2,3,6,7,8,9,10,11,10,11

// copyWithin(target, start, end)
// give array your target and start to end example array is 11 target is 3 start is 6 end is 8
// array is 1,2,3,6,7,8,7,8,9,10,11

{
  //     let fruits = [
  //         "🍌",
  //         "🍎",
  //         "🍒",
  //         "🍓",
  //         "🫐",
  //         "🥑",
  //         "🍍",
  //         "�",
  //         "🍉",
  //         "🍇",
  //         "🥝",
  //     ];

  //     console.log(fruits);

  //     let firstCopy = fruits.copyWithin(3 , 6)

  //   console.log(firstCopy);

  //   let secondCopy = fruits.copyWithin(3 , 6 , 8)

  //   console.log(secondCopy);

  //   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

  //   console.log(alphabet.copyWithin(3 , 4 , 8));

  //   [a , b , c , e , f , g , h  , h , i , j  , k]
}


// Array.concat()***********************************************************************************************

//marge the array

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)


{
  // let array1=[1,1,1,1]
  // let array2=[5,5,5,5]
  // let array3=[10,10,10,10]

  // console.log(array1.concat(array2));
  // console.log(array1.concat(array2,array3));
  // console.log(array1.concat(array1,array1));

}

// Array.fill

// fill(value)
// fill(value, start)
// fill(value, start, end)
// in fill methods your value is convert all index value to fill value


{
  // let array1 = [2, 43, 34, 10, 3, 345, 212, 6, 54, 23]


  // console.log(array1.fill(1));
  // console.log(array1.fill("sumit"));
  // console.log(array1.fill(3 , 5));
  // console.log(array1.fill(3, 3, 7));

}

// Array.filter()
// filter(callbackFn, thisArg)


{

  // let object = [
  //     {
  //         name: 'bmw',
  //         price: 7000
  //     },
  //     {
  //         name: 'maruti',
  //         price: 4000
  //     },
  //     {
  //         name: 'hero',
  //         price: 2000
  //     },
  //     {
  //         name: 'active',
  //         price: 500
  //     },
  //     {
  //         name: 'supra',
  //         price: 10000
  //     }
  // ]

  // console.log(object.filter((item)=>item.price < 2000));
  // console.log(object.filter((item)=>item.price == 2000));


}

// Array.find()
// Array.findLast()
// Array.findIndex()
// Array.findLastIndex()************************************************************************************

{

  // let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  // console.log(array1.find(item => item > 50))
  // console.log(array1.findLast(item => item > 50))
  // console.log(array1.findIndex(item => item > 50))
  // console.log(array1.findLastIndex(item => item > 50))

}

// Array.includes()*****************************************************************************************

// includes(searchElement)
// includes(searchElement, fromIndex)

// Give ans in true or false

{

  // let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  // console.log(array1.includes(20));
  // console.log(array1.includes(20 , 5));
  // console.log(array1.includes(80 , 5));

}

// Array.unshift //add value in frist index
// Array.push //add value in last index
// Array.shift //delet value in frist index
// Array.pop  //delete value in last index

{

  // let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  // console.log(array1.unshift(0));
  // console.log(array1);
  // console.log(array1.push(100));
  // console.log(array1);
  // console.log(array1.shift());
  // console.log(array1);
  // console.log(array1.pop());
  // console.log(array1);

}

//Array.flat() Method*********************************************************************************************

// flat()
// flat(depth)


//flat remove subarray(depth)

{

  // let array =[1,2,[3,4,5,[6,7,8,[9,10]]]]

  // console.log(array);
  // // console.log(array.flat(1));
  // // console.log(array.flat(2));
  // // console.log(array.flat(3));
  // // console.log(array.flat(4));
  // // console.log(array.flat(5));
  // // console.log(array.flat(50));

  // console.log(array.map((x)=> x *2));
  // console.log(array.flat(4).map((x)=>x*x));

}

// Array.flatMap()**********************************************************************************************

//flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

//flatmap add subarray(depth) 

{

  // let array=[1,2,2,1,2,3,4,5]
  // // console.log(array);
  // console.log(array.flatMap((x)=> (x===2?[[2,2]]: 1)));
  // let demoReducer1 = array.flat(5).map((prev , next) => prev * next , 2)

  // console.log(demoReducer1);

  // console.log(array);
}

// /* Array.forEach() */************************************************************************************* */

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

{
  // let array = [1 , 2 , 2 , 1]

  // let demoeach = array.forEach((item) => console.log(item * 2))
  // let demomap = array.map((item) => console.log(item * 2))

  // console.log(demomap);
  // console.log(demoeach);
}


// Array.indexOf()*********************************************************************************************

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

//find the index using value

{

  // let array = ['html' , 'css' , 'bootstrap' , 'sass' , 'tailwindcss'  , 'javascript' , 'reactJS' ]

  // console.log(array.indexOf('javascript'));

}


// Array.join()***********************************************************************************************

// join()
// join(separator)

//using join method to make array to string

{
  // let array = ['html' , 'css' , 'bootstrap' , 'sass' , 'tailwindcss'  , 'javascript' , 'reactJS' ]

  // console.log(array.join(``));
  // console.log(array.join(` `));
  // console.log(array.join(` + `));

}

// Array.keys()***********************************************************************************************

// keys()
{

  // let array = [1, 2, 3, 4, 5, , 7]

  // console.log(array);

  // // let keys = Object.keys(array)

  // // console.log(keys);

  // let demo1 = array.keys()

  // console.log(demo1.next().value);
  // console.log(demo1.next().value);
  // console.log(demo1.next().value);
  // console.log(demo1.next().value);
  // console.log(demo1.next().value);
  // console.log(demo1.next().value);
  // console.log(demo1.next().value);
  // console.log(demo1.next().value);

  // for(key in array){

  //     console.log(key);

  // }

}

//Array.reduce()*************************************************************************************************

// reduce(callbackFn)
// reduce(callbackFn, initialValue)


{

  //     let array = [1,2,3,4,5,6,7,8,9,10]


  // let sum = array.reduce((prev, next) => prev + next, 0);

  // console.log(sum);

  // let num = [1,2,3,4,5,6]

   // 2 * 1 = 2
    // 2 * 2 = 4
    // 4 * 3 = 12
    // 12 * 4 = 48
    // 48 * 5 = 240
    // 240 * 6 = 1440

    // 2 * 6 = 12
    // 12 * 5 = 60
    // 60 * 4 = 240
    // 240 * 3 = 720
    // 720 * 2 = 1440
    // 1440 * 1 = 1440

  //   console.log(num);


  //   let demoReducer = num.reduce((prev , next) => prev * next , 2)
  //   let demoReducer1 = num.reduceRight((prev , next) => prev * next , 2)

  //   console.log(demoReducer);
  //   console.log(demoReducer1);

}

//Array.reverse()*********************************************************************************************

// reverse()

//give reverse array elements
{
  // let array1=[1,2,3,4,5,17,,908,21,678,0]

  // let array2=[`yesh`,`raj`,`manav`,`om`,`divy`]

  // console.log(array1.reverse());
  // console.log(array2.reverse());

}

//Array.slice()***********************************************************************************************

// slice()
// slice(start)
// slice(start, end)

//slice can crop the array and give new array

{

  // let array=[`yesh`,`raj`,`manav`,`om`,`divy`]

  // console.log(array.slice(3));
  // console.log(array.slice(2,3));

}

//Array.sort()***********************************************************************************************

// sort()
// sort(compareFn)

{
  // let array1 = [1, 2, 3, 4, 5, 17, , 908, 21, 678, 0]

  // let array2 = [`yesh`, `raj`, `manav`, `om`, `divy`]


  // console.log(array2.sort());
  // console.log(array1.sort());
  // console.log(array1.sort((a,b)=> a-b));

}

//Array.splice()***********************************************************************************************

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
  let array = [`yesh`, `raj`, `manav`, `om`, `divy`, `meet`, `raju`, `ramesh`, `kanti`]

  // console.log(array.splice(1));
  // console.log(array.splice(1,4));
  console.log(array.splice(1, 0, `hasmukh`));

  console.log(array);

  console.log(array.splice(4, 0, `nilesh`));
  console.log(array);
}


//Array.values()****************************************************************************************

// values()

{
  let array = [`yesh`, `raj`, `manav`, `om`, `divy`, `meet`, `raju`, `ramesh`, `kanti`]

 let demo = array.values()
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  console.log(demo.next().value);
  
}



}