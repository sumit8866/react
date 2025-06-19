import React, { useContext } from 'react'
import {FormContexts} from './FormContext'

const FormCotext1 = () => {
    const {data} =useContext(FormContexts);
  return (
    <>

    <table border={2} cellPadding={10} style={{textAlign:'center'}}>
        <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Age</th>
        </tr>
{
    data.map((item, index) => (
        <tr>
            <td>{item.Name}</td>
            <td>{item.Number}</td>
            <td>{item.Age}</td>
        </tr>
    ))
}
      </table>
    
        
    
    </>
  )
}

export default FormCotext1