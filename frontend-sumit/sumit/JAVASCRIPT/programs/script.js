
// JavaScript Program To Print Hello World

{
    console.log("Hello World");
    
}

// JavaScript Program to Add Two Numbers

{
    let a = 10
    let b = 2 

    console.log(a+b);
    
}

// JavaScript Program to Find the Square Root

{
    let a = 10

    console.log(`square of a is : ${a*a}`);
    
}

// JavaScript Program to Calculate the Area of a Triangle
// 1/2 *b*h

{
    let b = 10
    let h = 120

    let t = 1/2 * b * h

    console.log(`area of triangle : ${t}`);
    
}

// JavaScript Program to Swap Two Variables

{
    let a = 10
    let b = 20

    a = a+b
    b = a-b
    a = a-b

    console.log(`after swipe a=${a} and b=${b}`);
    
}

// 6) JavaScript Program to Solve Quadratic Equation

// x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}          

{
    function qe(a,b,c){
        let d = b * b - 4 * a * c
        let sqr = Math.sqrt(Math.abs(d))

        if(d>0){
            console.log(`roots are different`);
            console.log(`${(-b + sqr) / (2 * a)} and ${(-b - sqr) / (2 * a)}`);
        }
        else if(d==0){
            console.log(`roots are same`);
            console.log(-b / (2 * a) `and` -b / (2 * a));
        }else { 
            console.log('Roots are complex'); 
        }
    }
    qe(1,-3,2)
}
// 7) JavaScript Program to Convert Kilometres to Miles

{
    let mile = 0.621371
    let km = 2

    let convert = km * mile

    console.log(`2 km is = ${convert} miles`);
    
}
// 8) Javascript Program to Convert Celsius to Fahrenheit

{
    let c = 2
    let f = (c * 9/5) + 32

    let convert = c * f 

    console.log(`2 celcious is = ${convert} fehrenhit`);
    
}
// 9) Javascript Program to Generate a Random Number

{
    console.log(Math.random());
    
}

// 10)Javascript Program to Check if a number is Positive, Negative, or Zero

{
    function check(a){
        if(a==0 && b==0){
            console.log(`${a} is zero`);
        }
        else if(a>0){
            console.log(`${a} is positive number`);
        }
        else{
            console.log(`${a} is nagetive number`);
        }
    }
    check(10)
}
// 11) Javascript Program to Check if a Number is Odd or Even

{
    function check(a){
        if(a % 2 == 0){
            console.log(`${a} is even number`);
        }else{
            console.log(`${a} is an odd number`);           
        }
    }
    check(7)
}
// 12)JavaScript Program to Find the Largest Among Three Numbers

{
    function largest(a,b,c){
        if(a>b && a>c){
            console.log(`${a} is largest`);
        }
        else if(b>a && b>c){
            console.log(`${b} is largest`);
        }
        else{
            console.log(`${c} is largest`);
        }
    }
    largest(10,2000,100)
}
// 13)JavaScript Program to Check Prime Number

{
    function Prime(num) {
        if(num <= 1){
            console.log(`${num} is not prime number`);
        }else{
            let isPrime = true
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return true;
                    isPrime = false;
                    break;
                }
                else{
                    console.log(`${num} is a prime number`);               
                }
            }
            if(isPrime){
                console.log(`${num} is prime number`);
            }else{
                console.log(`${num} is not prime number`);
            }
        }
    }
    Prime(7)
}
// 14)JavaScript Program to Print All Prime Numbers in an Interval

{
    
}

// 15)JavaScript Program to Find the Factorial of a Number

{
    let fac = 1
    let num = 5

    for(let i = 0;i<num ; i++){
        fac = fac * (num-i)
    }
    console.log(`factorial of ${num} is = ${fac}`);
    
}
// 16)JavaScript Program to Display the Multiplication Table

{
    let num = 5

    for(i=1 ; i<=10 ; i++){
        console.log(`5 * ${i} = ${num*i}`);
    }
}
// 17)JavaScript Program to Print the Fibonacci Sequence

{
    function fibbo(num){
        let n1 = 0
        let n2 = 1
        let sum

        console.log(`${n1}`);
        console.log(`${n2}`);
        

        for(let i=1 ; i<=num ; i++){
            sum = n1 + n2 
            n1 = n2
            n2 = sum
            console.log(`${sum}`);
        }
    }
    fibbo(5)
}
// 18)JavaScript Program to Check Armstrong Number

{
    let num = 153
    let sum = 0
    let temp = num
    while (temp > 0) {
        let digit = temp % 10
        sum += digit * digit * digit
        temp = Math.floor(temp / 10)
    }
    if (sum === num) {
    console.log(` Armstrong number.`);
    } else {
    console.log(` not Armstrong number.`);
    }
}

// 19)JavaScript Program to Find Armstrong Number in an Interval

{

}

// 20)JavaScript Program to Make a Simple Calculator

{
    function calculater(num1,num2,calc){
        switch(calc){
            case '+':
                let sum = num1+num2
                console.log(`${num1} + ${num2} = ${sum}`);
                break;
            case '-':
                let sub = num1-num2
                console.log(`${num1} - ${num2} = ${sub}`);
                break;
            case '*':
                let multi = num1 * num2
                console.log(`${num1} * ${num2} = ${multi}`);
                break;
            case '/':
                let div = num1 / num2
                console.log(`${num1} / ${num2} = ${div}`);
                break;
            case '%':
                let reminder = num1 % num2
                console.log(`${num1} % ${num2} = ${reminder}`);
                break;
            default : 
                console.log(`error`);
                break;
        }
    }
    calculater(20,10,'%')
}

// 21)JavaScript Program to Find the Sum of Natural Numbers

{
    function sum(num){
        let sum=0
        for(i=1 ; i<=num ; i++){
            sum+=i
        }
        console.log(`${sum}`);
    }
    sum(5)
}

// 22)JavaScript Program to Check if the Numbers Have Same Last Digit

{
    function lastdigit(num1,num2){
        let n1 = num1 % 100
        let n2 = num2 % 100

        if(n1 == n2){
            console.log(`${num1} and ${num2} both have same last digits.`); 
        }
        else{
            console.log(`${num1} and ${num2} both have not same last digits.`);
        }
    }
    lastdigit(1888,2998)
}

// 23)JavaScript Program to Find HCF or GCD

{
    function myfunction(a,b){
        let smaller = Math.min(a,b)
        let hcf = 1

        for(let i=1 ; i<=smaller ; i++){
            if(a % i === 0 && b % i === 0){
                hcf = i
            }
        }
        console.log(`${hcf}`);
    }
    myfunction(20,12)
}

// 24)JavaScript Program to Find LCM

{
    
}

// 25)JavaScript Program to Find the Factors of a Number

{
    
}

// 26)JavaScript Program to Find Sum of Natural Numbers Using Recursion
// 27)JavaScript Program to Guess a Random Number
// 28)JavaScript Program to Shuffle Deck of Cards
// 29)JavaScript Program to Display Fibonacci Sequence Using Recursion
// 30)JavaScript Program to Find Factorial of Number Using Recursion
// 31)JavaScript Program to Convert Decimal to Binary
// 32)JavaScript Program to Find ASCII Value of Character



