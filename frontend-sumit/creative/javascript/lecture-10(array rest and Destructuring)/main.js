// Array rest and Destructuring

// The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. It can be used in locations that receive data (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).

// syntax:
// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;

// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;

// ({ a, b } = obj); // parentheses are required
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);

{
  //Array Destructuring **************************************************************************************************
  {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // let [a,b,c,d,e,f,g,h,i,j]=array

    // console.log(a);//1
    //   console.log(b);//2
    //   console.log(c);//3
    //   console.log(d);//4
    //   console.log(e);//5
    //   console.log(f);//6
    //   console.log(g);//7
    //   console.log(h);//8
    //   console.log(i);//9
    //   console.log(j);//undifind



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
  }

  // Array rest**************************************************************************************************************

  {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // let [x,y,...z]=array
    // console.log(x);//1
    // console.log(y);//2
    // console.log(z);//[3, 4, 5, 6, 7, 8, 9]

    // let [a,b,,,,c]=array
    // console.log(a);//1
    // console.log(b);//2
    // console.log(c);//6
  }
}
