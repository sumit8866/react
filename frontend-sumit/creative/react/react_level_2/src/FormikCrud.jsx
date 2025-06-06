import { Button, Input, List } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const FormikCrud = () => {
  const [list, setList] = useState([]);

  const Formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
    },
    onSubmit: (values) => {
      setList([...list, values]);

      Formik.handleReset();
    },
  });

  const deletedata =(index)=>{
    const copydata = [...list]
    copydata.splice(index ,1)
    setList(copydata)
  }
  return (
    <>
      <form onSubmit={Formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={Formik.values.name}
          onChange={Formik.handleChange}
        ></Input>{" "}
        <br />
        <br />
        <Input
          type="text"
          name="surname"
          value={Formik.values.surname}
          onChange={Formik.handleChange}
        ></Input>{" "}
        <br />
        <br />
        <Input type="Submit"></Input>
        <br />
        <br />
      </form>

      <table>
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>DELETE</th>
        </tr>
        {list.map((item ,index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td><Button onClick={()=>deletedata(index)}>DELETE</Button></td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default FormikCrud;
