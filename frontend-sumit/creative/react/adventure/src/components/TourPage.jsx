// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Container,
//   Divider,
// } from "@mui/material";
// import Rating from "@mui/material/Rating";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// const TourPage = () => {
//   const { id } = useParams();
//   const [tour, setTour] = useState(null);
//   const key = "Ofokc8bYPo2MB7Ll";

//   useEffect(() => {
//     axios
//       .get("https://generateapi.onrender.com/api/detailstour", {
//         headers: { Authorization: key },
//       })
//       .then((res) => {
//         const found = res.data.Data.find((t) => t._id === id);
//         setTour(found);
//       });
//   }, [id]);

//   if (!tour) return <CircularProgress sx={{ mt: 10, mx: "auto", display: "block" }} />;

//   return (
//     <Container sx={{ mt: 5 }}>
//       <Typography variant="h3" fontWeight="bold" gutterBottom>
//         {tour.title}
//       </Typography>

//       <img
//         src={tour.image?.[0]}
//         alt={tour.title}
//         style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }}
//       />

//       <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
//         <Box display="flex" alignItems="center">
//           <LocationOnIcon sx={{ mr: 1 }} />
//           <Typography variant="subtitle1">{tour.location}</Typography>
//         </Box>
//         <Typography variant="h6" color="primary">
//           ${tour.price}
//         </Typography>
//       </Box>

//       <Box mt={2}>
//         <Rating value={tour.rating} readOnly />
//         <Typography variant="body2">{tour.ratingCount} reviews</Typography>
//       </Box>

//       <Divider sx={{ my: 3 }} />

//       <Typography variant="h6" gutterBottom>Description</Typography>
//       <Typography variant="body1" paragraph>
//         {tour.description}
//       </Typography>

//       <Typography variant="body2" color="text.secondary">
//         Duration: {tour.day} Days / {tour.night} Nights
//       </Typography>

//       {["day1_description", "day2_description", "day3_description", "day4_description", "day5_description"].map(
//         (dayKey, index) =>
//           tour[dayKey] && (
//             <Box key={dayKey} mt={3}>
//               <Typography variant="h6">Day {index + 1}</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {tour[dayKey]}
//               </Typography>
//             </Box>
//           )
//       )}
//     </Container>
//   );
// };

// export default TourPage;
