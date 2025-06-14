import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const FormikTagExample = () => {

    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })
    const [list, setList] = useState([])

    const handleData = (values, { resetForm }) => {
        setList([...list, values])
        resetForm()
        // console.log(values);
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={ini}
                onSubmit={handleData}
            >
                <Form>
                    <Field type="" name="name"></Field>  <br /><br />
                    <Field name="surname"></Field> <br /><br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>

            <table border={1}>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default FormikTagExample