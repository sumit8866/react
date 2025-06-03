import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  Paper
} from "@mui/material";
import logo from './logo.png';
import main from './Movie_3.jpg';

const SignUpPage = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  
  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      height="100vh"
      bgcolor="#000"
      color="#fff"
      position="relative"
    >
      {/* Left Side - Image */}
      <Box
        flex={1}
        width={{ xs: '100%', md: '50%' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position={{ xs: 'absolute', md: 'relative' }}
      >
        <Box
          component="img"
          src={main}
          alt="Movie Poster"
          sx={{
            opacity: { xs: 0.4, md: 1 },
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Right Side - Sign Up Form */}
      <Paper
        component="form"
        elevation={6}
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          top: { xs: '50%', md: 'auto' },
          left: { xs: '50%', md: 'auto' },
          transform: { xs: 'translate(-50%, -50%)', md: 'none' },
          flex: 1,
          width: { xs: '85%', sm: '70%', md: '50%' },
          bgcolor: { xs: 'rgba(0, 0, 0, 0.7)', md: '#121212' },
          px: { xs: 3, sm: 6 },
          py: { xs: 4, sm: 6 },
          height: { xs: 'auto', md: '100%' },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
          zIndex: 2,
          overflowY: { xs: 'auto', md: 'unset' },
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: { xs: "50%", sm: "30%" },
            height: "auto",
            maxHeight: 80,
            mb: 3,
          }}
        />

        <Typography variant="body2" mb={3} color="#aaa" align="center">
          Join us today! Create an account to book your favorite shows:
        </Typography>

        <TextField
          label="Full Name"
          variant="standard"
          type="text"
          autoComplete="name"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: '#fff' } }}
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label="Email"
          variant="standard"
          type="email"
          autoComplete="email"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: '#fff' } }}
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label="Password"
          variant="standard"
          type="password"
          autoComplete="new-password"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: '#fff' } }}
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label="Confirm Password"
          variant="standard"
          type="password"
          autoComplete="new-password"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: '#fff' } }}
          fullWidth
          sx={{ mb: 4 }}
        />

        <Button
          variant="contained"
          sx={{
            width: "100%",
            mt: 2,
            backgroundColor: '#f57c00',
            color: '#fff',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#f57c00',
            },
          }}
        >
          SIGN UP
        </Button>

        <Typography variant="caption" mt={2} align="center" color="#bbb">
          Already have an account? Log in
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
