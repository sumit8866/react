//  Javascript Statements  
/*
   if Statement
   if....else Statement
   Nested Statements
   if....else..if Statement (ladder)
   Switch case Statements
*/

// if statement

// {
//     let age= parseInt(
//         prompt(`Enter age`)
//     )
//     if (age>=18){
//         console.log('====================================');
//         console.log(`you are eligble for voting`);
//         console.log('====================================')
//     }
// }

// if....else Statement

// {
//     let age= parseInt(
//         prompt(`Enter age`)
//     )
//     if (age>=18){
//         console.log('====================================');
//         console.log(` your age is ${age} and you are eligble for voting`);
//         console.log('====================================')
//     }else{
//         console.log('====================================');
//         console.log(` your age is ${age} and you are not eligble for voting`);
//         console.log('====================================');
//     }
// }

// Nested Statements
{

    // let genders = prompt(`Enter gender`)

    // let age = parseInt(
    //     prompt(`Enter age`)
    // )
    // if (genders === "male") {
    //     if (age >= 18) {
    //         console.log('====================================');
    //         console.log(`you are hire`);
    //         console.log('====================================');
    //     } else {
    //         console.log('====================================');
    //         console.log(`you are not hire (you are just ${age} year old)`);
    //         console.log('====================================');
    //     }
    // } else {
    //     console.log('====================================');
    //     console.log(`you are not hire (you are just ${age} year old)`);
    //     console.log('====================================');
    // }

}

// if....else..if Statement (ladder)

{

    // let mark = parseInt(
    //     prompt(`Enter mark`)
    // )
    // if(mark >= 90){
    //     console.log('====================================');
    //     console.log(`Grade - A`);
    //     console.log('====================================');
    // }else if(mark >= 70 && mark <=89){
    //     console.log('====================================');
    //     console.log(`Grade - B`);
    //     console.log('====================================');
    // }else if(mark >= 50 && mark <=69){
    //     console.log('====================================');
    //     console.log(`Grade - C`);
    //     console.log('====================================');
    // }else if(mark >= 33 && mark <=49){
    //     console.log('====================================');
    //     console.log(`Grade - D`);
    //     console.log('====================================');
    // }else{
    //     console.log('====================================');
    //     console.log(`FAIL`);
    //     console.log('====================================');
    // }
}

//Switch case Statements
{
let car =  prompt(`Enter car name`)


switch(car){
    case "bmw":console.log('====================================');
    console.log(`BMW car is on sale`);
    console.log('====================================');
    break;
    case "hyundai":console.log('====================================');
    console.log(`Hyundai car is on sale`);
    console.log('====================================');
    break;
    case "mahindra":console.log('====================================');
    console.log(`Mahindra car is on sale`);
    console.log('====================================');
    break;
    case "nissan":console.log('====================================');
    console.log(`Nissan car is on sale`);
    console.log('====================================');
    break;
    case "ford":console.log('====================================');
    console.log(`Ford car is on sale`);
    console.log('====================================');
    break;
    default :console.log('====================================');
    console.log(`${car} car is not on sale`);
    console.log('====================================');
}
}