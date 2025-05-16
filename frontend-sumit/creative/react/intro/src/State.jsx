import React, { useState } from 'react'

function State() {
const [text , setText] = useState("hello");
//    const [text , setText] = useState("hello")
const [num , setNum] = useState(0)
function chnageplus1(){
  setNum(num + 1)
  document.getElementsByClassName("yellow")[0].style.color = "gray"

}
function chnageplus5(){
  setNum(num + 5)
  document.getElementsByClassName("yellow")[0].style.color = "green"

}
function chnagenumminus1(){
  setNum(num - 1)
  document.getElementsByClassName("yellow")[0].style.color = "blue"

}
function chnagenumminus5(){
  setNum(num - 5)
  document.getElementsByClassName("yellow")[0].style.color = "yellow"
}

function first(){
  setText("hello sumit")
  document.getElementsByClassName("yellow")[0].style.color = "red"
}
function second(){
  setText("hello rahul")
  document.getElementsByClassName("yellow")[0].style.color = "blue"
}
function third(){
  setText("hello abhi")
  document.getElementsByClassName("yellow")[0].style.color = "green"
}
function fourth(){
  setText("hello rani")
  document.getElementsByClassName("yellow")[0].style.color = "yellow"
}
function fifth(){
  setText("hello radha")
  document.getElementsByClassName("yellow")[0].style.color = "pink"
}



  return (
    <>
    {/* <div>StateExample</div> */}
    <h1 class="yellow">{text}</h1>

    <button onClick={first}> 1</button>
    <button onClick={second}>2</button>
    <button onClick={third}>3</button>
    <button onClick={fourth}>4</button>
    <button onClick={fifth}>5</button>
<br />
<br />
<h1 class="yellow">{num}</h1>
     <button onClick={chnageplus1}>+1</button>
     <button onClick={chnageplus5}>+5</button>
     <button onClick={chnagenumminus1}>-1</button>
     <button onClick={chnagenumminus5}>-5</button>
    </>
  )
}

export default State