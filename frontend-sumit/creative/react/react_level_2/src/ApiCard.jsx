import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";

const ApiCard = () => {
  const token = "hUBNjE377slJsszJ";
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [edit, setEdit] = useState(null);

  const [ini, setIni] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    description: "",
    profileimg: "",
  });

  const getdata = () => {
    axios
      .get("https://generateapi.onrender.com/api/carddetails", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data.Data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      formData.append(key, val);
    });

    const config = {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    };

    if (edit) {
      // Update existing entry
      axios
        .patch(
          `https://generateapi.onrender.com/api/carddetails/${edit}`,
          formData,
          config
        )
        .then((res) => {
          console.log("Updated:", res);
          resetForm();
          setFile(null);
          setEdit(null);
          setIni({
            name: "",
            surname: "",
            email: "",
            number: "",
            description: "",
            profileimg: "",
          });
          getdata();
        })
        .catch((error) => {
          console.error("Error updating the data!", error);
        });
    } else {
      // Create new entry
      axios
        .post(
          "https://generateapi.onrender.com/api/carddetails",
          formData,
          config
        )
        .then((res) => {
          console.log("Created:", res);
          resetForm();
          setFile(null);
          getdata();
        })
        .catch((error) => {
          console.error("Error creating the data!", error);
        });
    }
  };

  const deleteData = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/carddetails/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("Deleted:", res.data);
        getdata();
      })
      .catch((error) => {
        console.error("Error deleting the data!", error);
      });
  };

  const Updatedata = (item, id) => {
    setIni({
      name: item.name,
      surname: item.surname,
      email: item.email,
      number: item.number,
      description: item.description,
      profileimg: item.profileimg,
    });
    setFile(item.profileimg);
    setEdit(id);
  };

  return (
    <>
      <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <Box display="flex" flexDirection="column" gap={2} width="300px" marginBottom={4}>
              <Field name="name" as={TextField} label="Enter your name" fullWidth />
              <Field name="surname" as={TextField} label="Enter your surname" fullWidth />
              <Field name="email" as={TextField} type="email" label="Enter your email" fullWidth />
              <Field name="number" as={TextField} type="text" label="Enter your mobile number" fullWidth />
              <Field name="description" as={TextField} label="Enter your address" fullWidth />

              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const selectedFile = event.currentTarget.files[0];
                  if (!selectedFile) return;
                  setFile(URL.createObjectURL(selectedFile));
                  setFieldValue("profileimg", selectedFile);
                }}
              />

              {file && (
                <Box mt={2}>
                  <img src={file} alt="Preview" width="200" />
                </Box>
              )}

              <Button variant="contained" type="submit" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <hr />

      <Box width="100%" display="flex" flexWrap="wrap" gap={2}>
        {data.map((item) => (
          <Box
            key={item._id}
            width="30%"
            border="1px solid #ccc"
            borderRadius="5px"
            padding="10px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <img
              src={item.profileimg}
              alt={`${item.name} ${item.surname}`}
              width="100%"
              height="250"
              style={{ objectFit: "cover" }}
            />
            <strong>{item.name} {item.surname}</strong>
            <p>{item.email}</p>
            <p>{item.number}</p>
            <p>{item.description}</p>

<Box display={'flex'} justifyContent={'space-around'}>
            <Button variant="outlined" color="error" onClick={() => deleteData(item._id)}>
              Delete
            </Button>
            <Button variant="outlined" color="primary" onClick={() => Updatedata(item, item._id)}>
              Update
            </Button>
</Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ApiCard;
