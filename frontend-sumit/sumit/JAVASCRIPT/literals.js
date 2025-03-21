// literals in javascript

{
    let str = 'I am "srushti"'
    let str1 = 'I am `srushti`'
    let str2 = "I am 'srushti'"
    let str3 = "I am `javascript`"
    let str4 = "javascript"
    let fruit = ['apple' , 'mango']
    let fruit1 = ["apple" , , "mango"]
    let fruit2 = ['apple' , , 'mango', ,]
    let arr = ["strawberry" , "pineapple"]
    let arr1 = ["strawberry"]
    let arr2 = ["range rover"]
    let arr3 = ["neno"]


    console.log(str);
    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(`this is ${str4} language`);
    console.log(fruit);
    console.log(fruit1);
    console.log(fruit2);
    console.log(`I love ${arr} more than mango`);
    console.log(`I love ${arr1} more than mango`);
    console.log(`I have ${arr2} and ${arr3} both cars`);
    
}

// padstart and padend method in javascript

// padStart(targetLength)
// padStart(targetLength, padString)

// padEnd(targetLength)
// padEnd(targetLength, padString)


{
    let a = '5'
    let str = 'this is srushti'
    let str1 = ' this is me'
    let str2 = 'hyy'
    let str3 = '03'

    // console.log(a.padStart(5,0));
    // console.log(str.padStart(20,'t'));
    // console.log(str1.padStart(20,'hello '));
    // console.log(str2.padStart(10));
    // console.log(str3.padStart(8,'::'));


    console.log(a.padEnd(5,'0 0'));
    console.log(str.padEnd(20,' hii'));
    console.log(str1.padEnd(15,'.....'));
    console.log(str2.padEnd(10,'!!!!'));
    console.log(str3.padEnd(8,':00 am'));
    
}