import React from 'react' 
import axios from 'axios'

const Apiget = () => {
    const [data, setData] = React.useState([])
    
  axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      }); 
  return (
    <>

         <h1>API GET</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th> 
            {/* <th>Age</th>  */}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
              {/* <td>{user.email}</td>
              <td>{user.age}</td> */}
            </tr>
          ))}
        </tbody>
      </table>


{/* 7RuqHRMWfNOulyNj */}
    </>
  )
}

export default Apiget