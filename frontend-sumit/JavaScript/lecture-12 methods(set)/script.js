//javascript map(object) set(array) methods

// The Set object lets you store unique values of any type, whether primitive values or object references.

let objectset = new Set()

console.log(objectset);

// in set key and value are both same 
objectset.add (`bmw`)
objectset.add (`banana`)
objectset.add (`English`)
console.log(objectset);

//clear for delete all key and value *******************************************************************
// objectset.clear()
// console.log(objectset);

//entries for show both key and value***********************************************************************

let demo = objectset.entries()

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

let demo3 = objectset.keys()

console.log(demo3.next().value);
console.log(demo3.next().value);
console.log(demo3.next().value);
console.log(demo3.next().value);

//value for only show value of keys ***************************************************************************

let demo4 = objectset.values()

console.log(demo4.next().value);
console.log(demo4.next().value);
console.log(demo4.next().value);
console.log(demo4.next().value);


let num1 = new Set([1,2,5,6,9,10,3,4,7,8])

let num2 = new Set([1,2,3,4,7,8])


//difference give difference element of both set
let demo5 = num1.difference(num2)
console.log(demo5);

//intersection give same element of both set
let demo6 = num1.intersection(num2)
console.log(demo6);

//isDisjointFrom give ans in true and false if both set is defference than give true and set any element are same than give false
let demo7 = num1.isDisjointFrom(num2)
console.log(demo7);

//isSubsetOf give ans in true and false if both set is same than give true and both set one elements are difference than false
let demo8 = num1.isSubsetOf(num2)
console.log(demo8)

//isSupersetOf give ans in true and false if frist set all value are in second set than true or else false 
let demo9 = num1.isSupersetOf(num2)
console.log(demo9)

//symmetricDifference give new set or remove same elements of both set and give difference elements of set
let demo10 = num1.symmetricDifference(num2)
console.log(demo10)

//union give new set or remove difference elements of set and give same elements of set
let demo11 = num1.union(num2)
console.log(demo11)