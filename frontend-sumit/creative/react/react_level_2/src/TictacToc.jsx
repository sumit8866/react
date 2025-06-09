import React, { useState } from "react";
import player1 from "./assets/circle.png";
import player2 from "./assets/cross.png";

import { Box, Typography } from "@mui/material";


const TictacToc = () => {
  

  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    const newData = [...data];

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${player1} alt="circle">`;
      newData[num] = "o";
    } else {
      e.target.innerHTML = `<img src=${player2} alt="cross">`;
      newData[num] = "x";
    }

    setData(newData);
    setCount(count + 1);
    checkWinner(newData);
    console.log(data);
    
  };



  // const checkWinner = (data) => {
  //   if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {

  //     alert(`Player ${data[0]} wins!`);
  //   } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {

  //     alert(`Player ${data[3]} wins!`);
  //   } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {

  //     alert(`Player ${data[6]} wins!`);
  //   } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {

  //     alert(`Player ${data[0]} wins!`);
  //   } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {

  //     alert(`Player ${data[1]} wins!`);
  //   } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {

  //     alert(`Player ${data[2]} wins!`);
  //   } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {

  //     alert(`Player ${data[0]} wins!`);
  //   } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {

  //     alert(`Player ${data[2]} wins!`);
  //   } else if (count === 8) {
      
  //     alert("It's a draw!");
  //   }
  // };

  

  const checkWinner = (newData) => {
    const winner = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let [a, b, c] of winner) {
      if (newData[a] && newData[a] === newData[b] && newData[b] === newData[c]) {
        setLock(true);
        // alert(`Player ${newData[a]} wins!`);
        const winnerElement = document.querySelector(".winner");
        winnerElement.innerHTML = `Player <img src=${newData[a] === "o" ? player1 : player2} alt="${newData[a]}"> wins!`
        // reset();
        return;
      }
    }

    if (count === 8) {
      setLock(true);
      const winnerElement = document.querySelector(".winner");
      winnerElement.innerHTML = "It's a draw!";
      reset();
    }
  };

  const reset = () => {
    setLock(false);
    setCount(0);
    setData(["", "", "", "", "", "", "", "", ""]);
    const winnerElement = document.querySelector(".winner");
        winnerElement.innerHTML = "";
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
  };


  return (
    <>
      <Box className="container">
        <h1 className="text-center">Tic Tac Toe</h1>

            <Typography variant="h6"  className="winner"></Typography>
        <Box className="subrow">
          <Box className="board" textAlign={"center"}>
            <Box className="row">
              <Box className="box" onClick={(e) => toggle(e, 0)}></Box>
              <Box className="box" onClick={(e) => toggle(e, 1)}></Box>
              <Box className="box" onClick={(e) => toggle(e, 2)}></Box>
            </Box>
            <Box className="row">
              <Box className="box" onClick={(e) => toggle(e, 3)}></Box>
              <Box className="box" onClick={(e) => toggle(e, 4)}></Box>
              <Box className="box" onClick={(e) => toggle(e, 5)}></Box>
            </Box>
            <Box className="row">
              <Box className="box" onClick={(e) => toggle(e, 6)}></Box>
              <Box className="box" onClick={(e) => toggle(e, 7)}></Box>
              <Box className="box" onClick={(e) => toggle(e, 8)}></Box>
            </Box>
          </Box>
          <button className="reset" onClick={() => reset()}>
            RESET
          </button>
        </Box>
      </Box>
    </>
  );
};

export default TictacToc;
