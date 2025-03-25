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

    //  // 2 * 1 = 2
    //   // 2 * 2 = 4
    //   // 4 * 3 = 12
    //   // 12 * 4 = 48
    //   // 48 * 5 = 240
    //   // 240 * 6 = 1440

    //   // 2 * 6 = 12
    //   // 12 * 5 = 60
    //   // 60 * 4 = 240
    //   // 240 * 3 = 720
    //   // 720 * 2 = 1440
    //   // 1440 * 1 = 1440

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


