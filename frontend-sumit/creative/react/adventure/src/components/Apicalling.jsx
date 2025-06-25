import { Box, Button, Rating, Typography } from "@mui/material";
import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Multiphoto = () => {
  const key = "Ofokc8bYPo2MB7Ll";
  const [data, setData] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [dayCount, setDayCount] = useState(0);

  const initialValues = {
    title: "",
    price: "",
    rating: "0",
    ratingCount: "0",
    description: "",
    day: "",
    night: "",
    location: "",
    image: [],
    day1: "",
    day2: "",
    day3: "",
    day4: "",
    day5: "",
    day1_description: "",
    day2_description: "",
    day3_description: "",
    day4_description: "",
    day5_description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    rating: Yup.number().min(0).max(5),
    ratingCount: Yup.number().min(0),
    description: Yup.string().required("Required"),
    day: Yup.number().required("Required"),
    night: Yup.number().required("Required"),
    location: Yup.string().required("Required"),
    image: Yup.array().min(1, "At least one image is required"),
  });

  const getdata = () => {
    axios
      .get("https://generateapi.onrender.com/api/detailstour", {
        headers: { Authorization: key },
      })
      .then((res) => {
        setData(res.data.Data);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    getdata();
  }, []);

  // useEffect(() => {
    
  //   return () => {
  //     previews.forEach((url) => URL.revokeObjectURL(url));
  //   };
  // }, [previews]);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("rating", values.rating);
    formData.append("ratingCount", values.ratingCount);
    formData.append("description", values.description);
    formData.append("day", values.day);
    formData.append("night", values.night);
    formData.append("location", values.location);

    for (let i = 1; i <= 5; i++) {
      formData.append(`day${i}`, values[`day${i}`] || "");
      formData.append(`day${i}_description`, values[`day${i}_description`] || "");
    }

    values.image.forEach((file) => {
      formData.append("image", file);
    });

    axios
      .post("https://generateapi.onrender.com/api/detailstour", formData, {
        headers: {
          Authorization: key,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        resetForm();
        setPreviews([]);
        setDayCount(0);
        getdata();
      })
      .catch((error) => console.error("Upload error:", error));
  };

  const deleteData = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/detailstour/${id}`, {
        headers: { Authorization: key },
      })
      .then(() => getdata())
      .catch((error) => console.error("Delete error:", error));
  };

  return (
    <>
      <Typography variant="h4" mb={2}>
        Upload Tour
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form encType="multipart/form-data">
            <Box display="flex" flexDirection="column" gap={2}>
              <Field name="title" placeholder="Tour Title" type="text" />
              <ErrorMessage name="title" component="div" style={{ color: "red" }} />

              <Field name="price" placeholder="Tour Price" type="number" />
              <ErrorMessage name="price" component="div" style={{ color: "red" }} />

              <Field name="rating" placeholder="Tour Rating" type="number" />
              <ErrorMessage name="rating" component="div" style={{ color: "red" }} />

              <Field name="ratingCount" placeholder="Rating Count" type="number" />
              <ErrorMessage name="ratingCount" component="div" style={{ color: "red" }} />

              <Field name="description" placeholder="Description" type="text" />
              <ErrorMessage name="description" component="div" style={{ color: "red" }} />

              <Field name="day">
                {({ field, form }) => (
                  <input
                    {...field}
                    type="number"
                    placeholder="Number of Days"
                    onChange={(e) => {
                      const value = Math.min(Math.max(Number(e.target.value), 0), 5);
                      form.setFieldValue("day", value);
                      setDayCount(value);
                      for (let i = value + 1; i <= 5; i++) {
                        form.setFieldValue(`day${i}`, "");
                        form.setFieldValue(`day${i}_description`, "");
                      }
                    }}
                  />
                )}
              </Field>
              <ErrorMessage name="day" component="div" style={{ color: "red" }} />

              <Field name="night" placeholder="Number of Nights" type="number" />
              <ErrorMessage name="night" component="div" style={{ color: "red" }} />

              {[...Array(dayCount)].map((_, i) => (
                <Box key={i}>
                  <Field name={`day${i + 1}`} placeholder={`Day ${i + 1} Title`} type="text" />
                  <ErrorMessage name={`day${i + 1}`} component="div" style={{ color: "red" }} />
                  <Field
                    name={`day${i + 1}_description`}
                    placeholder={`Day ${i + 1} Description`}
                    type="text"
                  />
                  <ErrorMessage
                    name={`day${i + 1}_description`}
                    component="div"
                    style={{ color: "red" }}
                  />
                </Box>
              ))}

              <Field name="location" placeholder="Location" type="text" />
              <ErrorMessage name="location" component="div" style={{ color: "red" }} />

              <Typography>Select Images:</Typography>
              <input
                name="image"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.currentTarget.files);
                  setFieldValue("image", files);
                  setPreviews(files.map((f) => URL.createObjectURL(f)));
                }}
              />
              <ErrorMessage name="image" component="div" style={{ color: "red" }} />

              <Box display="flex" gap={1} flexWrap="wrap">
                {previews.map((src, i) => (
                  <img key={i} src={src} alt="preview" width={100} />
                ))}
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, width: "80%", margin: "auto" }}>
        {data.map((item) => (
          <Box
            key={item._id}
            border="1px solid #ccc"
            borderRadius={2}
            textAlign="center"
            width={220}
          >
            {item.image.length > 0 && (
              <img
                src={item.image[0]}
                alt="Tour"
                width="100%"
                height="230px"
                style={{ marginBottom: "8px", objectFit: "cover" }}
              />
            )}
            <Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} px={1}>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  ${item.price}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5} mb={1} px={1}>
                <Rating size="small" value={item.rating} readOnly />
                <Typography variant="body2" fontWeight={300}>
                  {item.ratingCount} Rating
                </Typography>
              </Box>
              <Typography variant="body2" color="gray" mb={1} px={2} textAlign="start" height={'100px'} whiteSpace={'wrap'} overflow={'hidden'}  textOverflow={'ellipsis'}>
                {item.description}
              </Typography>
              <Typography variant="body2" color="gray" mb={1} p={2} textAlign="start">
                {item.day} Days / {item.night} Nights
              </Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                  <LocationOnIcon fontSize="small" color="action" />
                  <Typography variant="body2">{item.location}</Typography>
                </Box>
                <Button size="small" variant="contained" color="success">
                  Discover
                </Button>
              </Box>
            </Box>
            <Button
              onClick={() => deleteData(item._id)}
              variant="outlined"
              color="error"
              size="small"
            >
              Delete
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Multiphoto;
