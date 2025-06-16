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

  const getdata = () => {
    axios
      .get("https://generateapi.onrender.com/api/multiimg", {
        headers: {
          Authorization: key,
        },
      })
      .then((res) => {
        console.log(res.data.Data.image);
        setData(res.data.Data);
        setInit({ name: "", image: [] });
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  useEffect(() => {
    getdata();
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
        getdata();
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
        getdata();
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
            <br />
            <br />

            <label htmlFor="image">Select Images:</label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = e.currentTarget.files;
                const fileArray = [];
                fileArray.push(...files);

                console.log(fileArray);
                setFieldValue("image", fileArray);
              }}
            />
            <br />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 4 }}>
        {data.map((item, index) => (
          <>
            <Box key={index} display="flex" alignItems="center">
              {item.image.map((img, idx) => (
                // console.log(img)
                <Box display={"flex"} flexDirection={"row"}>
                  <img key={idx} src={img} alt="Uploaded" width="200px" />
                </Box>
              ))}
              <br />
              <br />
            </Box>
            <button onClick={() => deleteData(item._id)}>DELETE</button>
          </>
        ))}
      </Box>
    </>
  );
};

export default Multiphoto;
