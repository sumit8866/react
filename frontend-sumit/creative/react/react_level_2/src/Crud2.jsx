// import { Button, Input, Table } from "@mui/material";
// import React, { useState } from "react";

// const Crud2 = () => {
//   const [name, setname] = useState("");
//   const [surname, setsurname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [list, setlist] = useState([]);
//   const [edit, setedit] = useState(null);

//   const submit = () => {
//     const adddata = { name, surname, age, email, password, list };

//     if (edit !== null) {
//       let copydata = [...list];
//       copydata[edit] = adddata;
//       setlist(copydata);
//       setedit(null);
//     } else {
//       setlist([...list, adddata]);
//     }
//     setname("");
//     setsurname("");
//     setage("");
//     setpassword("");
//     setemail("");
//   };

//   const deletedata = (index) => {
//     const copydata = [...list];
//     copydata.splice(index, 1);
//     setlist(copydata);
//   };

//   const editdata = (index, item) => {
//     setname(item.name);
//     setsurname(item.surname);
//     setage(item.age);
//     setpassword(item.password);
//     setemail(item.email);
//     setedit(index)
//   };
//   return (
//     <>
//       <Input
//         type="text"
//         value={name}
//         name=""
//         id=""
//         onChange={(e) => setname(e.target.value)}
//       />
//       <br />
//       <br />
//       <Input
//         type="text"
//         value={surname}
//         name=""
//         id=""
//         onChange={(e) => setsurname(e.target.value)}
//       />
//       <br />
//       <br />
//       <Input
//         type="number"
//         value={age}
//         name=""
//         id=""
//         onChange={(e) => setage(e.target.value)}
//       />
//       <br />
//       <br />
//       <Input
//         type="email"
//         value={email}
//         name=""
//         id=""
//         onChange={(e) => setemail(e.target.value)}
//       />
//       <br />
//       <br />
//       <Input
//         type="password"
//         value={password}
//         name=""
//         id=""
//         onChange={(e) => setpassword(e.target.value)}
//       />
//       <br />
//       <br />

//       <Button onClick={submit}>SUBMIT</Button>

//       <Table border={3} sx={{ textAlign: "center" }}>
//         <tr>
//           <th>ID</th>
//           <th>NAME</th>
//           <th>SURNAME</th>
//           <th>AGE</th>
//           <th>E-MAIL</th>
//           <th>PASSWORD</th>
//           <th>EDIT AND DELETE</th>
//         </tr>
//         {list.map((item, index) => (
//           <tr>
//             <td>{index + 1}</td>
//             <td>{item.name}</td>
//             <td>{item.surname}</td>
//             <td>{item.age}</td>
//             <td>{item.email}</td>
//             <td>{item.password}</td>
//             <td>
//               {" "}
//               <Button onClick={() => deletedata(index)}>DELETE</Button>
//             </td>
//             <td>
//               {" "}
//               <Button onClick={() => editdata(index, item)}>EDIT</Button>
//             </td>
//           </tr>
//         ))}
//       </Table>
//     </>
//   );
// };

// export default Crud2;

import { Button, Input, Table } from "@mui/material";
import React, { useState } from "react";

const Crud2 = () => {
  const [name, setname] = useState("");
  const [surname, setsurname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [list, setlist] = useState([]);
  const [edit, setedit] = useState(null);

  const submit = () => {
    if ((name && surname && age && email && password) === "") {
      alert("fill all details");
    } else {
      const adddata = { name, surname, age, email, password };

      if (edit !== null) {
        const copydata = [...list];
        copydata[edit] = adddata;
        setlist(copydata);
        setedit(null);
      } else {
        setlist([...list, adddata]);
      }

      setname("");
      setsurname("");
      setage("");
      setpassword("");
      setemail("");
    }
  };
  const deletedata = (index) => {
    const copydata = [...list];
    copydata.splice(index, 1);
    setlist(copydata);
    if (edit === index) {
      setedit(null); // reset if deleted item is being edited
    }
  };

  const editdata = (index, item) => {
    setname(item.name);
    setsurname(item.surname);
    setage(item.age);
    setpassword(item.password);
    setemail(item.email);
    setedit(index);
  };

  return (
    <>
      <form style={{ textAlign: "center", width: "100%" }}>
        <Input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <br />
        <Input
          className="input"
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setsurname(e.target.value)}
        />
        <br />
        <br />
        <Input
          className="input"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <br />
        <br />
        <Input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        <Input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <br />

        <Button variant="contained" color="primary" onClick={submit}>
          {edit !== null ? "UPDATE" : "SUBMIT"}
        </Button>

        <br />
        <br />
      </form>

      <Table sx={{ textAlign: "center" }} border={3}>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Surname</td>
          <td>Age</td>
          <td>Email</td>
          <td>Password</td>
          <td>Actions</td>
        </tr>

        {list.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>
              <Button
                variant="outlined"
                color="error"
                onClick={() => deletedata(index)}
              >
                DELETE
              </Button>{" "}
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => editdata(index, item)}
              >
                EDIT
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default Crud2;
