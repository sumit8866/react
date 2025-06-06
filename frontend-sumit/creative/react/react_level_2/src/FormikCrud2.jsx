import { Button, Input, List } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';

const FormikCrud2 = () => {
  const [list, setList] = useState([]);
  const [news, setnews] = useState({
    name: "",
    surname: "",
  });
  const [edit, setedit] = useState(null);

  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: news,
    validationSchema: Yup.object({
       name : Yup.string()
            .required("Enter name"),
            surname : Yup.string()
            .required("Enter surname")
    }),
    onSubmit: (values) => {
        if(edit != null){

            const copydata=[...list]
            copydata[edit] = values
            setList(copydata)
            setedit(null)
        setnews({
            name: "",
    surname: "",
        })

            
        }else{

            setList([...list, values]);
        }
        
        Formik.handleReset();
        
    },
  });

  const deletedata = (index) => {
    const copydata = [...list];
    copydata.splice(index, 1);
    setList(copydata);
  };

  const editdata = (item, index) => {
    setnews({
      name: item.name,
      surname: item.surname,
    });
    setedit(index);
  };
  return (
    <>
      <form onSubmit={Formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={Formik.values.name}
          onChange={Formik.handleChange}
        ></Input>{
          Formik.touched.name && Formik.errors.name ? <p>{Formik.errors.name}</p>: ''
        }
        <br />
        <br />
        <Input
          type="text"
          name="surname"
          value={Formik.values.surname}
          onChange={Formik.handleChange}
        ></Input>{
          Formik.touched.surname && Formik.errors.surname ? <p>{Formik.errors.surname}</p>: ''
        }
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
          <th>EDIT</th>
        </tr>
        {list.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>
              <Button onClick={() => deletedata(index)}>DELETE</Button>
            </td>
            <td>
              <Button onClick={() => editdata(item, index)}>EDIT</Button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default FormikCrud2;
