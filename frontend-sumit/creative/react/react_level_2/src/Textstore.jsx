import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  colors,
} from '@mui/material';

const Textstore = () => {
  const [inputText, setInputText] = useState('');
  const [fullText, setFullText] = useState('');
  const [showTextarea, setShowTextarea] = useState(false);
  const [records, setRecords] = useState([]);

  const key = 'pOGEYkw3Fxz5m2pW';

  const getdata = () => {
    axios.get('https://generateapi.onrender.com/api/inputandsavedata', {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        setRecords(res.data.Data);
      })
      .catch((error) => {
        console.error('GET error:', error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleInitialSubmit = (values) => {
    const matched = records.find(
      rec => rec.inputText.trim().toLowerCase() === values.inputText.trim().toLowerCase()
    );

    setInputText(values.inputText);
    if (matched) {
  setFullText(matched.fullText);
} else {
  setFullText('');
}
    setShowTextarea(true);
  };

  const handleTextareaSubmit = (values, { resetForm }) => {
    const matched = records.find(
      (rec) => rec.inputText.trim().toLowerCase() === values.inputText.trim().toLowerCase()
    );

    if (matched && matched._id) {
      axios.delete(`https://generateapi.onrender.com/api/inputandsavedata/${matched._id}`, {
        headers: {
          Authorization: key,
        },
      })
        .then((res) => {
        console.log('success');
        
          saveNewRecord(values, resetForm);
        })
        .catch((err) => {
          console.error('error');
        });
    } else {
      saveNewRecord(values, resetForm);
    }
  };

  const saveNewRecord = (values, resetForm) => {
    axios.post('https://generateapi.onrender.com/api/inputandsavedata', values, {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        console.log('success');
        getdata();
        resetForm();
        setInputText('');
        setFullText('');
        setShowTextarea(false);
      })
      .catch((err) => {
        console.error('POST error:', err);
      });
  };

  const deletedata = (id) => {
    axios
     .delete(`https://generateapi.onrender.com/api/inputandsavedata/${id}`, {
        headers: {
          Authorization: key,
        },
      })
       .then((res) => {
        console.log('success');
        
          getdata();
        })
       .catch((err) => {
          console.error('error');
        });
  }

  if (showTextarea) {
    return (
      <Formik
        initialValues={{ inputText, fullText }}
        onSubmit={handleTextareaSubmit}
        enableReinitialize
      >
        {({ handleChange }) => (
          <Form >
            <Box
              sx={{
                height: '100vh',
                p: 2,
                bgcolor: '#f5f5f5',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" sx={{color:'gold',fontStyle:'italic',marginBottom:'5px'}}>
                Editing for: <strong>{inputText}</strong>
              </Typography>
              <Field
                name="fullText"
                as={TextField}
                multiline
                fullWidth
                minRows={20}
                variant="outlined"
                placeholder="Edit your full text here..."
                onChange={handleChange}
                sx={{ mb: 2 ,color:'gold', }}
              />
              <Button type="submit" sx={{background:'gold',}}>
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Formik
        initialValues={{ inputText: '' }}
        onSubmit={handleInitialSubmit}
      >
        {({ handleChange, values }) => (
          <Form>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                required
                placeholder='Entrer your text here...'
                name="inputText"
                label="Enter text"
                value={values.inputText}
                onChange={handleChange}
              />
              <Button type="submit" sx={{background:'gold',margin:'40px 0px'}}>
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <Box sx={{ mt: 6, maxWidth: '90%', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          Submitted Records
        </Typography>
        <table border={1} width="100%" cellPadding={8} style={{ borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#1976d2', color: 'white' }}>
            <tr>
              <th>Title</th>
              <th>Full Text</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.inputText}</td>
                <td>{record.fullText}</td>
                <td><Button onClick={()=>deletedata(record._id)}>DELETE</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default Textstore;
