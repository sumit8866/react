import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Container, Grid, LinearProgress, Card, CardMedia, CardContent, CardActions, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
// import '@fontsource/poppins';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: { main: '#4070f4' },
    background: { default: '#fff' },
  },
});

const skills = [
  { name: 'HTML', pct: 85 },
  { name: 'CSS', pct: 80 },
  { name: 'JavaScript', pct: 50 },
  { name: 'React', pct: 50 },
  { name: 'Bootstrap', pct: 70 },
  { name: 'TailwindCSS', pct: 70 },
  { name: 'Sass', pct: 70 },
  { name: 'C', pct: 90 },
  { name: 'C++', pct: 90 },
  { name: 'DSA', pct: 50 },
];

const projects = [
  { title: 'Database Management', img: '/assets/img/work4.jfif', desc: 'Database for storing data securely.' },
  { title: 'Social Media App', img: '/assets/img/work2.jfif', desc: 'Connect with talent globally.' },
  { title: 'Online Shopping Website', img: '/assets/img/work3.webp', desc: 'E-commerce platform demo.' },
];

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src="/assets/img/sss.png" alt="Logo" width={48} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {['Home','About','Education','Skills','Projects','Contact'].map(sec => (
              <Button key={sec} href={`#${sec.toLowerCase()}`} sx={{ color: '#333' }}>{sec}</Button>
            ))}
          </Box>
          <IconButton edge="end" sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ pt: '64px', bgcolor: '#fff' }}>
        {/* Home */}
        <Box id="home" sx={{ py: 8, textAlign: 'center', position: 'relative' }}>
          <Typography variant="h4">Hi 👋, I’m <Box component="span" color="primary.main">Sumit Pavasiya</Box></Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 2, animation: 'blinker 3s linear infinite', color: '#4070f4' }}>FRONTEND DEVELOPER</Typography>
          <Link href="https://drive.google.com/file/d/1H08bwDDtPX0422uX1svMEH1xnSEEX1Zt/view?usp=sharing" target="_blank" underline="none">
            <Button variant="contained" sx={{ mt: 3 }}>Resume</Button>
          </Link>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2}}>
            <IconButton component="a" href="#"><LinkedInIcon color="primary" /></IconButton>
            <IconButton component="a" href="https://github.com/sumit8866" target="_blank"><GitHubIcon /></IconButton>
          </Box>
          <Box sx={{ position:'absolute', bottom: 0, right: '5%', maxWidth: '40%', display: { xs:'none', md:'block' } }}>
            <img src="/assets/img/profile.gif" alt="Profile" style={{ width:'100%', borderRadius: '0.5rem' }} />
          </Box>
        </Box>

        {/* About */}
        <Container id="about" sx={{ py:8, textAlign: 'center' }}>
          <Typography variant="h4" color="primary.main" gutterBottom>About</Typography>
          <Box component="img" src="/assets/img/profile_1.jpg" alt="Profile" sx={{ width:200, borderRadius:2, mb:3 }} />
          <Typography variant="h6" sx={{ mb:2 }}>I’m Sumit Pavasiya</Typography>
          <Typography sx={{ mb:3 }}>Quick learner and aspiring frontend developer with knowledge in HTML, CSS, JS, Tailwind, React.</Typography>
          <Typography>
            Drop a mail: <Link href="mailto:pavasiyasumit@gmail.com">pavasiyasumit@gmail.com</Link>
          </Typography>
        </Container>

        {/* Education */}
        <Container id="education" sx={{ py:8 }}>
          <Typography variant="h4" color="primary.main" align="center" gutterBottom>Education</Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              { title: 'SSC and HSC', place: 'Brilliant Vidyalaya', date:'Mar 2024' },
              { title: 'BCA', place: 'Udhna Citizen Commerce College', date:'Mar 2024' }
            ].map((ed,i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Box sx={{ p:2, boxShadow:2, borderRadius:2, textAlign:'center' }}>
                  <SchoolIcon fontSize="large" />
                  <Typography variant="h6" sx={{ mt:1 }}>{ed.title}</Typography>
                  <Typography>{ed.place}</Typography>
                  <Typography variant="caption">{ed.date}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Skills */}
        <Container id="skills" sx={{ py:8 }}>
          <Typography variant="h4" color="primary.main" align="center" gutterBottom>Skills</Typography>
          <Grid container spacing={2}>
            {skills.map((s,i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Typography gutterBottom>{s.name}</Typography>
                <LinearProgress variant="determinate" value={s.pct} />
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Projects */}
        <Container id="projects" sx={{ py:8 }}>
          <Typography variant="h4" color="primary.main" align="center" gutterBottom>Projects</Typography>
          <Grid container spacing={3}>
            {projects.map((p,i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Card sx={{ borderRadius:2 }}>
                  <CardMedia component="img" height="200" image={p.img} alt={p.title} />
                  <CardContent>
                    <Typography variant="h6">{p.title}</Typography>
                    <Typography variant="body2">{p.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Contact */}
        <Container id="contact" sx={{ py:8, textAlign:'center' }}>
          <Typography variant="h4" color="primary.main" gutterBottom>Get in Touch</Typography>
          <Box sx={{ display:'flex', justifyContent:'center', gap:3, mt:3, flexWrap:'wrap' }}>
            <Box>
              <IconButton><MailIcon color="primary" /></IconButton>
              <Typography>Email</Typography>
            </Box>
            <Box>
              <IconButton><PhoneIcon color="primary" /></IconButton>
              <Typography>+91 9714051182</Typography>
            </Box>
            <Box>
              <IconButton component="a" href="https://www.linkedin.com/in/sumitpavasiya/"><LinkedInIcon color="primary" /></IconButton>
              <Typography>LinkedIn</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Blinker keyframes */}
      <style>{`
        @keyframes blinker {
          0%,100% { opacity: 1; }
          70% { opacity: 0.1; }
        }
      `}</style>
    </ThemeProvider>
  );
}
