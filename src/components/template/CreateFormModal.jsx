import * as React from 'react';
import { useState } from 'react';
import Axios from "axios"
import tokenInterceptor from "../../functions/tokenInterceptor";
import {Box,TextField,Stack,Alert} from '@mui/material/';
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";

export default function CreateFormModal({element,fn}) {

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
    
    Axios.post(
      `http://localhost:8080/${element}`,
      { name: name },
    )
      .then((response) => {
        console.log(response.data);
        setMessage("Created succesfully");
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
              style={{ display: "flex", gap: "1em",marginBottom:"1em", minHeight:"110px",alignItems:"flex-start",flexFlow:"row wrap",maxWidth:"400px"}}
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
              {show &&(isError ? (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  {message}
                </Alert>
              </Stack>
            ) : (
              <Stack sx={{ width: "100%"}} spacing={2}>
                <Alert variant="filled" severity="success">
                  {message}
                </Alert>
              </Stack>
            ))}
            </form>
          
          </Box>
          
  );
}