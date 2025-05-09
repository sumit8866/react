
import React, { useState } from 'react'

const Stateresult = () => {
    const[Student , setname]= useState([
        {
            name:"sumit",
            s1:90,
            s2:88,
            s3:75
        },
        {
            name:"rahul",
            s1:30,
            s2:80,
            s3:55
        },
        {
            name:"abhi",
            s1:50,
            s2:48,
            s3:75
        }
    ])
    
    function total(item){
        return item.s1 + item.s2 + item.s3
    }
    function average(item){
        if (item.s1 >= 33 && item.s2 >= 33 && item.s3 >= 33){
        return (item.s1 + item.s2 + item.s3) / 3
        }
        else{
            return 0
        }
    }
    
    function max(item){
        return Math.max(item.s1 , item.s2 , item.s3)
    }
    function min(item){
        return Math.min(item.s1 , item.s2 , item.s3)
    }

    function grade(item){
        let s1 = item.s1
        let s2 = item.s2
        let s3 = item.s3
        if (s1 >= 33 && s2 >= 33 && s3 >= 33){
            return "pass"
        }else{
            return "fail"
        }
    }



  return (
<>

    <div>
       <table border="1" cellpadding='10'>
                <tr>
                    <th>name</th>
                    <th>s1</th>
                    <th>s2</th>
                    <th>s3</th>
                    <th>total</th>
                    <th>average</th>
                    <th>max</th>
                    <th>min</th>
                    <th>grade</th>

                </tr>
                   {
                    Student.map((item ,index) =>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.s1}</td>
                            <td>{item.s2}</td>
                            <td>{item.s3}</td>
                            <td>{total(item) +" out of 300"}</td>
                            <td>{average(item).toFixed(2)}</td>
                            <td>{max(item)}</td>
                            <td>{min(item)}</td> 
                            <td>{grade(item)}</td>
                        </tr>
                    ))
                }
                    </table>
                </div>
</>
  )
}

export default Stateresult


