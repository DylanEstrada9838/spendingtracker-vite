import * as React from "react";
import {
  Box,
  TextField,
  Fab,
  Button,
  Alert,
  Stack,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Snackbar } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import BaseUrl from "../../functions/baseUrl";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  username: Joi.string()
    .min(5)
    .max(20)
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "only contains letters, numbers and underscore (_)"
    )
    .required(),
  password: Joi.string().min(5).required(),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting,isSubmitSuccessful },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post(`${BaseUrl}/users`, {
        email: data.email,
        username: data.username,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
        setTimeout(function () {
          navigate("/sign-in"); // Refresh the page after the delay
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response.data.code === "ERR_AUTH" ||
          error.response.data.code === "ERR_USER"
        ) {
          console.log("Authentication Error:", error.response.data.message);
          setError("root", {
            message: error.response.data.message,
          });
        } else if (error.response.data.code === "ERR_VALIDATION") {
          // Check for specific validation error
          const validationError = error.response.data.details[0];
          console.log("Validation Error:", validationError.message);
          setError("root", {
            message: error.response.data.details[0].message,
          });
        }

        setTimeout(function () {}, 2000);
      });
  };
  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        width: "600px",
        margin: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
        border: "1px solid rgba(60, 79, 118, 0.5)",
        padding: "30px",
        borderRadius: "7px",
        boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
        background: "#FFFCFF",
      }}
    >
      <Typography variant="h4">SIGN UP</Typography>
      <Fab color="secondary" aria-label="edit">
        <LockIcon />
      </Fab>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHelperText sx={{ color: "error.main" }}>
          {errors.root ? errors.root.message : " "}
        </FormHelperText>
        <FormHelperText sx={{ color: "success.main" }}>
          {isSubmitSuccessful ? "Account created succesfully... Redirecting to Login":" "}
        </FormHelperText>
        <TextField
          {...register("email")}
          fullWidth
          id="email"
          label="Email"
          margin="normal"
          helperText={
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.email ? errors.email.message : " "}
            </FormHelperText>
          }
        />
        <TextField
          {...register("username")}
          fullWidth
          id="user"
          label="Username"
          margin="normal"
          helperText={
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.username ? errors.username.message : " "}
            </FormHelperText>
          }
        />
        <TextField
          {...register("password")}
          fullWidth
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          helperText={
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.password ? errors.password.message : " "}
            </FormHelperText>
          }
        />
        <Button
          fullWidth
          margin="normal"
          disabled={isSubmitting}
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: "1em" }}
        >
          Create Account
        </Button>
      </form>
      <Link to="/sign-in">
        <p style={{ color: "blue" }}>Already have an account? Sign-In</p>
      </Link>
    </Box>
  );
}
