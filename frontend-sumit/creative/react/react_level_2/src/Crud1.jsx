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

const Crud1 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (name === "" || surname === "") {
      alert("Fill all details");
    } else {
      const newEntry = { name, surname };
      setList([...list, newEntry]);
      setName("");
      setSurname("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <Input
        placeholder="Enter Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>

     <Table border={3} sx={{textAlign:'center', marginTop:"59px" ,width:'80%'}}>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SURNAME</th>
        </tr>
        {
            list.map((my,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{my.name}</td>
                    <td>{my.surname}</td>
                </tr>
            ))
        }
     </Table>
    </div>
  );
};

export default Crud1;
