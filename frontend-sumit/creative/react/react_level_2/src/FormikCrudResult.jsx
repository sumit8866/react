import { Button, Input } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

import * as Yup from "yup";
const FormikCrudResult = () => {
  const [list, setList] = useState([]);
  const [edit, setedit] = useState(null);
  const [news, setNews] = useState({
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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: news,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Enter Name")
        .min(2, "Too Short!")
        .max(20, "Too Long!"),
      surname: Yup.string()
        .required("Enter Surname")
        .min(2, "Too Short!")
        .max(20, "Too Long!"),
      roll_no: Yup.number()
        .typeError("Roll No must be a number")
        .required("Enter Roll No.")
        .positive("Must be positive")
        .integer("Must be an integer"),
      class: Yup.string().required("Enter class").max(5, "Too Long!"),

      gujrati: Yup.number()
        .typeError("Enter valid marks")
        .required("Enter Marks")
        .min(0, "Min 0")
        .max(100, "Max 100"),

      hindi: Yup.number()
        .typeError("Enter valid marks")
        .required("Enter Marks")
        .min(0, "Min 0")
        .max(100, "Max 100"),

      english: Yup.number()
        .typeError("Enter valid marks")
        .required("Enter Marks")
        .min(0, "Min 0")
        .max(100, "Max 100"),

      math: Yup.number()
        .typeError("Enter valid marks")
        .required("Enter Marks")
        .min(0, "Min 0")
        .max(100, "Max 100"),

      science: Yup.number()
        .typeError("Enter valid marks")
        .required("Enter Marks")
        .min(0, "Min 0")
        .max(100, "Max 100"),
    }),
    onSubmit: (values) => {
      console.log(values);

      if (edit != null) {
        const copydata = [...list];
        copydata[edit] = values;
        setList(copydata);
        setedit(null);
      } else {
        setList([...list, values]);
      }

      setNews({
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

      formik.resetForm();
    },
  });

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
    setNews({
      name: item.name,
      surname: item.surname,
      roll_no: item.roll_no,
      class: item.class,
      gujrati: item.gujrati,
      hindi: item.hindi,
      english: item.english,
      math: item.math,
      science: item.science,
    });
    setedit(index);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <table border="1" cellSpacing="6" bgcolor="white">
          <caption>
            <b>Result</b>
          </caption>
          <thead>
            <tr>
              <th rowSpan={2}>Name</th>
              <th rowSpan={2}>Surname</th>
              <th rowSpan={2}>Roll No.</th>
              <th rowSpan={2}>class</th>
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
                  name="name"
                  placeholder="ENTER NAME"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.errors.name ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.name}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="text"
                  name="surname"
                  placeholder="ENTER SURNAME"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                />
                {formik.touched.surname && formik.errors.surname ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.surname}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="number"
                  name="roll_no"
                  placeholder="ENTER ROLL NO"
                  value={formik.values.roll_no}
                  onChange={formik.handleChange}
                />
                {formik.touched.roll_no && formik.errors.roll_no ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.roll_no}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="text"
                  name="class"
                  placeholder="ENTER CLASS"
                  value={formik.values.class}
                  onChange={formik.handleChange}
                />
                {formik.touched.class && formik.errors.class ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.class}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="number"
                  name="gujrati"
                  placeholder="GUJRATI MARK"
                  value={formik.values.gujrati}
                  onChange={formik.handleChange}
                />
                {formik.touched.gujrati && formik.errors.gujrati ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.gujrati}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="number"
                  name="hindi"
                  placeholder="HINDI MARK"
                  value={formik.values.hindi}
                  onChange={formik.handleChange}
                />
                {formik.touched.hindi && formik.errors.hindi ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.hindi}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="number"
                  name="math"
                  placeholder="MATH MARK"
                  value={formik.values.math}
                  onChange={formik.handleChange}
                />
                {formik.touched.math && formik.errors.math ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.math}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="number"
                  name="english"
                  placeholder="ENGLISH MARK"
                  value={formik.values.english}
                  onChange={formik.handleChange}
                />
                {formik.touched.english && formik.errors.english ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.english}</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                <Input
                  type="number"
                  name="science"
                  placeholder="SCIENCE MARK"
                  value={formik.values.science}
                  onChange={formik.handleChange}
                />
                {formik.touched.science && formik.errors.science ? (
                  <p style={{margin:'0px',fontSize:'14px',color:'red'}}>{formik.errors.science}</p>
                ) : (
                  ""
                )}
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
      </form>

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

export default FormikCrudResult;
