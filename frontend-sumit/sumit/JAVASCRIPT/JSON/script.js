// java script object notation
// used to convert js into json or json into js

// javascript to json format

// {
//     let obj = {name:"srushti" , age:19 , gender:"female"}
//     console.log(obj);

//     let jsonobj = JSON.stringify(obj)
//     console.log(jsonobj);
    
// }

// json to javascript

// {
//     let obj = '{"name":"srushti" , "age" : 19}'

//     console.log(obj);
    
//     let jsobj = JSON.parse(obj)
//     console.log(jsobj);
    
// }

// javascript fetch

// {
//     async function data(){
//         let res = await fetch("http://localhost:3000/profile")
//         let dataa = await res.json()
//         console.log(dataa.name);  
//     }

//     data()
// }

//javascript function

// pure function & impure function

// let a = 100

// function sum(b){
//   return a + b
// }

// a++

// console.log(sum(20 , 30));
// console.log(sum(10 , 10));
// console.log(sum(15 , 15));

// {
//     function sum(a,b){
//         console.log(a+b)
//     }

//     sum(10,20)
// }
// {
//     function sub([a,b]){
//         console.log(a-b);
        
//     }
//     sub([10,20])
// }

// {
//     arr1 = [10,20]
//     arr2 = [30,40]

//     function multi(){
//         console.log(...arr1);
//         console.log(...arr2);
//         console.log(arr1[0] * arr2[1]);
//     }
//         multi()
// }

// javascript arrow function

// {
//     let func = (a,b) => console.log(a+b);
//     func(10,30)

// }

// const sum = () => {
//     console.log('helloooooooooooooooooooooooooooooo');
// }
// sum()

// syncronous or asyncronous function

/*
setTimeout
clearTimeout
setInterval
clearInterval
*/

// setTimeout(() => {
//     console.log("heloooo guyessss");
// },1000)

// function fun(a,b){
//     console.log(a ** b);
//     console.log(a + b);

// }

// let t = setTimeout(() =>{
//     fun(10,20);
// },1000)

// setTimeout(()=>{
//     clearTimeout(t);
// }) 
    




// const func = setInterval(() => {
//     console.log("hiiiiiiiiiii");
// }, 2000)

// function f1(a,b){
//     console.log(a / b);
// }

// let func = setInterval(() => {
//     f1(20,10)
// })

// setInterval(() => {
//     clearInterval(func)
// },200)

// console.log(func);

// setInterval(() => {
//     clearInterval(func)
// }, 10000)

/* Javascript alert() */

// function clicks(){
//   return alert('Hi, I Am a Javascript!!!')
// }

/* Javascript prompt() */


// function User(){
//   let names =  parseInt(prompt('UserName' , ))
//   return names;
// }

// let value = User()

// console.log(value);

/* Javascript conform() */

// const conformation = () => {
//   return console.log(confirm('Are You Housekeeper!!!!!!!'));
// }

/* Javascript Array Distructuring */

// {

//   let array = [1, 2, 3, 4, 5, 6]

//   const [num1, num2, num3, num4, num5] = array

//   console.log(num1);
//   console.log(num2);
// }


/* Javascript Object Distructuring */

// {
//   let profile = {
//     name:'srushti',
//     age:19,
//     email:'example45@gmail.com'
//   }

//   const {name , age , email} = profile

//   console.log(name);
//   console.log(age);
//   console.log(email);

// }

// DOM document object model

// function styles(){
//     let dom = document.querySelector('div')
//     dom.setAttribute('id' , 'firstDiv')
//     document.getElementById('firstDiv').style.backgroundColor = "lavender"
// }

/* Document.getElementById() */

{
    // let dom = document.getElementById('firstDiv').innerHTML

    // console.log(dom);

    // let dom1 = document.getElementById('pre').textContent

    // console.log(dom1);

    // let  dom2 = document.getElementById('pre').innerText

    // console.log(dom2);
}

/* document.getElementByName */

{

    function focusInputs(){
        let dom = document.getElementsByName('fname')[0]
        console.log(dom);
        
        dom.focus()
    }

    function blurInputs(){
        let dom = document.getElementsByName('fname')[0]
        dom.blur()
    }

}

/* document.getElementByTagName */

{
    // let dom = document.getElementsByTagName('div')[0]

    // dom.style.backgroundColor = "blue"
    // dom.style.height = "100px"

    // console.log(dom);
}

/* querySelector And querySelectorAll */

{
    // let = document.querySelector('#root a')

    // let = document.querySelector('a')

    // let  = document.querySelector('a[target="_self"]')

    // let  = document.querySelector('*')

    // console.log(dom);
    
}

/* Javascript Events */

/* IIFE Functions */
/* immidiately invoked function expression */

// {
    
//     let styels = addEventListener('onclick' , (function styles(){
//         let dom = document.getElementsByClassName('box')[0].classList
//         dom.toggle('bg-color')
//         console.log(dom);
//     })())
    
// }

// call , apply and bind method

{
    // function sum(a,b){
    //     return a + b
    // }

    // let result = sum(10,10)
    // console.log(result);
    
}

// call and apply method

// {
//     function sum(a,b){
//         return a + b
//     }

//     let result1 = sum.call()
// }

// function call , apply and bind method

// call method

// {
//     function sum(a , b){
//         return a + b
//     }

//     let result = sum(5 , 10)

//     console.log(result);
// }

// with call method

// {
//     function sum(a , b){
//         return a + b
//     }

//     let result = sum.call(this , 10 , 10)

//     let result2 = sum.apply(this , [10 , 10])

//     console.log(result);

//     console.log(result2);

// }
// {
//     let profile = {
//         firstname:'Jack',
//         lastname:'Martin',
//         discription(age , email){
//             console.log(`my name is ${this.firstname} ${this.lastname} and my age is ${age} and email is ${email}`);
//         }
//     }

//     // profile.discription(45 , 'exmaple@gmail.com')

//     profile.discription.call(profile , 45 , 'example@gmail.com')
//     profile.discription.apply(profile , [45 , 'example@gmail.com'])
// }

{
    //   let profile = {
    //     firstname: "Jack",
    //     lastname: "Martin",
    //     introduction:function details(){
    //         console.log(`my name is ${this.firstname} ${this.lastname}`);
    //     }
    //   };
    
    //   let profile2 = {
    //     firstname:'Peter',
    //     lastname:'Parker'
    //   }
    
    //   let result =  profile.introduction.bind(profile2)
    
    //   result()
    
    }
    
    {
        // let num1 = [1 , 2 , 3 , 4]
        // let num2 = [5 , 6 , 7 , 8 , 9]
    
        // let demo = num1.join('/')
    
        // let concat = num1.concat(num2)
    
        // console.log(demo);
    
        // console.log(concat);
    
        // let applyDemo = num1.push.apply(num2)
    
        // console.log(applyDemo);
    
    
        // let max = Math.max.apply(this , num1)
    
        // console.log(max);
    }
    
    // Asynchronous Javascript 
    
    // callback hell 
    
    {
        let farm = "open"
    
        if(farm === 'open'){
            setTimeout(() => {
                console.log('Farm is Open!!!!');
                setTimeout(() => {
                    console.log('coffee Bean growth!!'); 
                    setTimeout(() => {
                        console.log('coffee Harvesting!!!');
                        setTimeout(() => {
                            console.log('coffee bean Separation!!!');
                            setTimeout(() => {
                                console.log('coffee beans Processing and drying!!');
                                setTimeout(() => {
                                    console.log('coffee Cleaning, sorting, and grading!!');
                                    setTimeout(() => {
                                        console.log('Roasting coffee beans');
                                        setTimeout(() => {
                                            console.log('Now Coffee beans ready for brewing!!!');
                                        } , 8000)
                                    } , 7000)
                                } , 6000)
                            } , 5000)
                        } , 4000)
                    } , 3000)
                } , 2000)
            } , 1000)
        }
    }

// javascript promises & chaining

{
    new promise(function (resolve , reject){

    })

    
}