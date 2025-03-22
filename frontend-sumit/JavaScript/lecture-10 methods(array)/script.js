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

    let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

    console.log(array1.unshift(0));
    console.log(array1);
    console.log(array1.push(100));
    console.log(array1);
    console.log(array1.shift());
    console.log(array1);
    console.log(array1.pop());
    console.log(array1);
    
    
}