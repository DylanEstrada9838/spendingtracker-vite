import * as React from "react";
import {Box,TextField,Stack,MenuItem,Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Axios from "axios";
import tokenInterceptor from "../../functions/tokenInterceptor";
import { useState, useEffect } from "react";
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker,LocalizationProvider } from '@mui/x-date-pickers';
import BaseUrl from '../../functions/baseUrl';




export default function UpdateFormModal({ element, fn, id }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [methodId, setMethodId] = useState("");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState([]);
  const [methods, setMethods] = useState([]);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeCategoryId = (e) => {
    setCategoryId(e.target.value);
  };
  const handleChangeMethodId = (e) => {
    setMethodId(e.target.value);
  };
  const handleChangeDate = (newDate) => {
    setDate(newDate);
  };
  tokenInterceptor();
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.put(`${BaseUrl}/${element}/${id}`, {
      amount: amount,
      description: description,
      date:date,
      categoryId: categoryId,
      methodId: methodId,
    })
      .then((response) => {
        setMessage("Updated succesfully");
        setIsError(false);
        setOpen(true);
        setTimeout(function () {
          location.reload(); // Refresh the page after the delay
        }, 2000);
      })
      .catch((error) => {
        setMessage(error.response.data.details[0].message);
        setIsError(true);
        setOpen(true);
        setTimeout(function () {
          setShow(false); // Refresh the page after the delay
        }, 2000);
      });
  };
  const fetchView = () => {
    Axios.get(`${BaseUrl}/category`)
      .then((response) => {
        setCategories(response.data);
        console.log(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
    Axios.get(`${BaseUrl}/method`)
      .then((response) => {
        setMethods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching methods:", error);
      });
      Axios.get(`${BaseUrl}/${element}/${id}`)
      .then((response) => {
        const existingData = response.data;

        // Set initial values for the form fields based on existing data
        setAmount(existingData.amount || '');
        setDescription(existingData.description || '');
        setCategoryId(existingData.categoryId || '');
        setMethodId(existingData.methodId || '');
        setDate(dayjs((existingData.date.substring(0-10)))||'');
      })
      .catch((error) => {
        console.error('Error fetching existing data:', error);
      });
  };
  useEffect(() => {
    // Fetch categories and methods from your server using Axios
    fetchView();
  }, []);
  return (
    <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "1em",
          marginBottom: "1em",
          flexDirection: "column",
        }}
      >
        <TextField
          label={`Amount`}
          id="amount"
          type="number"
          size="small"
          value={amount}
          onChange={handleChangeAmount}
        
        />
        <TextField
          label={`Description(Optional)`}
          id="description"
          size="small"
          value={description}
          onChange={handleChangeDescription}
        />
        <TextField
          id="category"
          select
          label="Select"
          size="small"
          helperText="Please select a category"
          value={categoryId}
          onChange={handleChangeCategoryId}
        >
          {categories.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="method"
          select
          label="Select"
          size="small"
          helperText="Please select a method"
          value={methodId}
          onChange={handleChangeMethodId}
        >
          {methods.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker value={date}
          onChange={handleChangeDate} slotProps={{ textField: { size: 'small',helperText: 'Please select a date' } }}/>
        </LocalizationProvider>

        <ButtonSubmit />
        <ButtonCancel fn={fn} />
      </form>
      {isError ? (
          <Snackbar open={open} autoHideDuration={6000} >
        <Alert severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
        ) : (
          <Snackbar open={open} autoHideDuration={6000} >
        <Alert  severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
        )}
    </Box>
  );
}
