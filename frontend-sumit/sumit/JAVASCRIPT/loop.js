// sum of 1 to 100

{
    let i=1
    let sum=0;

    for(i ; i<=100 ; i++){
        sum=sum+i
    }
    console.log(`sum is = ${sum}`);
    
}

// multiplication table of 5

{
    let i=1
    let n=5
    
    for(i ; i<=10 ; i++){
        let multi = n * i
        console.log(`multiplication is : ${multi}`);
        
    }
}

// factorial of 5

{
    let i=0
    let fac=1

    for(i ; i<5; i++){
        fac = fac * (5 - i)
    }
    console.log(`factorial of 5 is : ${fac}`);
    
}

// fibbonaci of first 10 number

{
    let f1=0
    let f2=1
    console.log(`first 10 numbers fibbonacci is: ${f1}`);
    console.log(`first 10 numbers fibbonacci is: ${f2}`);
    
    for(let i=0 ;i<8 ; i++ ){
        
        fibbo = f1 + f2
        f1 = f2
        f2 = fibbo
        console.log(`first 10 numbers fibbonaci is : ${fibbo}`);
        
    }
}


// reverse string

{
    
    let str = "srushti"

    let reverse = ""
    
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    console.log(reverse);
    
}

// calculates the sum of all elements in an array

{
    let arr = [10,20,30,40,50]
    let sum=0

    for(let i=0 ; i<arr.length ; i++){
        sum += arr[i]
    }
    console.log(sum);
    
}

// finds the largest number in an array.

{
    let arr = [10,20,30,40,60,50,1000]
    let largest = arr[0]

    for(i=0 ; i<arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest);
    
}

// counts the number of vowels in a given string

{
    let str = "aeiou";

    let vowels="a,e,i,o,u,A,E,I,O,U";

    let count = 0;

    for(let i=0 ; i<str.length ; i++){
        if(str == vowels){
            count++;
        }
    }
    console.log(count);
    
}