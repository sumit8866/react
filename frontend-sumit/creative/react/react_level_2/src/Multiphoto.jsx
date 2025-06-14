import { Box } from "@mui/material";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";

const Multiphoto = () => {
  const key = "NpEmbqudh5Z1UX7q";

  const [init, setInit] = useState({
    name: "",
    image: [],
  });

  const [data, setData] = useState([]);

  const fetchImages = () => {
    axios
      .get("https://generateapi.onrender.com/api/multiimg", {
        headers: {
          Authorization: key,
        },
      })
      .then((res) => {
        setData(res.data.Data);
        setInit({ name: "", image: [] });
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("name", values.name);

    values.image.forEach((file) => {
      formData.append("image", file);
    });

    axios
      .post("https://generateapi.onrender.com/api/multiimg", formData, {
        headers: {
          Authorization: key,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Upload success", res.data);
        resetForm();
        fetchImages();
      })
      .catch((error) => console.error("Upload error:", error));
  };

  const deleteData = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/multiimg/${id}`, {
        headers: {
          Authorization: key,
        },
      })
      .then((res) => {
        console.log("Deleted", res.data);
        fetchImages();
      })
      .catch((error) => console.error("Delete error:", error));
  };

  return (
    <>
      <Formik enableReinitialize initialValues={init} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form encType="multipart/form-data">
            <label htmlFor="name">Name:</label>
            <Field id="name" name="name" placeholder="Enter Name" type="text" />
            <br /><br />

            <label htmlFor="image">Select Images:</label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              multiple
              onChange={(e) =>
                setFieldValue("image", Array.from(e.currentTarget.files))
              }
            />
            <br /><br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 4 }}>
        {data.map((item, index) => (
          <Box key={index} display="flex" flexDirection="column" alignItems="center">
            <img src={item.image} alt="Uploaded" width="200" />
            <br />
            <button onClick={() => deleteData(item._id)}>DELETE</button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Multiphoto;
