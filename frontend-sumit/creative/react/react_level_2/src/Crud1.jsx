import React, { useState } from "react";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Password } from "@mui/icons-material";

const Crud1 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (
      name === "" ||
      surname === "" ||
      number === "" ||
      password === "" ||
      email === ""
    ) {
      alert("Fill all details");
    } else {
      const newEntry = { name, surname, number, password, email };
      setList([...list, newEntry]);
      setName("");
      setSurname("");
      setNumber("");
      setpassword("");
      setEmail("");
    }
  };

  const deletedata =(index)=>{

    const copydata = [...list]

    copydata.splice(index,1);

    setList(copydata);

  }
  const editdata =(index)=>{}

  return (
    <div style={{ padding: "20px" }}>
      <Input
        placeholder="Enter Name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <Input
        placeholder="Enter Surname"
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <Input
        placeholder="Enter Age"
        type="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <Input
        placeholder="Enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "10px" }}
      ></Input>
      <br />
      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        style={{ marginBottom: "10px" }}
      ></Input>
      <br />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>

      <Table
        border={3}
        sx={{ textAlign: "center", marginTop: "59px", width: "80%" }}
      >
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>SURNAME</th>
          <th>AGE</th>
          <th>E-MAIL</th>
          <th>PASSWORD</th>
          <th>EDIT AND DELETE</th>
        </tr>
        {list.map((my, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{my.name}</td>
            <td>{my.surname}</td>
            <td>{my.number}</td>
            <td>{my.email}</td>
            <td>{my.password}</td>
            <td><Button onClick={()=> deletedata(index)}>DELETE</Button></td>
            <td><Button onClick={()=> editdata(index)}>EDIT</Button></td>

          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Crud1;
