import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'

const Files = () => {

    const token ='mBVPOqUIsfxr9Zzg'

    const ini = {
        file: ''
    }
    const handleSubmit = (values) => {
    axios
      .post("https://generateapi.onrender.com/api/uploadfile", values, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("There was an error uploading the file!", error);
      });
    }
  return (
    <>
    <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
            <Form>
                <Field type='file' name='file'></Field>
                <button type='submit'>esfsdfds</button>
            </Form>
</Formik>

    </>
  )
}

export default Files