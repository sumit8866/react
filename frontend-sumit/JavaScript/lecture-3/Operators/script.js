

/* Javascript Operators */

/* Arithmetic Operator */

{
    // let x = 40
    // let y = 40
    // let z = "box"

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


//1. Add two numbers input by the user
{
    let n1 = 10
    let n2 = 20

    let sum = n1 + n2;
    console.log(`adding two number is ${sum}`);
}
{
    //     const n1 = parseInt(prompt('Enter the first number '));
    // const n2 = parseInt(prompt('Enter the second number '));

    // let sum = n1 + n2;
    //     console.log(`adding two number is ${sum}`);
}



//2. Calculate the area of a rectangle

{

    let l = 20
    let b = 5

    let rec = l * b
    console.log(`area of rectangle is : ${rec}`);
}


//3. Convert temperature from Celsius to Fahrenheit

{
    let t = 10
    let f = (t * 9 / 5) + 32
    console.log(`Celsius is ${t} and Fahrenheit is ${f}`);

}

//4. Find the remainder when one number is divided by another

{
    let n1 = 10
    let n2 = 5

    let reminder = (n1 % n2)

    console.log(`reminder is : ${reminder}`);
}

//5. Calculate the power of a number

{
    let n1 = 8
    let n2 = 3

    let power = (n1 ** n2)
    console.log(`the power of a number ${power}`);

}

//6. Combination of Arithmetic Operators

{
    let n1 = 8
    let n2 = 3
    let n3 = 10

    let Combination = ((n1 + n2 * n3) - (n1 * n2) * (n2 + n1) / 100)

    console.log(`Combination is ${Combination}`);

}


//7. Comparing Numbers [5 number]

{
    let n1 = 10
    let n2 = 20
    let n3 = 30
    let n4 = 30
    let n5 = 30

    n1 === n2 && n2 === n3 && n3 === n4 && n4 === n5
        ? console.log(`those numbers are equal`)
        : console.log(`those numbers are not equal`);


    n3 === n4 && n4 === n5
        ? console.log(`those numbers are equal`)
        : console.log(`those numbers are not equal`);
}



//Comparing Different Types [4 types]

{
    let n1=10
    let str1= `hello`
    let yes=true
    let currentDate = new Date();
    let person = {
        name: "John",
        age: 30,
        isEmployed: true
      };
    console.log(currentDate === yes);
    console.log(str1 === n1);
    console.log(n1 === n1) == yes;
    console.log(person);
    
    

}
//8. Comparing Strings [5 String]
{
    let str1 = `hello world`
    let str2 = `hello world`
    let str3 = `hello`
    let str4 = `hello`
    let str5 = `hello`

    str1 === str2 && str2 === str3 && str3 === str4 && str4 === str5
        ? console.log(`those strings are equal`)
        : console.log(`those strings are not equal`);

    str3 && str3 === str4 && str4 === str5
        ? console.log(`those strings are equal`)
        : console.log(`those strings are not equal`);
}

//10.  Using Multiple Operators [4 types]

{
    let n1 = 10
    let n2 = 20
    // Arithmetic Operators
    let sum = n1 + n2
    console.log(`Arithmetic Operators sum = n1+n2 is ${sum}`);

    // Comparison Operators

    n1 == n2 ? console.log(`this numbers are equal`)
        : console.log(`this numbers are not equal`);


    // Logical Operators
    let a = true;
    let b = false;
    console.log(a && b);
    console.log(a && a);

    //Ternary Operator
    let score = 85;
     score >= 33 ? console.log(`Pass`)
     :console.log(`Fail`);
     let scores = 25;
     scores >= 33 ? console.log(`Pass`)
     :console.log(`Fail`);
}

// 11. Complex Assignments[2 types]


{
    let n1 =100
    let n2 =200

    console.log(n1+=n2);
    console.log(n1*=n2);
    
}