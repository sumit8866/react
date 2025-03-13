
//  Javascript Statements    
/* 
   while loop
   do..while loop
   for loop
   Nested for loop
   for..in loop
   for..of loop
*/

//while loop

{
    // let i=1
    // while(i<=100){
    //     console.log(`1 to 100 numbers ${i}`);
    //     i++;
    // }
}

//do..while loop
{
    // let i=1
    // do{
    //     console.log(`1 to 100 numbers ${i}`);
    //     i++;
    // }while(i<=100)
}

// for loop

{
    // for(let i=1 ;i<=100 ;i++){
    //     console.log(`1 to 100 numbers ${i}`);
    // }
}

// Nested for loop

{
    // for(let i=1 ;i<=100 ;i++){
    //     console.log(`1 to 100 numbers ${i}`);
    //     for(let i=69 ;i<=69 ;i++){
    //         console.log(`1 to 100 numbers ${i}`);
    //     }
    // }
}

//for loop break and continue
{
    // yes:for(let i=1 ;i<=100 ;i++){
    //     console.log(`1 to 100 numbers ${i}`);
    //     if(i===5){
    //         break yes;
    //     }
    //     for(let i=69 ;i<=69 ;i++){
    //         console.log(`1 to 100 numbers ${i}`);
    //     }
    // }
}

// for..in loop

{
    // let info = {fname:"John", lname:"Doe", age:25}
    // console.log(info.fname);
    // console.log(info.lname);
    // console.log(info.age);
    // console.log(info["age"]);
    
    // for (let key in info){
        
    //     console.log(`${key} :- ${info[key]}`);
    // }
}

{
    // let array = ['bmw' , 'maruti' , 'nessan' , 'volvo' , 'mahendara']
    // let num = [1114 , 12 , 3214 , 434 , 55, 56]

    // console.log(array[0]);
    // console.log(array[1]);
    // console.log(array[2]);
    // console.log(array[3]);
    // console.log(array[4]);

    // for(let i of array){
    //     console.log(i);   
    // }
    // for(let i of num){
    //     console.log(i*69);   
    // }
    // for(let i=1 ; i<=5 ;i++){
    //     console.log(num[i]*69);   
    // }
}









// Write a program that calculates the sum of all numbers from 1 to 100

{

    // let sum=0;

    // for( let i=1 ; i<=100 ; i++){
    //     sum=sum+i
    // }
    // console.log(`sum is = ${sum}`);

}

// Write a program that prints the multiplication table of a given number (for example, 5)

{

    // let n=parseInt(prompt(`enter number`))

    // for( let i=1 ; i<=10 ; i++){
    //     let multi = n * i
    //     console.log(`${n} * ${i} : ${multi}`);

    // }
}

// Write a program that calculates the factorial of a given number (for example, 5!)

{
    // let n = parseInt(prompt(`enter number`))
    // fac = 1;
    // for (i = 1; i <= n; i++) {
    //     fac = i * fac;
    // fac *=i
    // }
    // console.log(`factorial of ${n} is : ${fac}`);

}

// Write a program that prints the first 10 numbers in the Fibonacci sequence

{
    // let n = parseInt(prompt(`enter number`))
    // let f1=0
    // let f2=1
    // console.log(`first ${n} numbers fibbonacci is: ${f1}`);
    // console.log(`first ${n} numbers fibbonacci is: ${f2}`);
    // for(let i=1 ;i<=n ; i++ ){

    //     fibbo = f1 + f2
    //     f1 = f2
    //     f2 = fibbo
    //     console.log(`first ${n} numbers fibbonaci is : ${fibbo}`);

    // }
}


// Write a program that reverses a given string

{

    // let str = prompt(``)

    // let reverse = ""

    // for(let i=str.length-1;i>=0;i--){
    //     reverse+=str[i]
    // }
    // console.log(reverse);

}

// Write a program that calculates the sum of all elements in an array

{
    // let arr = [100,500,500,500,500]
    // let sum=0

    // for(let i=0 ; i<arr.length ; i++){
    //     sum += arr[i]
    // }
    // console.log(sum);

}

// Write a program that finds the largest number in an array

{
    // let arr = [10,20,30000,500000,700000,50,1000]
    // let largest = arr[0]

    // for(i=0 ; i<arr.length ; i++){
    //     if(arr[i] > largest){
    //         largest = arr[i]
    //     }
    // }
    // console.log(largest);

}

// Write a program that counts the number of vowels in a given string

{
    // let str = prompt(`Enter your char`);

    // let vowel=[`a`,`e`,`i`,`o`,`u`,`A`,`E`,`I`,`O`,`U`];

    // let count = 0;

    // for(let i=0 ; i<vowel.length ; i++){
    //     for(let j=0 ; j<str.length ; j++){
    //         if(str[j] == vowels[i]){
    //             count++;
    //         }
    //     }
    // }
    // console.log(count);

}
{
    
    // for (let i = 5; i >= 1; i--) {
    //     for (let j = 5; j >= i; j--) {
    //         console.log(j);

    //     }
    //     console.log(`\n`);

    // }
}

