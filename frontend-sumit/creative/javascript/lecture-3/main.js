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

  if(total<500){
  //display Percentage
  let per = (total / 500) * 100;
  console.log(`Percentage = ${per}`);

  //display Highest mark
  if (Hindi > English) {
    if (Hindi > science) {
      if (Hindi > History) {
        if (Hindi > Math) {
          console.log("Highest Mark In Hindi ");
        } else {
          console.log("Highest Mark In Math ");
        }
      } else {
        if (History > Math) {
          console.log("Highest Mark In History ");
        } else {
          console.log("Highest Mark In Math ");
        }
      }
    } else {
      if (science > History) {
        if (science > Math) {
          console.log("Highest Mark In science ");
        } else {
          console.log("Highest Mark In Math ");
        }
      } else {
        if (History > Math) {
          console.log("Highest Mark In History ");
        } else {
          console.log("Highest Mark In Math ");
        }
      }
    }
  } else {
    if (English > science) {
      if (English > History) {
        if (English > Math) {
          console.log("Highest Mark In English ");
        } else {
          console.log("Highest Mark In Math ");
        }
      } else {
        if (History > Math) {
          console.log("Highest Mark In History ");
        } else {
          console.log("Highest Mark In Math ");
        }
      }
    } else {
      if (science > History) {
        if (science > Math) {
          console.log("Highest Mark In science ");
        } else {
          console.log("Highest Mark In Math ");
        }
      } else {
        if (History > Math) {
          console.log("Highest Mark In History ");
        } else {
          console.log("Highest Mark In Math ");
        }
      }
    }
  }


  //display lowest mark
  if (Hindi < English) {
    if (Hindi < science) {
      if (Hindi < History) {
        if (Hindi < Math) {
          console.log("Lowest Mark In Hindi ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      } else {
        if (History < Math) {
          console.log("Lowest Mark In History ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      }
    } else {
      if (science < History) {
        if (science < Math) {
          console.log("Lowest Mark In science ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      } else {
        if (History < Math) {
          console.log("Lowest Mark In History ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      }
    }
  } else {
    if (English < science) {
      if (English < History) {
        if (English < Math) {
          console.log("Lowest Mark In English ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      } else {
        if (History < Math) {
          console.log("Lowest Mark In History ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      }
    } else {
      if (science < History) {
        if (science < Math) {
          console.log("Lowest Mark In science ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      } else {
        if (History < Math) {
          console.log("Lowest Mark In History ");
        } else {
          console.log("Lowest Mark In Math ");
        }
      }
    }
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


}else{
  console.log("Invalid Marks");
}

}


// {

//   let linebrack = "<hr />"

//   document.write("hello")
//   document.write(linebrack)
//   document.write("world")
// }
