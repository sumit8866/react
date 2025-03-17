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