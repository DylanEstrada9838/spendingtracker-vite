import * as React from "react";
import {Fab,Button,Alert} from "@mui/material";
import {Box,TextField,MenuItem,Snackbar} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      `http://localhost:8080/auth`,
      { email:email,password:password },
    )
      .then((response) => {
        const token = response.data.token;
        console.log(token);

      // Save the token to local storage
      localStorage.setItem('token', token);
        setMessage("Logged in succesfully");
        setIsError(false);
        setOpen(true)
        setTimeout(function() {
         
         navigate("/") // Refresh the page after the delay
         location.reload() 
           }, 2000);
      })
      .catch((error) => {
        console.log(error)
        if (error.response.data.code === 'ERR_AUTH') {
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
            setOpen(false)
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
      <h2>Sign In</h2>
      <Fab color="secondary" aria-label="edit">
         <LockIcon />
       </Fab>
     <form onSubmit={handleSubmit}>
       
       <TextField fullWidth id="email" label="Email" margin="normal" value={email}
                    onChange={handleChangeEmail}/>
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
      Sign In
    </Button>
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
            <Link to="/sign-up">
                <p style={{color:'blue'}}>Don't have an account? Sign-Up</p>
            </Link>
    </Box>
  );
}
