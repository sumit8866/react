import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';
import logo from '../image/logo.png'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#242424',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
      }}
    >
      {/* Subscription Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 3,
          px: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
            mb: 2,
          }}
        >
          Join the Adventure newsletter to receive the best deals on your vacation.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
          }}
        >
          You can unsubscribe at any time.
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <TextField
            placeholder="Your Email"
            type="email"
            variant="outlined"
            size="small"
            InputProps={{
              sx: {
                color: '#fff',
              },
            }}
            sx={{
              input: { color: '#fff' },
              bgcolor: 'transparent',
              border: '1px solid #fff',
              borderRadius: '4px',
              width: { xs: '100%', sm: 'auto' },
            }}
          />
          <Button variant="outlined" sx={{ borderColor: '#fff', color: '#fff' }}>
            Subscribe
          </Button>
        </Box>
      </Box>

      {/* Footer Links */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: '1000px', width: '100%', mb: 4 }}
      >
        {[
          {
            title: 'About Us',
            links: [
              { text: 'How it works', href: '#' },
              { text: 'Testiminials', href: '#' },
              { text: 'Careers', href: '#' },
              { text: 'Investors', href: '#' },
              { text: 'Terms of Services', href: '#' },
            ],
          },
          {
            title: 'Contact Info',
            links: [
              { text: 'Get Support', href: '#' },
              { text: 'Contact US', href: '#' },
              { text: 'Careers', href: '#' },
              { text: 'Be a Partner', href: '#' },
              { text: 'Be a member', href: '#' },
            ],
          },
          {
            title: 'Our Assets',
            links: [
              { text: 'Submit Videos', href: '#' },
              { text: 'Ambassadors', href: '#' },
              { text: 'Agency', href: '#' },
              { text: 'Influencer', href: '#' },
              { text: 'Report an issue', href: '#' },
            ],
          },
        ].map((section, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {section.title}
            </Typography>
            {section.links.map((link, idx) => (
              <MuiLink
                key={idx}
                href={link.href}
                underline="hover"
                color="inherit"
                sx={{ display: 'block', mb: 1, '&:hover': { color: '#e9e9e9' } }}
              >
                {link.text}
              </MuiLink>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Social Media Section */}
      <Box
        sx={{
          borderTop: '1px solid #444',
          width: '100%',
          maxWidth: '1000px',
          px: 3,
          pt: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <MuiLink
          href="#"
          underline="none"
          sx={{
            color: '#fff',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            mb: { xs: 2, sm: 0 },
          }}
        >
           <img src={logo} alt="" />
        </MuiLink>

        

        <Box>
          {[Facebook, Instagram, YouTube, Twitter, LinkedIn].map((Icon, i) => (
            <IconButton
              key={i}
              href="#"
              target="_blank"
              sx={{ color: '#fff' }}
              aria-label={Icon.displayName || 'social-icon'}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
