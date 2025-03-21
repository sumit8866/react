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
    let array = ['html' , 20 , undefined , true , 56]

    console.log(array);

    console.log(array.length);

    console.log(array[0]);
    console.log(array[1]);

    array.length = 10
    
    console.log(array);

    array[10] = 100

    console.log(array);
    
    let data = Object.keys(array)

    console.log(data);

    let array4 = new Array(10 , 12)

    console.log(array4);
    
}

/* Javascript Array Method */


// Array.from()**********************************************************************************************

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)


{
    let num = [1 , 2 , 3 , 4]

    console.log(Array.from(num , (x) => x*x));
    
    console.log(Array.fromAsync(num , (x) => x*x));

    console.log(num);

    num[4] = 5

    console.log(num);

    console.log(typeof null);
}