import React from 'react'

// const Props = ({demo}) => {
//   return (
   
//         <div>
//             <h1>this is my page</h1>
//             <h2>{demo.name}</h2>
//             <h2>{demo.age}</h2>
//         </div>
//   )}
// export default Props

// const Props = ({demo}) => (
     
//           <div>
//               <h1>this is my page</h1>
//               <h2>{demo[0].name}</h2>
//               <h2>{demo[0].age}</h2>
//               <h2>{demo[1].name}</h2>
//               <h2>{demo[1].age}</h2>
//               <h2>{demo[2].name}</h2>
//               <h2>{demo[2].age}</h2>
//           </div>
//     )
//   export default Props


const Props = ({demo}) => {
    const getid = (index) => {
        return index + 1
    }

     return(
    <div>
            <table border="1">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
                {
                    demo.map((item ,index) =>(
                        <tr>
                            <td>{getid(index)}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            
                        </tr>
                    ))
                }
                    
              </table>
    </div>
     )
      }


export default Props