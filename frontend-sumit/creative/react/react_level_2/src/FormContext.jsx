import { Button } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { createContext, useState } from 'react'
import FormCotext1 from './FormCotext1';

export const FormContexts = createContext();
const FormContext = () => {
    const [init, setinit] = useState({
        Name: '',
        Number: '',
        Age: ''
    })
    const [data , setData] = useState([]);

    const Submitdata = (values,{resetForm}) => {
        console.log(values)
        setData([...data, values])
        resetForm();
    }

  return (
    <>
    <FormContexts.Provider value={{data}}>

    <Formik enableReinitialize initialValues={init} onSubmit={Submitdata}>
        <Form>
           <Field type='text'  name='Name' placeholder='Enter Name'></Field><br /><br />
           <Field type='Number' name='Number' placeholder="Enter Number" ></Field><br /><br />
           <Field type='number' name='Age' placeholder='Enter Age'></Field><br /><br />
           <Button type='submit'>Submit</Button>
        </Form>
    </Formik>
 <FormCotext1></FormCotext1>
    </FormContexts.Provider>
  
    </>
  )
}

export default FormContext