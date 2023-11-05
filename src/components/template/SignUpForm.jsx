import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Fab from "@mui/material/Fab";
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'; 
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [show,setShow]=useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeUser = (e) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      `http://localhost:8080/users`,
      { email:email,username: name,password:password },
    )
      .then((response) => {
        setMessage("Created succesfully");
        setIsError(false);
        setShow(true)
        setTimeout(function() {
            setShow(false) // Refresh the page after the delay
          }, 1500);
        setTimeout(function() {
            navigate("/sign-in") // Refresh the page after the delay
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
  };
  return (
    <Box
      sx={{
        display: "flex",
        width:'400px',
        margin:'0 auto',
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
        "& > :not(style)": { m: 1 },
      }}
    >
      <h2>Sign Up</h2>
      <Fab color="secondary" aria-label="edit">
         <LockIcon />
       </Fab>
     <form onSubmit={handleSubmit}>
       
       <TextField fullWidth id="email" label="Email" margin="normal" value={email}
                    onChange={handleChangeEmail}/>
       <TextField fullWidth id="user" label="Username" margin="normal" value={name}
                    onChange={handleChangeUser}/>
       <TextField
         fullWidth
           id="password"
           label="Password"
           type="password"
           autoComplete="current-password"
           margin="normal"
           value={password}
                    onChange={handleChangePassword}
         />
          <Button fullWidth margin="normal" variant="contained" color="primary" type="submit">
      Sign Up
    </Button>
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
