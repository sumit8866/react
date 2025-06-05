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

  const getData = () => {
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
    setList([...List, Newdata]);
    setName("");
    setSurname("");
    setRoll_No("");
    setDiv("");
    setgujrati("");
    setenglish("");
    sethindi("");
    setmath("");
    setscience("");
    console.log(List);
  };

  const total = (gujrati, english, hindi, math, science) => {
    return (
      parseInt(gujrati) +
      parseInt(english) +
      parseInt(hindi) +
      parseInt(math) +
      parseInt(science)
    );
  };
  const per = (gujrati, english, hindi, math, science) => {
    return (
      (parseInt(gujrati) +
        parseInt(english) +
        parseInt(hindi) +
        parseInt(math) +
        parseInt(science)) /
      5
    );
  };
  const minimum = (gujrati, english, hindi, math, science) => {
    const arr = [gujrati, english, hindi, math, science];
    return Math.min(...arr);
  };
  const maximum = (gujrati, english, hindi, math, science) => {
    const arr = [gujrati, english, hindi, math, science];
    return Math.max(...arr);
  };
  const grade = (gujrati, english, hindi, math, science) => {
    const total =
      parseInt(gujrati) +
      parseInt(english) +
      parseInt(hindi) +
      parseInt(math) +
      parseInt(science);
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

  const passfail = (gujrati, english, hindi, math, science) => {
    if (
      gujrati >= 33 &&
      english >= 33 &&
      hindi >= 33 &&
      math >= 33 &&
      science >= 33
    ) {
      return "student is pass";
    } else {
      return "student is fail";
    }
  };
  return (
    <>
      <table border="1" cellspacing="6" bgcolor="white">
        <caption>
          <b>Input Marks</b>
        </caption>
        <tr>
          <th rowspan={2}>Name</th>
          <th rowSpan={2}>Surname</th>
          <th rowSpan={2}>ROllNo.</th>
          <th rowSpan={2}>Division</th>
          <th colspan={5}>Score</th>
        </tr>
        <tr>
          <th>Gujrati</th>
          <th>Hindi</th>
          <th>Math</th>
          <th>English</th>
          <th>Science</th>
        </tr>
        <tr>
          <td>
            <Input
              type="text"
              placeholder="ENTER NAME"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            ></Input>{" "}
          </td>
          <td>
            <Input
              type="text"
              placeholder="ENTER SURNAME"
              value={Surname}
              onChange={(e) => setSurname(e.target.value)}
            ></Input>
          </td>
          <td>
            <Input
              type="number"
              value={Roll_No}
              placeholder="ENTER Roll_No"
              onChange={(e) => setRoll_No(e.target.value)}
            ></Input>
          </td>
          <td>
            <Input
              type="text"
              placeholder="ENTER DIVISION"
              value={Div}
              onChange={(e) => setDiv(e.target.value)}
            ></Input>
          </td>
          <td>
            <Input
              type="number"
              placeholder="GUJRATI MARK"
              value={gujrati}
              onChange={(e) => setgujrati(e.target.value)}
            ></Input>
          </td>
          <td>
            <Input
              type="number"
              placeholder="HINDI MARK"
              value={english}
              onChange={(e) => setenglish(e.target.value)}
            ></Input>
          </td>
          <td>
            <Input
              type="number"
              placeholder="MATH MARK"
              value={hindi}
              onChange={(e) => sethindi(e.target.value)}
            ></Input>
          </td>
          <td>
            <Input
              type="number"
              placeholder="ENGLISH  MARK"
              value={math}
              onChange={(e) => setmath(e.target.value)}
            ></Input>
          </td>
          <td>
            <Input
              type="number"
              placeholder="SCIENCE MARK"
              value={science}
              onChange={(e) => setscience(e.target.value)}
            ></Input>
          </td>
        </tr>
      </table>
      <br /> <br />
      <Button onClick={getData}>Submit</Button>
      {List.map((item) => (
        <>
          {/* <p>
            {per(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
          </p>
          <p>
            {total(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
          </p>
          <p>
            {minimum(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
          </p>
          <p>
            {maximum(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
          </p>
           <p>
            {grade(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
          </p>
          <p>
            {passfail(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
          </p> */}

          <Box width="80%" margin="auto" textAlign="center">
            <Typography variant="h2" fontWeight={900} fontFamily="monospace">
              Student Result
            </Typography>

            <Box display={'flex'} flexDirection={'column'} textAlign={'start'}>
              <Typography variant="body1">
                Student Name : {item.Name} {item.Surname}
              </Typography>
              <Typography variant="body1">
                Student Roll No. : {item.Roll_No}
              </Typography>
              <Typography variant="body1">
                Student Division : {item.Div}
              </Typography>
            </Box>

              <Typography variant="h4" fontWeight={900} fontFamily="monospace">Subject Mark</Typography>
            <Box display={'flex'} width={'100%'} justifyContent={'center'}>

              <Box textAlign={'center'}>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                GUJRATI :{item.gujrati}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                HINDI   :{item.hindi}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                MATH    :{item.math}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                ENGLISH :{item.english}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                SCIRNCE :{item.science}
                </Typography>
              </Box>


              <Box textAlign={'center'}>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                Total :   {total(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                Per :{per(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                Highest Mark :{maximum(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                Lowest Mark :{minimum(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
                </Typography>
                <Typography variant="body1" border={'1px dotted gold'} width={'300px'}  margin={2}>
                Grade : {grade(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
                </Typography>
              </Box>


            </Box>
<Box display={'flex'} justifyContent={'center'}>
  
            <Typography variant="body1" border={'1px dotted gold'}   width={'600px'}  margin={2}>
              {passfail(
              item.gujrati,
              item.english,
              item.hindi,
              item.math,
              item.science
            )}
                </Typography>
</Box>
          </Box>
        </>
      ))}
    </>
  );
};

export default Result;
