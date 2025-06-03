import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";

import React, { useState } from "react";
import logo from "./logo.png";
import banner from "./banner1.jpg";
import logo2 from "./clapperboard.gif";
import Movie_1 from "./Movie_1.jpg";
import Movie_2 from "./Movie_2.jpg";
import Movie_3 from "./Movie_3.jpg";
import Movie_4 from "./banner-1.jpg";
import photo_1 from "./photo-1.jpg";
import photo_2 from "./photo-2.jpg";
import gallery_bg from "./gallery_bg.png";
import gallery_1 from "./gallery_1.jpg";
import gallery_2 from "./gallery_2.jpg";
import gallery_3 from "./gallery_3.jpg";
import gallery_4 from "./gallery_4.jpg";
import gallery_5 from "./gallery_5.jpg";
import offer_bg from "./offer_bg.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Transform } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import seat from './seat_map1.jpg'
import Header1 from "./Header1";
const Selectt = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

    const icons = [
      { icon: <FaTwitter />, label: "Twitter", link: "#" },
      { icon: <FaFacebookF />, label: "Facebook", link: "#" },
      { icon: <FaPinterestP />, label: "Pinterest", link: "#" },
      { icon: <FaInstagram />, label: "Instagram", link: "#" },
    ];

  return (
    <>
      <Header1></Header1>
      <Box width={"80%"} margin={"auto"} py={5}>
        <Box display={"flex"} justifyContent={"space-between"} flexDirection={{xs:'column' }}>
          <Typography variant="p">
            Home / <span style={{ color: "orange" }}>Cart Movies</span>
          </Typography>

          <Box display={'flex'} justifyContent={'end'}>
            <Button
              variant="contained"
              size="small"
              sx={{
                marginRight: "10px",
                backgroundColor: "#f57c00",
                color: "#fff",
                fontSize: "0.75rem",
                borderRadius: "0px",
                px: 2,
                py: 0.5,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#f57c00",
                },
              }}
            >
              LOG IN
            </Button>

           
          </Box>
        </Box>

       <Box width={"80%"} margin={"auto"} py={5}>
  <Typography variant="p">
            Home / <span style={{ color: "gary" }}>Cart Movies</span>
          </Typography>

        </Box>
<Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        py: 4,
        gap: 4,
      }}
    >
      {/* Left Side: Seat Map */}
      
<Box width={{xs:'100%',md:'60%'}} margin={'auto'}>
    <img src={seat} alt="" width={'100%'}/>
</Box>
      {/* Right Side: Booking Panel */}
      <Box width={{xs:'100%',md:'40%'}} margin={'auto'}>
        <Card>
          <CardContent>
            <Typography variant="h6" mb={2}>
              BOOKING INFORMATION
            </Typography>
            <hr />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Seat</Typography>
              <Typography>H19</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Type</Typography>
              <Select size="small" defaultValue="Adults">
                <MenuItem value="Adults">Adults</MenuItem>
                <MenuItem value="Children">Children</MenuItem>
              </Select>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Price</Typography>
              <Typography>$15.00</Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Tax</Typography>
              <Typography>$1.50</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">$16.50</Typography>
            </Box>

            <Button
              variant="contained"
              
               sx={{
                width:'100%',
                backgroundColor: "#f57c00",
                color: "#fff",
                fontSize: "0.75rem",
                borderRadius: "0px",
                px: 2,
                py: 0.5,
                mt:2,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#f57c00",
                },
              }}
            >
              Proceed to checkout
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
        <Box>

        </Box>
      </Box>


 <Box
        sx={{ width: "100%", backgroundColor: "#000", py: 4, color: "#fff" }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          width="80%"
          margin="auto"
        >
          <Box
            width={{ xs: "100%", md: "50%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={2}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: "40%", sm: "30%" },
                height: "auto",
                maxHeight: 80,
              }}
            />
          </Box>

          <Box
            display="flex"
            width={{ xs: "100%", md: "50%" }}
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="body2"
              color="gray"
              fontWeight={600}
              padding={2}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transition: "all 0.3s ease",
                  color: "#f57c00",
                },
              }}
            >
              help / Privacy Policy
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {icons.map((item, index) => (
                <IconButton
                  key={index}
                  aria-label={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f57c00",
                      transform: "translateY(5px)",
                      transition: "all 0.3s ease",
                      color: "#fff",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>


   <Box sx={{ backgroundColor: '#000', color: '#fff', py: 6, px: { xs: 2, md: 8 },}}>
      <Box
        sx={{
          display: 'flex',
           width:'90%',
           margin:'auto',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 4,
        }}
      >
        {/* CTA */}
        <Box sx={{ flex: '200px' }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Buy movie tickets easily with Aovis system nationwide
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#f57c00',
              color: '#fff',
              borderRadius:'0px',
              '&:hover': { backgroundColor: '#fff',
                color:'#f57c00'
               },
            }}
          >
            Get Your Ticket
          </Button>
        </Box>

        {/* Movies */}
        <Box display={'flex'} flex={'300px'}>
        <Box sx={{ flex: '150px' }}>
          <Typography variant="h6" sx={{ color: '#ec682c' }}>
            Movies
          </Typography>
          {['Action', 'Adventure', 'Animation', 'Comedy', 'Crime'].map((genre) => (
            <Typography key={genre} variant="body2" sx={{ mt: 1 }}>
              {genre}
            </Typography>
          ))}
        </Box>

        {/* Links */}
        <Box sx={{ flex: '150px' }}>
          <Typography variant="h6" sx={{ color: '#ec682c' }}>
            Links
          </Typography>
          {['About', 'My account', 'News', 'Latest Events', 'Contact'].map((link) => (
            <Typography key={link} variant="body2" sx={{ mt: 1 }}>
              {link}
            </Typography>
          ))}
        </Box>
        </Box>

        {/* Newsletter */}
        <Box sx={{ flex: '300px' }}>
          <Typography variant="h6" sx={{ color: '#ec682c' }}>
            Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Subscribe to Leitmotif newsletter this very day.
          </Typography>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField
              placeholder="Email Address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1,
              }}
            />
            <IconButton
              sx={{
                ml: 1,
                backgroundColor: '#ec682c',
                color: '#fff',
                '&:hover': { backgroundColor: '#e05d21' },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
          <FormControlLabel
            control={<Checkbox sx={{ color: '#ec682c' }} />}
            label="I agree to all terms and policies of the company"
            sx={{ mt: 2 }}
          />
        </Box>
      </Box>
    </Box>
      
       


    </>
  );
};

export default Selectt;






// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   Select,
//   MenuItem,
// } from '@mui/material';

// const seatMap = {
//   A: [1, 1, 0, 1, 1, 1,1],
//   B: [1, 0, 0, 1, 1, 1,1],
//   C: [1, 1, 1, 1, 1, 1],
// };

// const getSeatColor = (status, isSelected) => {
//   if (isSelected) return '#90ee90'; // Selected
//   if (status === 0) return '#f08080'; // Booked
//   return '#ffffff'; // Available
// };

// export default function SeatSelectionFlex() {
//   const [selectedSeat, setSelectedSeat] = useState(null);

//   const handleSeatClick = (row, index) => {
//     if (seatMap[row][index] === 0) return; // Do nothing if booked
//     setSelectedSeat(`${row}${index + 1}`);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: { xs: 'column', md: 'row' },
//         justifyContent: 'space-between',
//         p: 4,
//         gap: 4,
//       }}
//     >
//       {/* Seat Layout */}
//       <Box sx={{ flex: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           STAGE
//         </Typography>

//         <Box sx={{ border: '2px solid gray', p: 2, borderRadius: 2 }}>
//           {Object.entries(seatMap).map(([row, seats]) => (
//             <Box key={row} sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
//               {seats.map((status, index) => {
//                 const seatId = `${row}${index + 1}`;
//                 const isSelected = seatId === selectedSeat;
//                 return (
//                   <Button
//                     key={seatId}
//                     onClick={() => handleSeatClick(row, index)}
//                     sx={{
//                       width: 40,
//                       height: 40,
//                       minWidth: 'unset',
//                       backgroundColor: getSeatColor(status, isSelected),
//                       border: '1px solid #999',
//                       m: 0.5,
//                       fontSize: 12,
//                     }}
//                     disabled={status === 0}
//                   >
//                     {index + 1}
//                   </Button>
//                 );
//               })}
//             </Box>
//           ))}
//         </Box>

//         {/* Legend */}
//         <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Box sx={{ width: 20, height: 20, bgcolor: '#ffffff', border: '1px solid' }} />
//             <Typography variant="caption">Available</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Box sx={{ width: 20, height: 20, bgcolor: '#f08080', border: '1px solid' }} />
//             <Typography variant="caption">Booked</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Box sx={{ width: 20, height: 20, bgcolor: '#90ee90', border: '1px solid' }} />
//             <Typography variant="caption">Selected</Typography>
//           </Box>
//         </Box>
//       </Box>

//       {/* Booking Info */}
//       <Box sx={{ flex: 1 }}>
//         <Card>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Booking Information
//             </Typography>
//             <Box sx={{ mb: 2 }}>
//               <Typography>Seat: {selectedSeat || 'None selected'}</Typography>
//               <Typography>Price: ${selectedSeat ? '15.00' : '0.00'}</Typography>
//               <Typography>Tax: ${selectedSeat ? '1.50' : '0.00'}</Typography>
//               <Typography variant="h6" sx={{ mt: 2 }}>
//                 Total: ${selectedSeat ? '16.50' : '0.00'}
//               </Typography>
//             </Box>
//             <Button
//               variant="contained"
//               color="success"
//               disabled={!selectedSeat}
//               fullWidth
//             >
//               Proceed to Checkout
//             </Button>
//           </CardContent>
//         </Card>
//       </Box>
//     </Box>
//   );
// }

