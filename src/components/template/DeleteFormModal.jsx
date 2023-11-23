import * as React from 'react';
import Axios from "axios";
import {Box,TextField,MenuItem,Snackbar} from "@mui/material";
import tokenInterceptor from "../../functions/tokenInterceptor";
import { useState } from 'react';
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
import MuiAlert from '@mui/material/Alert';
import BaseUrl from '../../functions/baseUrl';

export default function DeleteFormModal({element,fn,id}) {

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
 
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);


  tokenInterceptor();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    Axios.delete(
      `http://${BaseUrl}/${element}/${id}`)
      .then((response) => {
        console.log(response.data);
        setMessage("Deleted succesfully");
        setIsError(false);
        setOpen(true)
        setTimeout(function() {
            location.reload(); // Refresh the page after the delay
          }, 2000);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
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