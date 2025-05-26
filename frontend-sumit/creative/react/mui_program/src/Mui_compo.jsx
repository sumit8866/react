import React from "react";
import top100Films from "./Topmovies";
import {
  alpha,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Chip,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  NativeSelect,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Stack,
  styled,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
  tooltipClasses,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import { pink, green } from "@mui/material/colors";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import p_1 from "./chilling-sunday.jpg";

import {
  AccountCircle,
  ExpandLess,
  Favorite,
  FavoriteBorder,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";

const Mui_compo = () => {
  function valuetext(value) {
    return `${value}°C`;
  }
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.label,
    renderOption: (props, option) => (
      <li {...props}>
        {option.label} ({option.year})
      </li>
    ),
  };
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const flatProps = {
    options: top100Films.map((option) => option.label),
  };

  const [value, setValue] = React.useState(null);

  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
      ...theme.applyStyles("dark", {
        backgroundColor: "#30404d",
      }),
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
      ...theme.applyStyles("dark", {
        background: "rgba(57,75,89,.5)",
      }),
    },
    ...theme.applyStyles("dark", {
      boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
      backgroundColor: "#394b59",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
    }),
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&::before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });

  function BpCheckbox(props) {
    return (
      <Checkbox
        sx={{ "&:hover": { bgcolor: "transparent" } }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />
    );
  }

  const [values, setValues] = React.useState(2);

  const [age, setAge] = React.useState("");

  const handleChangess = (event) => {
    setAge(event.target.value);
  };

  const [valuess, setValuess] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];

  const labels = { inputProps: { "aria-label": "Switch demo" } };

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  const labelss = { inputProps: { "aria-label": "Color switch demo" } };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#2ECA45",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#1890ff",
          ...theme.applyStyles("dark", {
            backgroundColor: "#177ddc",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.25)",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };


    const [open, setOpen] = React.useState(true);

  const handleClickss = () => {
    setOpen(!open);
  };

  function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));


  return (
    <>
      <Autocomplete
        disablePortal
        options={top100Films}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        renderOption={(props, option) => (
          <li {...props}>
            {option.label} ({option.year})
          </li>
        )}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Stack spacing={1} sx={{ width: 300 }}>
          <Autocomplete
            {...defaultProps}
            id="disable-close-on-select"
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                label="disableCloseOnSelect"
                variant="standard"
              />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="clearOnEscape" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="disable-clearable"
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                label="disableClearable"
                variant="standard"
              />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="include-input-in-list"
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                label="includeInputInList"
                variant="standard"
              />
            )}
          />
          <Autocomplete
            {...flatProps}
            id="flat-demo"
            renderInput={(params) => (
              <TextField {...params} label="flat" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="controlled-demo"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="controlled" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="autoComplete" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="disable-list-wrap"
            disableListWrap
            renderInput={(params) => (
              <TextField
                {...params}
                label="disableListWrap"
                variant="standard"
              />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="open-on-focus"
            openOnFocus
            renderInput={(params) => (
              <TextField {...params} label="openOnFocus" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="autoHighlight" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="auto-select"
            autoSelect
            renderInput={(params) => (
              <TextField {...params} label="autoSelect" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="disabled"
            disabled
            renderInput={(params) => (
              <TextField {...params} label="disabled" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="disable-portal"
            disablePortal
            renderInput={(params) => (
              <TextField {...params} label="disablePortal" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="blur-on-select"
            blurOnSelect
            renderInput={(params) => (
              <TextField {...params} label="blurOnSelect" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="clear-on-blur"
            clearOnBlur
            renderInput={(params) => (
              <TextField {...params} label="clearOnBlur" variant="standard" />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id="select-on-focus"
            selectOnFocus
            renderInput={(params) => (
              <TextField {...params} label="selectOnFocus" variant="standard" />
            )}
          />
          <Autocomplete
            {...flatProps}
            id="readOnly"
            readOnly
            defaultValue={flatProps.options[13]}
            renderInput={(params) => (
              <TextField {...params} label="readOnly" variant="standard" />
            )}
          />
        </Stack>
      </Box>

      <Box></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#f003",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Link
          </Button>
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
        <hr />
        <Box sx={{ "& button": { m: 1 } }}>
          <Box>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </Box>
          <Box>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </Box>
          <Box>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Box>
        </Box>
        <hr />
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
        <hr />
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": { m: 1 },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup size="small" aria-label="Small button group">
            {buttons}
          </ButtonGroup>
          <ButtonGroup color="secondary" aria-label="Medium-sized button group">
            {buttons}
          </ButtonGroup>
          <ButtonGroup size="large" aria-label="Large button group">
            {buttons}
          </ButtonGroup>
        </Box>

        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
          >
            {buttons}
          </ButtonGroup>
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="contained"
          >
            {buttons}
          </ButtonGroup>
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="text"
          >
            {buttons}
          </ButtonGroup>
        </Box>

        <ButtonGroup variant="outlined" aria-label="Loading button group">
          <Button>Submit</Button>
          <Button>Fetch data</Button>
          <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonGroup>

        {/* ********************************************************************************************
         */}
        <hr />
        <Box>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
        </Box>

        <Box>
          <Checkbox {...label} defaultChecked size="small" />
          <Checkbox {...label} defaultChecked />
          <Checkbox
            {...label}
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </Box>

        <Box>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} defaultChecked color="secondary" />
          <Checkbox {...label} defaultChecked color="success" />
          <Checkbox {...label} defaultChecked color="default" />
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </Box>

        <Box>
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </Box>

        <div>
          <FormControlLabel
            label="Parent"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          {children}
        </div>

        <div>
          <BpCheckbox />
          <BpCheckbox defaultChecked />
          <BpCheckbox disabled />
        </div>

        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Box>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>

        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={values}
            onChange={(event, newValue) => {
              setValues(newValue);
            }}
          />
          <Typography component="legend">Uncontrolled</Typography>
          <Rating
            name="simple-uncontrolled"
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
            defaultValue={2}
          />
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={values} readOnly />
          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={values} disabled />
          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={null} />
        </Box>

        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </Stack>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChangess}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
            <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={age}
              label="Age"
              onChange={handleChangess}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} error>
            <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={age}
              label="Age"
              onChange={handleChangess}
              renderValue={(value) => `⚠️  - ${value}`}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Error</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-readonly-label"
              id="demo-simple-select-readonly"
              value={age}
              label="Age"
              onChange={handleChangess}
              inputProps={{ readOnly: true }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Read only</FormHelperText>
          </FormControl>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={age}
              label="Age *"
              onChange={handleChangess}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </div>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Age
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Box>

        <Box sx={{ width: 200 }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", mb: 1 }}
          >
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
          </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>

        <Box sx={{ width: 300 }}>
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            marks
            min={10}
            max={110}
          />
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={10}
            max={110}
            disabled
          />
        </Box>

        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
        <div>
          <Switch {...labels} defaultChecked />
          <Switch {...labels} />
          <Switch {...labels} disabled defaultChecked />
          <Switch {...labels} disabled />
        </div>

        <div>
          <Switch {...labelss} defaultChecked />
          <Switch {...labelss} defaultChecked color="secondary" />
          <Switch {...labelss} defaultChecked color="warning" />
          <Switch {...labelss} defaultChecked color="default" />
          <PinkSwitch {...labelss} defaultChecked />
        </div>
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label="MUI switch"
          />
          <FormControlLabel
            control={<Android12Switch defaultChecked />}
            label="Android 12"
          />
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="iOS style"
          />
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography>Off</Typography>
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>On</Typography>
          </Stack>
        </FormGroup>

        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </div>
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              disabled
              id="filled-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              variant="filled"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              variant="filled"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
            <TextField
              id="filled-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              variant="standard"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              variant="standard"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            />
          </div>
        </Box>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              error
              id="outlined-error"
              label="Error"
              defaultValue="Hello World"
            />
            <TextField
              error
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
            />
          </div>
          <div>
            <TextField
              error
              id="filled-error"
              label="Error"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              error
              id="filled-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="filled"
            />
          </div>
          <div>
            <TextField
              error
              id="standard-error"
              label="Error"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="standard"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
            />
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </div>
          <div>
            <TextField
              id="filled-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
              variant="filled"
            />
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
            />
            <TextField
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
              variant="standard"
            />
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
            <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="standard"
            />
          </div>
        </Box>

        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="With sx" variant="standard" />
          </Box>
        </Box>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={p_1} />
          <Avatar alt="Travis Howard" src={p_1} />
          <Avatar alt="Cindy Baker" src={p_1} />
        </Stack>

        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={p_1} />
          <Avatar alt="Travis Howard" src={p_1} />
          <Avatar alt="Cindy Baker" src={p_1} />
          <Avatar alt="Agnes Walker" src={p_1} />
          <Avatar alt="Trevor Henderson" src={p_1} />
        </AvatarGroup>
        <AvatarGroup total={254}>
          <Avatar alt="Remy Sharp" src={p_1} />
          <Avatar alt="Travis Howard" src={p_1} />
          <Avatar alt="Cindy Baker" src={p_1} />
          <Avatar alt="Agnes Walker" src={p_1} />
          <Avatar alt="Trevor Henderson" src={p_1} />
        </AvatarGroup>
        <AvatarGroup
          renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
          total={4555}
        >
          <Avatar alt="Remy Sharp" src={p_1} />
          <Avatar alt="Travis Howard" src={p_1} />
          <Avatar alt="Cindy Baker" src={p_1} />
          <Avatar alt="Agnes Walker" src={p_1} />
          <Avatar alt="Trevor Henderson" src={p_1} />
        </AvatarGroup>

        <Stack spacing={2} direction="row">
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
        </Stack>

        <Box
          sx={{
            color: "action.active",
            display: "flex",
            flexDirection: "column",
            "& > *": {
              marginBottom: 2,
            },
            "& .MuiBadge-root": {
              marginRight: 4,
            },
          }}
        >
          <div>
            <Badge color="secondary" badgeContent={count}>
              <MailIcon />
            </Badge>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Badge color="secondary" variant="dot" invisible={invisible}>
              <MailIcon />
            </Badge>
            <FormControlLabel
              sx={{ color: "text.primary" }}
              control={
                <Switch checked={!invisible} onChange={handleBadgeVisibility} />
              }
              label="Show Badge"
            />
          </div>
        </Box>

        <Stack direction="row" spacing={1}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </Stack>

        <Card variant="outlined" sx={{ maxWidth: 360 }}>
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Toothbrush
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $4.50
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Pinstriped cornflower blue cotton blouse takes you on a walk to
              the park or just down the hall.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select type
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip color="primary" label="Soft" size="small" />
              <Chip label="Medium" size="small" />
              <Chip label="Hard" size="small" />
            </Stack>
          </Box>
          </Card>

           <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>

     <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClickss}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>

<TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>

     <div>
      <LightTooltip title="Add">
        <Button>Light</Button>
      </LightTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
    </div>
      </Box>
    </>
  );
  
};

export default Mui_compo;
