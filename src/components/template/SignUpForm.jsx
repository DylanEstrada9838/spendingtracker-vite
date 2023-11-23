import * as React from "react";
import {Box,TextField,Fab,Button,Alert,Stack} from "@mui/material";
import {Snackbar} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'; 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';
import BaseUrl from '../../functions/baseUrl';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

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
      `http://${BaseUrl}/users`,
      { email:email,username: name,password:password },
    )
      .then((response) => {
        setMessage("Created succesfully");
        setIsError(false);
        setOpen(true)
        
        setTimeout(function() {
            navigate("/sign-in") // Refresh the page after the delay
          }, 2000);
      })
      .catch((error) => {
        console.log(error)
        if (error.response.data.code === 'ERR_AUTH' || error.response.data.code === 'ERR_USER' ) {
          console.log('Authentication Error:', error.response.data.message);
          setMessage(error.response.data.message);
        } else if (error.response.data.code === 'ERR_VALIDATION') {
          // Check for specific validation error
          const validationError = error.response.data.details[0];
          console.log('Validation Error:', validationError.message);
          setMessage(error.response.data.details[0].message);
        }
        
        setIsError(true);
        setOpen(true)
        setTimeout(function() {
            setOpen(false) // Refresh the page after the delay
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
     <Link to="/sign-in">
                <p style={{color:'blue'}}>Already have an account? Sign-In</p>
            </Link>
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
