// import React, { useState } from "react";
// import axios from "axios";
// import { Field, Form, Formik } from "formik";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   Box,
// } from "@mui/material";

// const WeatherApi = () => {
//   const [data, setData] = useState([]);
//   const ini = {
//     city: "surat",
//     day: "3",
//   };
//   const apiKey = "7ab5239082cc47dcbae50635251306";

//   const getWeather = (values) => {
//     axios
//       .get("https://api.weatherapi.com/v1/forecast.json", {
//         params: {
//           key: apiKey,
//           q: values.city,
//           days: values.day,
//           aqi: "yes",
//         },
//       })
//       .then((res) => {
//         setData(res.data.forecast.forecastday);
//         console.log(res.data.forecast.forecastday);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data!", error);
//       });
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Weather Forecast
//       </Typography>

//       <Formik initialValues={ini} onSubmit={getWeather}>
//         {({ handleChange, values }) => (
//           <Form>
//             <Box
//               display="flex"
//               flexDirection="column"
//               gap={2}
//               alignItems="stretch"
//               mb={3}
//             >
//               <TextField
//                 name="city"
//                 label="City"
//                 value={values.city}
//                 onChange={handleChange}
//               />
//               <TextField
//                 name="day"
//                 label="Days"
//                 type="number"
//                 value={values.day}
//                 onChange={handleChange}
//               />
//               <Button type="submit" fullWidth>
//                 Get Forecast
//               </Button>
//             </Box>
//           </Form>
//         )}
//       </Formik>

//       <Box display="flex" flexDirection="column" gap={2}>
//         {data.map((item, index) => (
//           <Card key={index} variant="outlined">
//             <CardContent>
//               <Typography variant="h6">{item.date}</Typography>
//               <Typography>🌡 Avg Temp: {item.day.avgtemp_c}°C</Typography>
//               <Typography>🌤 Condition: {item.day.condition.text}</Typography>
//               <Typography> sunset: {item.astro.sunset}</Typography>
//               <Typography> sonrise: {item.astro.sunrise}</Typography>
//               <img src={item.day.condition.icon} alt="weather icon" />
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default WeatherApi;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

const WeatherApi = () => {
  const [data, setData] = useState([]);
 const [loction , setLocation] = useState("");
  const ini = { city: "", day: "" };
  const apiKey = "7ab5239082cc47dcbae50635251306 ";

  const getWeather = (values) => {
    axios
      .get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
          key: apiKey,
          q: values.city,
          days: values.day,
          aqi: "yes",
        },
      })
      .then((res) => {
          console.log(res.data.location.name);
          console.log(res.data.forecast.forecastday);
          setLocation(res.data.location.name);
        setData(res.data.forecast.forecastday);

      })
      .catch((error) => {
        console.error( error);
      });
  };

  useEffect(() => {
    getWeather({city: "surat", day: "3"  });
  }, []);
  
  return (
    <div className="weather-container">
      <h2>Weather Data</h2>
      
      <Formik initialValues={ini} onSubmit={getWeather}>
        <Form className="weather-form">
          <Field name="city" type='text' placeholder="Enter city" className="input" />
          <Field
            name="day"
            type="number"
            placeholder="Enter days"
            className="input"
          />
          <button type="submit" className="btn">
            Get Data
          </button>
        </Form>
      </Formik>

        <h2>{loction}</h2>
      <div className="forecast-container">
        {data.map((item, index) => (
            <>
            
          <div className="forecast-card">
            <h3>{item.date}</h3>
            <img src={item.day.condition.icon} alt="weather icon" />
            <p>
              <strong>{item.day.avgtemp_c}°C</strong>
            </p>
            <p>{item.day.condition.text}</p>
            <p>Sunrise: {item.astro.sunrise}</p>
            <p>Sunset: {item.astro.sunset}</p>
            <p>Humidity: {item.day.avghumidity}%</p>
            <p>Wind Speed: {item.day.maxwind_kph} kph</p>
            <p>avg temp: {item.day.avgtemp_c}</p>
            <p>max temp: {item.day.maxtemp_c}</p>
            <p>min temp: {item.day.mintemp_c}</p>
            <p>today rain chance: {item.day.daily_chance_of_rain}%</p>
          </div>
        </>
        ))}
      </div>
    </div>
);
};

export default WeatherApi;
