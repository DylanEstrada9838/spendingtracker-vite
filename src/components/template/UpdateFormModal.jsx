import * as React from 'react';
import {Box,TextField,MenuItem,Snackbar} from "@mui/material";
import Axios from "axios";
import tokenInterceptor from "../../functions/tokenInterceptor";
import { useState } from 'react';
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
import MuiAlert from '@mui/material/Alert';
import BaseUrl from '../../functions/baseUrl';

export default function UpdateFormModal({element,fn,id}) {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  tokenInterceptor();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    Axios.put(
      `${BaseUrl}/${element}/${id}`,
      { name: name },
    )
      .then((response) => {
        console.log(response.data);
        setMessage("Updated succesfully");
        setIsError(false);
        setOpen(true)
        setTimeout(function() {
            location.reload(); // Refresh the page after the delay
          }, 2000);
      })
      .catch((error) => {
        setMessage(error.response.data.details[0].message);
        setIsError(true);
        setOpen(true)
        setTimeout(function() {
            setOpen(false) // Refresh the page after the delay
          }, 2000);
      });
    }
  return (
          <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", gap: "1em",marginBottom:"1em" }}
            >
              <TextField
                label={`New ${element} name`}
                id="outlined-size-small"
                size="small"
                value={name}
                onChange={handleChange}
              />

              <ButtonSubmit />
              <ButtonCancel fn={fn}/>
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