import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import herobg from '../image/herobgimg.jpg';
import Header from './Header'; // Importing your header component

const Herosection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      
      <Box sx={{ position: 'relative', zIndex: 3 }}>
        <Header />
      </Box>

      
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 80px)', 
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: 1, mb: 2 }}>
          DISCOVER THE COLORFUL WORLD
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            
          }}
        >
          NEW TRIP
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            mb: 4,
            maxWidth: '700px',
            lineHeight: 1.6,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '30px',
            paddingX: 4,
            paddingY: 1.2,
            fontWeight: 600,
            fontSize: '0.9rem',
            '&:hover': {
               backgroundColor: 'transparent',
              color: 'white',
            },
          }}
        >
          DISCOVER NOW
        </Button>
      </Box>
    </Box>
  );
};

export default Herosection;
