// import React from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Switch from '@mui/material/Switch';

// const Width = () => {
//      const [open, setOpen] = React.useState(false);
//   const [fullWidth, setFullWidth] = React.useState(true);
//   const [maxWidth, setMaxWidth] = React.useState('sm');

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleMaxWidthChange = (event) => {
//     setMaxWidth(
//       // @ts-expect-error autofill of arbitrary value is not handled.
//       event.target.value,
//     );
//   };

//   const handleFullWidthChange = (event) => {
//     setFullWidth(event.target.checked);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open max-width dialog
//       </Button>
//       <Dialog
//         fullWidth={fullWidth}
//         maxWidth={maxWidth}
//         open={open}
//         onClose={handleClose}
//       >
//         <DialogTitle>Optional sizes</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             You can set my maximum width and whether to adapt or not.
//           </DialogContentText>
//           <Box
//             noValidate
//             component="form"
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               m: 'auto',
//               width: 'fit-content',
//             }}
//           >
//             <FormControl sx={{ mt: 2, minWidth: 120 }}>
//               <InputLabel htmlFor="max-width">maxWidth</InputLabel>
//               <Select
//                 autoFocus
//                 value={maxWidth}
//                 onChange={handleMaxWidthChange}
//                 label="maxWidth"
//                 inputProps={{
//                   name: 'max-width',
//                   id: 'max-width',
//                 }}
//               >
//                 <MenuItem value={false}>false</MenuItem>
//                 <MenuItem value="xs">xs</MenuItem>
//                 <MenuItem value="sm">sm</MenuItem>
//                 <MenuItem value="md">md</MenuItem>
//                 <MenuItem value="lg">lg</MenuItem>
//                 <MenuItem value="xl">xl</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControlLabel
//               sx={{ mt: 1 }}
//               control={
//                 <Switch checked={fullWidth} onChange={handleFullWidthChange} />
//               }
//               label="Full width"
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   )
// }

// export default Width


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Dialog from '@mui/material/Dialog';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
// import FormControlLabel from '@mui/material/FormControlLabel';

// const options = [
//   'None',
//   'Atria',
//   'Callisto',
//   'Dione',
//   'Ganymede',
//   'Hangouts Call',
//   'Luna',
//   'Oberon',
//   'Phobos',
//   'Pyxis',
//   'Sedna',
//   'Titania',
//   'Triton',
//   'Umbriel',
// ];

// function ConfirmationDialogRaw(props) {
//   const { onClose, value: valueProp, open, ...other } = props;
//   const [value, setValue] = React.useState(valueProp);
//   const radioGroupRef = React.useRef(null);

//   React.useEffect(() => {
//     if (!open) {
//       setValue(valueProp);
//     }
//   }, [valueProp, open]);

//   const handleEntering = () => {
//     if (radioGroupRef.current != null) {
//       radioGroupRef.current.focus();
//     }
//   };

//   const handleCancel = () => {
//     onClose();
//   };

//   const handleOk = () => {
//     onClose(value);
//   };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <Dialog
//       sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
//       maxWidth="xs"
//       TransitionProps={{ onEntering: handleEntering }}
//       open={open}
//       {...other}
//     >
//       <DialogTitle>Phone Ringtone</DialogTitle>
//       <DialogContent dividers>
//         <RadioGroup
//           ref={radioGroupRef}
//           aria-label="ringtone"
//           name="ringtone"
//           value={value}
//           onChange={handleChange}
//         >
//           {options.map((option) => (
//             <FormControlLabel
//               value={option}
//               key={option}
//               control={<Radio />}
//               label={option}
//             />
//           ))}
//         </RadioGroup>
//       </DialogContent>
//       <DialogActions>
//         <Button autoFocus onClick={handleCancel}>
//           Cancel
//         </Button>
//         <Button onClick={handleOk}>Ok</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

// ConfirmationDialogRaw.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.string.isRequired,
// };

// export default function Width() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState('Dione');

//   const handleClickListItem = () => {
//     setOpen(true);
//   };

//   const handleClose = (newValue) => {
//     setOpen(false);

//     if (newValue) {
//       setValue(newValue);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <List component="div" role="group">
//         <ListItemButton divider disabled>
//           <ListItemText primary="Interruptions" />
//         </ListItemButton>
//         <ListItemButton
//           divider
//           aria-haspopup="true"
//           aria-controls="ringtone-menu"
//           aria-label="phone ringtone"
//           onClick={handleClickListItem}
//         >
//           <ListItemText primary="Phone ringtone" secondary={value} />
//         </ListItemButton>
//         <ListItemButton divider disabled>
//           <ListItemText primary="Default notification ringtone" secondary="Tethys" />
//         </ListItemButton>
//         <ConfirmationDialogRaw
//           id="ringtone-menu"
//           keepMounted
//           open={open}
//           onClose={handleClose}
//           value={value}
//         />
//       </List>
//     </Box>
//   );
// }





import * as React from 'react';
import Stack from '@mui/material/Stack';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Width() {
  const [bannerOpen, setBannerOpen] = React.useState(true);

  const closeBanner = () => {
    setBannerOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ pt: 3 }}>
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet.
        </Typography>
      </Container>
      <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Fade appear={false} in={bannerOpen}>
          <Paper
            role="dialog"
            aria-modal="false"
            aria-label="Cookie banner"
            square
            variant="outlined"
            tabIndex={-1}
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              m: 0,
              p: 2,
              borderWidth: 0,
              borderTopWidth: 1,
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ justifyContent: 'space-between', gap: 2 }}
            >
              <Box
                sx={{ flexShrink: 1, alignSelf: { xs: 'flex-start', sm: 'center' } }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  This website uses cookies
                </Typography>
                <Typography variant="body2">
                  example.com relies on cookies to improve your experience.
                </Typography>
              </Box>
              <Stack
                direction={{
                  xs: 'row-reverse',
                  sm: 'row',
                }}
                sx={{
                  gap: 2,
                  flexShrink: 0,
                  alignSelf: { xs: 'flex-end', sm: 'center' },
                }}
              >
                <Button size="small" onClick={closeBanner} variant="contained">
                  Allow all
                </Button>
                <Button size="small" onClick={closeBanner}>
                  Reject all
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Fade>
      </TrapFocus>
    </React.Fragment>
  );
}
