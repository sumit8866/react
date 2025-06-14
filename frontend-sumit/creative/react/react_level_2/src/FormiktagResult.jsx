import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";

const FormiktagResult = () => {
  const [list, setList] = useState([]);
  const [Edit, setEdit] = useState(null);
  const [ini, setini] = useState({
    name: "",
    surname: "",
    roll_no: "",
    class: "",
    gujrati: "",
    hindi: "",
    english: "",
    math: "",
    science: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter Name").min(2).max(20),
    surname: Yup.string().required("Enter Surname").min(2).max(20),
    roll_no: Yup.number()
      .typeError("Must be number")
      .required()
      .positive()
      .integer(),
    class: Yup.string().required().max(5),
    gujrati: Yup.number()
      .typeError("Enter valid marks")
      .required()
      .min(0)
      .max(100),
    hindi: Yup.number()
      .typeError("Enter valid marks")
      .required()
      .min(0)
      .max(100),
    english: Yup.number()
      .typeError("Enter valid marks")
      .required()
      .min(0)
      .max(100),
    math: Yup.number()
      .typeError("Enter valid marks")
      .required()
      .min(0)
      .max(100),
    science: Yup.number()
      .typeError("Enter valid marks")
      .required()
      .min(0)
      .max(100),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (Edit !== null) {
      const copydata = [...list];
      copydata[Edit] = values;
      setList(copydata);
      setEdit(null);
      setini({
        name: "",
        surname: "",
        roll_no: "",
        class: "",
        gujrati: "",
        hindi: "",
        english: "",
        math: "",
        science: "",
      });
    } else {
        setList([...list, values]);
       
    }
    resetForm();
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
      parseInt(item.gujrati) +
      parseInt(item.english) +
      parseInt(item.hindi) +
      parseInt(item.math) +
      parseInt(item.science);
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
      parseInt(item.math) >= 33 &&
      parseInt(item.science) >= 33
    ) {
      return grade(item);
    } else {
      return "Student has failed";
    }
  };

  const deletedata = (index) => {
    const copydata = [...list];
    copydata.splice(index, 1);
    setList(copydata);
  };
  const editdata = (item, index) => {
    setini({
      name:item.name,
      surname: item.surname,
      roll_no: item.roll_no,
      class: item.class,
      gujrati: item.gujrati,
      hindi: item.hindi,
      english: item.english,
      math: item.math,
      science: item.science,
    });
    setEdit(index);
    // console.log('helloooooo');
    
  };
  return (
    <>
      <Formik
      enableReinitialize
        initialValues={ini}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <table border="1" cellSpacing="6" bgcolor="white">
            <caption>
              <b>Result</b>
            </caption>
            <thead>
              <tr>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>Surname</th>
                <th rowSpan={2}>Roll No.</th>
                <th rowSpan={2}>Class</th>
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
                  <Field type="text" name="name" placeholder="Name"  />
                  <ErrorMessage
                    name="name"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    
                  />
                  <ErrorMessage
                    name="surname"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="number"
                    name="roll_no"
                    placeholder="Roll No."
                    
                  />
                  <ErrorMessage
                    name="roll_no"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="text"
                    name="class"
                    placeholder="Class"
                    
                  />
                  <ErrorMessage
                    name="class"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="number"
                    name="gujrati"
                    placeholder="Gujrati"
                    
                  />
                  <ErrorMessage
                    name="gujrati"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="number"
                    name="hindi"
                    placeholder="Hindi"
                    
                  />
                  <ErrorMessage
                    name="hindi"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="number"
                    name="math"
                    placeholder="Math"
                    
                  />
                  <ErrorMessage
                    name="math"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="number"
                    name="english"
                    placeholder="English"
                    
                  />
                  <ErrorMessage
                    name="english"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
                <td>
                  <Field
                    type="number"
                    name="science"
                    placeholder="Science"
                    
                  />
                  <ErrorMessage
                    name="science"
                    component="Box"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="9" align="center">
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
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
            <th rowSpan={2}>class</th>
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

        {list.map((item, index) => (
          <>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.roll_no}</td>
                <td>{item.class}</td>
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
                <td>
                  <Button onClick={() => deletedata(index)}>DELETE</Button>
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

export default FormiktagResult;
