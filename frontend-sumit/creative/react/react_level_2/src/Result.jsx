import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";

const Result = () => {
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Roll_No, setRoll_No] = useState("");
  const [Div, setDiv] = useState("");
  const [gujrati, setgujrati] = useState("");
  const [english, setenglish] = useState("");
  const [hindi, sethindi] = useState("");
  const [math, setmath] = useState("");
  const [science, setscience] = useState("");
  const [List, setList] = useState([]);
  const [edit ,setedit] =useState(null)

  const getData = () => {
    if(( Name&&
      Surname&&
      Roll_No&&
      Div&&
      gujrati&&
      english&&
      hindi&&
      math&&
      science)===''){
        alert("fill all details");
      }else{
        const Newdata = {
          Name,
          Surname,
          Roll_No,
          Div,
          gujrati,
          english,
          hindi,
          math,
          science,
        };

        if(edit != null){
          const copydata = [...List]
          copydata[edit] = Newdata
          setList(copydata)
          setedit(null)
        }else{
    setList([...List, Newdata]);
        }
        setName("");
        setSurname("");
        setRoll_No("");
        setDiv("");
        setgujrati("");
        setenglish("");
        sethindi("");
        setmath("");
        setscience("");
        // console.log(List);
      }
  };

  const total = (item) => {
    return (
      parseInt(item.gujrati) +
      parseInt(item.english) +
      parseInt(item.hindi) +
      parseInt(item.math) +
      parseInt(item.science)
    );
  };
  const per = (item) => {
    return (
      (parseInt(item.gujrati) +
        parseInt(item.english) +
        parseInt(item.hindi) +
        parseInt(item.math) +
        parseInt(item.science)) /
      5
    );
  };
  const minimum = (item) => {
    const arr = [
      item.gujrati,
      item.english,
      item.hindi,
      item.math,
      item.science,
    ];
    return Math.min(...arr);
  };
  const maximum = (item) => {
    const arr = [
      item.gujrati,
      item.english,
      item.hindi,
      item.math,
      item.science,
    ];
    return Math.max(...arr);
  };
 const grade = (item) => {
  const total =
    Number(item.gujrati) +
    Number(item.english) +
    Number(item.hindi) +
    Number(item.math) +
    Number(item.science);
  const per = total / 5;

  let finalGrade;

  if (per >= 90) {
    finalGrade = "A+";
  } else if (per >= 80) {
    finalGrade = "A";
  } else if (per >= 70) {
    finalGrade = "B+";
  } else if (per >= 60) {
    finalGrade = "B";
  } else if (per >= 50) {
    finalGrade = "C";
  } else if (per >= 40) {
    finalGrade = "D";
  } else {
    finalGrade = "F";
  }

  return finalGrade;
};

const passfail = (item) => {
  if (
    Number(item.gujrati) >= 33 &&
    Number(item.english) >= 33 &&
    Number(item.hindi) >= 33 &&
    Number(item.math) >= 33 &&
    Number(item.science) >= 33
  ) {
    return grade(item);
  } else {
    return "Student has failed";
  }
};


  const Deletedata =(i,index)=>{
    
    const copydata = [...List];

     copydata.splice(index,1);

    setList(copydata);
    
  }
  const Editdata=(item,index) =>{

setName(item.Name)
setSurname(item.Surname)
setRoll_No(item.Roll_No)
setDiv(item.Div)
setgujrati(item.gujrati)
sethindi(item.hindi)
setenglish(item.english)
setmath(item.math)
setscience(item.science)
setedit(index)
  }
  return (
    <>
      <table border="1" cellSpacing="6" bgcolor="white">
        <caption>
          <b>Result</b>
        </caption>
        <thead>
          <tr>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>Surname</th>
            <th rowSpan={2}>Roll No.</th>
            <th rowSpan={2}>Division</th>
            <th colSpan={5}>Score</th>
          </tr>
          <tr>
            <th>Gujrati</th>
            <th>Hindi</th>
            <th>Math</th>
            <th>English</th>
            <th>Science</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Input
                type="text"
                placeholder="ENTER NAME"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="text"
                placeholder="ENTER SURNAME"
                value={Surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="ENTER ROLL NO"
                value={Roll_No}
                onChange={(e) => setRoll_No(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="text"
                placeholder="ENTER DIVISION"
                value={Div}
                onChange={(e) => setDiv(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="GUJRATI MARK"
                value={gujrati}
                onChange={(e) => setgujrati(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="HINDI MARK"
                value={hindi}
                onChange={(e) => sethindi(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="MATH MARK"
                value={math}
                onChange={(e) => setmath(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="ENGLISH MARK"
                value={english}
                onChange={(e) => setenglish(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="SCIENCE MARK"
                value={science}
                onChange={(e) => setscience(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <Button onClick={getData}>Submit</Button>

      <table border="1" cellSpacing="6" bgcolor="white">
        <caption>
          <b>Students Results</b>
        </caption>
        <thead>
          <tr>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>Surname</th>
            <th rowSpan={2}>Roll No.</th>
            <th rowSpan={2}>Division</th>
            <th colSpan={10}>Score</th>
            <th rowSpan={2}>Delete</th>
            <th rowSpan={2}>Edit</th>
          </tr>
          <tr>
            <th>Gujrati</th>
            <th>Hindi</th>
            <th>Math</th>
            <th>English</th>
            <th>Science</th>
            <th>Total</th>
            <th>per</th>
            <th>maximum</th>
            <th>minimum</th>
            <th>Result</th>
          </tr>
        </thead>

        {List.map((item ,index) => (
          <>
            <tbody style={{ textAlign: "center" ,}}>
              <tr style={{margin:'10px 0px'}}>
                <td>{item.Name}</td>
                <td>{item.Surname}</td>
                <td>{item.Roll_No}</td>
                <td>{item.Div}</td>
                <td>{item.gujrati}</td>
                <td>{item.hindi}</td>
                <td>{item.math}</td>
                <td>{item.english}</td>
                <td>{item.science}</td>
                <td>{total(item)}</td>
                <td>{per(item)}</td>
                <td>{maximum(item)}</td>
                <td>{minimum(item)}</td>
                <td>{passfail(item)}</td>
                <td> <Button onClick={()=>Deletedata(item ,index)}>DELETE</Button></td>
                <td> <Button onClick={()=>Editdata(item,index)}>EDIT</Button></td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </>
  );
};

export default Result;
