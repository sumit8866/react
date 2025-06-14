import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";


const LiveApicrud = () => {
  const tokan = "yLvuji3jvqS0OzOE";
  const [ini, setIni] = useState({
    name: "",
    surname: "",
    rollno: "",
    gujrati: "",
    hindi: "",
    sanskrit: "",
    english: "",
  });
  const [list, setList] = useState([]);
  const [edit, setedit] = useState(null);

  const handlesubmit = (values, { resetForm }) => {

    const {_id, ...rest } = values
    if (edit !== null) {

        // axios.patch(`https://generateapi.onrender.com/api/Studentresult/${edit}`,
        //   {  name: values.name,
        //     surname: values.surname,
        //     rollno: values.rollno,
        //     gujrati: values.gujrati,
        //     hindi: values.hindi,
        //     sanskrit: values.sanskrit,
        //     english: values.english
        // },
        axios.patch(`https://generateapi.onrender.com/api/Studentresult/${edit}`,rest,
            {
                headers: {
                Authorization: tokan,
                },
            }
        ).then((res) => {
            // console.log(res);
            console.log(res.data.Status);
            setIni({
                name: "",
                surname: "",
                rollno: "",
                gujrati: "",
                hindi: "",
                sanskrit: "",
                english: "",
            });
            getdata()
        }).catch((error) => {
            console.log(error);
        })

    }else{
    axios
      .post(" https://generateapi.onrender.com/api/Studentresult", values, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        // console.log(res);
        resetForm();
        getdata()
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

  const getdata = () => {
    axios.get(" https://generateapi.onrender.com/api/Studentresult", {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        console.log(res.data.Data);
        console.log('hello');
        setList(res.data.Data);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deletedata = (item) => {

    console.log(item._id);
    
    axios.delete(`https://generateapi.onrender.com/api/Studentresult/${item._id}`,
        {
        headers: { Authorization: tokan }
        }
    )
     .then((res) => {
        console.log(res.data.Status);
        getdata()

      })
      .catch((error) => {
        console.log(error);
      });
  }

  const editdata = (item, index) => {
    setIni(item);
    setedit(item._id);
  }

  const total = (item) => {
    return (
      parseInt(item.gujrati) +
      parseInt(item.english) +
      parseInt(item.hindi) +
      parseInt(item.sanskrit)
    );
  };
  const per = (item) => {
    return (
      (parseInt(item.gujrati) +
        parseInt(item.english) +
        parseInt(item.hindi) +
        parseInt(item.sanskrit)) /
      5
    );
  };

  const minimum = (item) => {
    const arr = [
      item.gujrati,
      item.english,
      item.hindi,
      item.sanskrit
    ];
    return Math.min(...arr);
  };
  const maximum = (item) => {
    const arr = [
      item.gujrati,
      item.english,
      item.hindi,
      item.sanskrit
    ];
    return Math.max(...arr);
  };

  const grade = (item) => {
    const total =
      parseInt(item.gujrati) +
      parseInt(item.english) +
      parseInt(item.hindi) +
      parseInt(item.sanskrit)
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
      parseInt(item.gujrati) >= 33 &&
      parseInt(item.english) >= 33 &&
      parseInt(item.hindi) >= 33 &&
      parseInt(item.sanskrit) >= 33 
     
    ) {
      return grade(item);
    } else {
      return "Student has failed";
    }
  };

  getdata();

  return (
    <>
      <Formik enableReinitialize initialValues={ini} onSubmit={handlesubmit}>
        <Form>
          {/* Form fields */}

          <Field name="name" type="text" placeholder="Name" />
          <br /><br />
          <Field name="surname" type="text" placeholder="surname" />
          <br /><br />
          <Field name="rollno" type="number" placeholder="rollno" />
          <br /><br />
          <Field name="gujrati" type="number" placeholder="gujrati" />
          <br /><br />
          <Field name="hindi" type="number" placeholder="hindi" />
          <br /><br />
          <Field name="sanskrit" type="number" placeholder="sanskrit" />
          <br /><br />
          <Field name="english" type="number" placeholder="english" />
          <br /><br />
        <button type="submit">submit</button>
        </Form>
      </Formik>

          <table
        border="1"
        cellSpacing="6"
        bgcolor="white"
        width={"100%"}
        style={{ textAlign: "center" }}
      >
        <caption>
          <b>Students Results</b>
        </caption>
        <thead>
          <tr>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>Surname</th>
            <th rowSpan={2}>Roll No.</th>
            <th colSpan={9}>Score</th>
            <th rowSpan={2}>Delete</th>
            <th rowSpan={2}>Edit</th>
          </tr>
          <tr>
            <th>Gujrati</th>
            <th>Hindi</th>
            <th>sanskrit</th>
            <th>English</th>
           
            <th>Total</th>
            <th>per</th>
            <th>maximum</th>
            <th>minimum</th>
            <th>Result</th>
          </tr>
        </thead>

        {list.map((item, index) => (
          <>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.rollno}</td>
                <td>{item.gujrati}</td>
                <td>{item.hindi}</td>
                <td>{item.sanskrit}</td>
                <td>{item.english}</td>
                <td>{total(item)}</td>
                <td>{per(item)}</td>
                <td>{maximum(item)}</td>
                <td>{minimum(item)}</td>
                <td>{passfail(item)}</td>
                <td>
                  <Button onClick={() => deletedata(item)}>DELETE</Button>
                </td>
                <td>
                  <Button onClick={() => editdata(item, index)}>EDIT</Button>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </>
  );
};

export default LiveApicrud;
