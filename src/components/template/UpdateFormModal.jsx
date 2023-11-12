import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Axios from "axios";
import tokenInterceptor from "../../functions/tokenInterceptor";
import { useState } from 'react';
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateFormModal({element,fn,id}) {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [show,setShow]=useState(false);
  

  const handleChange = (e) => {
    setName(e.target.value);
  };
  tokenInterceptor();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    Axios.put(
      `http://localhost:8080/${element}/${id}`,
      { name: name },
    )
      .then((response) => {
        console.log(response.data);
        setMessage("Updated succesfully");
        setIsError(false);
        setShow(true)
        setTimeout(function() {
            setShow(false) // Refresh the page after the delay
          }, 1500);
        setTimeout(function() {
            location.reload(); // Refresh the page after the delay
          }, 2000);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
        setIsError(true);
        setShow(true)
        setTimeout(function() {
            setShow(false) // Refresh the page after the delay
          }, 2000);
      });
    }
  return (
          <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", gap: "1em" }}
            >
              <TextField
                label={`Update ${element}`}
                id="outlined-size-small"
                size="small"
                value={name}
                onChange={handleChange}
              />

              <ButtonSubmit />
              <ButtonCancel fn={fn}/>
            </form>
            {show &&(isError ? (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  {message}
                </Alert>
              </Stack>
            ) : (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="success">
                  {message}
                </Alert>
              </Stack>
            ))}
          </Box>
          
  );
}