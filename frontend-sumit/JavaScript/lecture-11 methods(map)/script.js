//javascript map(object) set(array) methods

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// syntax:

// let (name)= new Map()
// (name).set("(key name", "value")

let objectmap = new Map()
console.log(objectmap);

//set for add key and value pair in object*****************************************************************
objectmap.set(`car`,`bmw`)
objectmap.set(`fruits`,`banana`)
objectmap.set(`language`,`javascript`)

console.log(objectmap);

//size for see object length*******************************************************************************
console.log(objectmap.size);

//clear for delete all key and value pair*******************************************************************
// objectmap.clear()
// console.log(objectmap);

//get for show key value****************************************************************************************

let key1 = objectmap.get(`car`)
let key2 = objectmap.get(`fruits`)
let key3 = objectmap.get(`language`)
console.log(key1);
console.log(key2);
console.log(key3);

//has can check kay is available or not (ans in true and false)**********************************************

console.log(objectmap.has(`car`));
console.log(objectmap.has(`subject`));

//delete for delete key and value in object********************************************************************

objectmap.delete(`fruits`)
console.log(objectmap);

objectmap.set(`subject`,`english`)

//entries for show both key and value***********************************************************************

let demo = objectmap.entries()

console.log(demo.next().value);
console.log(demo.next().value);
console.log(demo.next().value);
console.log(demo.next().value);

let array = [1,2,3,4,5,6]

let demo1 =array.entries()

console.log(demo1.next().value);
console.log(demo1.next().value);
console.log(demo1.next().value);
console.log(demo1.next().value);
console.log(demo1.next().value);
console.log(demo1.next().value);
console.log(demo1.next().value);
console.log(demo1.next().value);


//keys for only show key name********************************************************************************

let demo3 = objectmap.keys()

console.log(demo3.next().value);
console.log(demo3.next().value);
console.log(demo3.next().value);
console.log(demo3.next().value);

//value for only show value of keys ***************************************************************************

let demo4 = objectmap.values()

console.log(demo4.next().value);
console.log(demo4.next().value);
console.log(demo4.next().value);
console.log(demo4.next().value);


//in this fuction if you call frist value than output is key name and first key than output is vlaue

 function Elements(value , key , map){
    console.log(`${key} = ${value}`);
    
  }
new Map([['1' , 'kiwi'] , ['2' , 'watermelon'], ['3' , 'orange']]).forEach(Elements)
  
let person= {
    name:'raj',
    age:45,
    job:'IT',
    getFullInfo  : function(){
        console.log(`my name is ${this.name} and my age is ${this.age} nad my job is ${this.job}`);
    }
}

console.log(person);






