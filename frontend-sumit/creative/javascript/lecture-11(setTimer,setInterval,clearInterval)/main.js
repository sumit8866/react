//Javascript setTimeout,
// setInterval,
//clearInterval***************************************************************************************************

{
  // setTimeout*******************************************************************************************************
  // The setTimeout() method of the Window interface sets a timer which executes a function or specified piece of code once the timer expires.

  // syntax:
  // setTimeout(code)
  // setTimeout(code, delay)
  // setTimeout(functionRef)
  // setTimeout(functionRef, delay)

  // function setTimer() {
  //   let timer = setTimer(function() {
  //     document.writeln('Hello, World!',"<br>");
  //     }, 3000);
  //     document.writeln('Timer set for 3 seconds.');
  //     }
  //     setTimer();

  // function  item(){
  //   document.writeln(`sumit`,"<br>");
  // }

  // let setTimer = setTimeout(item,3000)
  // document.writeln(setTimer);

  {
    // setTimeout(() => {
    //   document.writeln("Hello ");
    // }, 2000);
    // setTimeout(() => {
    //   document.writeln("my ");
    // }, 3000);
    // setTimeout(() => {
    //   document.writeln("name ");
    // }, 4000);
    // setTimeout(() => {
    //   document.writeln("is ");
    // }, 5000);
    // setTimeout(() => {
    //   document.writeln("sumit");
    // }, 6000);
  }
}

{
  // setInterval********************************************************************************************************
  // The setInterval() method of the Window interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
  // syntax:
  // setInterval(code)
  // setInterval(code, delay)
  // setInterval(func)
  // setInterval(func, delay)
  // function myFunction() {
  //   console.log
  //   ("Hello world");
  // }
  // setInterval(myFunction, 1000);
}

{
  // clearInterval**********************************************************************************************************
  // The clearInterval() method of the Window interface cancels a timer previously established by a call to setInterval
  // syntax:
  // clearInterval(id)
  // id: The ID of the timer to be cleared.
  // Returns: undefined
  // Example
  //in this example setinterval cannot log because of clearInterval
  // let id = setInterval(() => {
  //     console.log("Hello");
  //   }, 1000);
  //   clearInterval(id);
  //   function myFunction() {
  //     console.log
  //     ("Hello sumit");
  //   }
  //   let stop = setInterval(myFunction, 1000);
  //   function change() {
  //     clearInterval(stop)
  //   }
}

{
  // let hours = 0;
  // let minutes = 0;
  // let seconds = 0;
  // let milliseconds = 0;
  // let start;
  // function formatTime(unit) {
  //   return unit.toString().padStart(2,'0');
  // }
  // function updateTime() {
  //   milliseconds += 10;
  //   if (milliseconds >= 1000) {
  //     milliseconds = 0;
  //     seconds++;
  //   }
  //   if (seconds >= 60) {
  //     seconds = 0;
  //     minutes++;
  //   }
  //   if (minutes >= 60) {
  //     minutes = 0;
  //     hours++;
  //   }
  //   if (hours >= 24) {
  //     hours = 0;
  //   }
  //   const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
  //   document.getElementById("watch").innerHTML=timeString
  // }
  // function changestart() {
  //     start = setInterval(updateTime, 10);
  // }
  // function changestop() {
  //   clearInterval(start);
  // }
  // function changereset() {
  //   changestop();
  //   hours = 0;
  //   minutes = 0;
  //   seconds = 0;
  //   milliseconds=0
  //   document.getElementById("watch").innerHTML = "00:00:00.000"
  // }
}

{
  // let farm = prompt("enter topic:");

  // if (farm === "coffee") {
  //   setTimeout(() => {
  //     document.writeln("Farm is Open!!!!", "<br>");
  //     setTimeout(() => {
  //       document.writeln("coffee Bean growth!!", "<br>");
  //       setTimeout(() => {
  //         document.writeln("coffee Harvesting!!!", "<br>");
  //         setTimeout(() => {
  //           document.writeln("coffee bean Separation!!!", "<br>");
  //           setTimeout(() => {
  //             document.writeln("coffee beans Processing and drying!!", "<br>");
  //             setTimeout(() => {
  //               document.writeln("coffee Cleaning, sorting, and grading!!","<br>");
  //               setTimeout(() => {
  //                 document.writeln("Roasting coffee beans", "<br>");
  //                 setTimeout(() => {
  //                   document.writeln("Now Coffee beans ready for brewing!!!","<br>");
  //                 }, 1500);
  //               }, 1500);
  //             }, 1500);
  //           }, 1500);
  //         }, 1500);
  //       }, 1500);
  //     }, 1500);
  //   }, 1500);
  // } else {
  //   console.log("Invalid topic");
  // }
}

