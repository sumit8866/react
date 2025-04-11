//JavaScript Arithmetic Operators

//  +	  Addition
//  -	  Subtraction
//  *	  Multiplication
//  **	Exponentiation (ES2016)
//  /	  Division
//  %	  Modulus (Division Remainder)
//  ++	Increment
//  --	Decrement

{
  let name = `sumit`;

  console.log(`student name is ${name}`);

  let Hindi = 90;
  let English = 60;
  let science = 70;
  let History = 40;
  let Math = 63;

  console.log(`Hindi   = ${Hindi}`);
  console.log(`English = ${English}`);
  console.log(`science = ${science}`);
  console.log(`History = ${History}`);
  console.log(`Math    = ${Math}`);

  //display Total

  let total = Hindi + English + science + History + Math;
  console.log(`Total Mark = ${total}`);

  if (total < 500) {
    //display Percentage
    let per = (total / 500) * 100;
    console.log(`Percentage = ${per}`);

    //display Highest mark

    if (Hindi > English && Hindi > science && Hindi > History && Hindi > Math) {
      console.log(`Highest mark is Hindi = ${Hindi}`);
    } else if (English > science && English > History && English > Math) {
      console.log(`Highest mark is English = ${English}`);
    } else if (science > History && science > Math) {
      console.log(`Highest mark is science = ${science}`);
    } else if (History > Math) {
      console.log(`Highest mark is History = ${History}`);
    } else {
      console.log(`Highest mark is Math = ${Math}`);
    }

    if (Hindi < English && Hindi < science && Hindi < History && Hindi < Math) {
      console.log(`Lowest mark is Hindi = ${Hindi}`);
    } else if (English < science && English < History && English < Math) {
      console.log(`Lowest mark is English = ${English}`);
    } else if (science < History && science < Math) {
      console.log(`Lowest mark is science = ${science}`);
    } else if (History < Math) {
      console.log(`Lowest mark is History = ${History}`);
    } else {
      console.log(`Lowest mark is Math = ${Math}`);
    }

    //display pass or fail
    if (per > 33) {
      console.log(`Student is pass with ${per} percentage`);
    } else {
      console.log(`Student is fail with ${per} percentage`);
    }

    //display grade
    if (per >= 90) {
      console.log("A-Grade");
    } else if (per >= 80) {
      console.log("B-Grade");
    } else if (per >= 70) {
      console.log("C-Grade");
    } else if (per >= 60) {
      console.log("D-Grade");
    } else if (per >= 33) {
      console.log("E-Grade");
    } else {
      console.log("F-Grade");
    }
  } else {
    console.log("Invalid Marks");
  }
}

// {

//   let linebrack = "<hr />"

//   document.write("hello")
//   document.write(linebrack)
//   document.write("world")
// }
