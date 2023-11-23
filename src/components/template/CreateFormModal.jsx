import * as React from 'react';
import { useState } from 'react';
import Axios from "axios"
import tokenInterceptor from "../../functions/tokenInterceptor";
import {Box,TextField,MenuItem,Snackbar} from "@mui/material";
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
import MuiAlert from '@mui/material/Alert';
import BaseUrl from '../../functions/baseUrl';

export default function CreateFormModal({element,fn}) {

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
    
    Axios.post(
      `${BaseUrl}/${element}`,
      { name: name },
    )
      .then((response) => {
        console.log(response.data);
        setMessage("Created succesfully");
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
              style={{ display: "flex", gap: "1em",marginBottom:"1em",alignItems:"flex-start",flexFlow:"row wrap",maxWidth:"400px"}}
            >
              <TextField
                label={`New ${element}`}
                id="outlined-size-small"
                size="small"
                value={name}
                onChange={handleChange}
              />

              <ButtonSubmit/>
              <ButtonCancel fn={fn}/>
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
            </form>
          </Box>
          
  );
}