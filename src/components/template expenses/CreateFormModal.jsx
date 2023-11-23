import * as React from "react";
import dayjs from 'dayjs';
import {Box,TextField,MenuItem,Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Axios from "axios";
import tokenInterceptor from "../../functions/tokenInterceptor";
import { useState, useEffect } from "react";
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
import { DesktopDatePicker,LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BaseUrl from '../../functions/baseUrl';

export default function CreateFormModal({ element, fn }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [methodId, setMethodId] = useState("");
  const [date, setDate] = useState(dayjs());
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
    console.log(newDate)
    
  };
  tokenInterceptor();
  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`${BaseUrl}/${element}`, {
      amount: amount,
      description: description,
      date:date,
      categoryId: categoryId,
      methodId: methodId,
    })
      .then((response) => {
        console.log(response.data);
        setMessage("Created succesfully");
        setIsError(false);
        setOpen(true)
        setTimeout(function () {
          location.reload(); // Refresh the page after the delay
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response.data.details[0].message)
        setMessage(error.response.data.details[0].message);
        setIsError(true);
        setOpen(true);
        setTimeout(function () {
          setOpen(false); // Refresh the page after the delay
        }, 2000);
      });
  };

  const fetchView = () => {
    Axios.get(`${BaseUrl}/category`)
      .then((response) => {
        setCategories(response.data);
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
  };
  useEffect(() => {
    // Fetch categories and methods from your server using Axios
    fetchView();
  }, []);
  

 
  return (
    
      
    <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "1em", flexDirection: "column",marginBottom:"1em" }}
      >
        <TextField
          label={`$ Amount`}
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
