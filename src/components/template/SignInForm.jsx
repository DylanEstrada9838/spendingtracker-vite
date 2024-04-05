import * as React from "react";
import { Fab, Button, FormHelperText, Typography } from "@mui/material";
import { Box, TextField } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../functions/baseUrl";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().min(5).required(),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post(`${BaseUrl}/auth`, { email: data.email, password: data.password })
      .then((response) => {
        const token = response.data.token;
        console.log(token);

        // Save the token to local storage
        localStorage.setItem("token", token);

        setTimeout(function () {
          navigate("/home"); 
          location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.code === "ERR_AUTH") {
          console.log("Authentication Error:", error.response.data.message);
          setError("root", {
            message: error.response.data.message,
          });
        } else if (error.response.data.code === "ERR_VALIDATION") {
          const validationError = error.response.data.details[0];
          console.log("Validation Error:", validationError.message);

          setError("root", {
            message: error.response.data.details[0].message,
          });
        }
      });
  };
  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        width:"600px",
        margin: "0 auto ",
        flexDirection: "column",
        alignItems: "center",

        "& > :not(style)": { m: 1 },
        border: "1px solid rgba(60, 79, 118, 0.5)",
        padding: "30px",
        borderRadius: "7px",
        boxShadow: "0 0 5px rgba(255, 255, 255, 0.6)",
        background: "#FFFCFF",
      }}
    >
      <Typography variant="h4">SIGN IN</Typography>
      <Fab color="secondary" aria-label="edit">
        <LockIcon />
      </Fab>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "500px" }}>
        <FormHelperText sx={{ color: "error.main" }}>
          {errors.root ? errors.root.message : " "}
        </FormHelperText>
        <FormHelperText sx={{ color: "success.main" }}>
          {isSubmitSuccessful ? "Authentication success. Logging in..." : " "}
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
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: "1em" }}
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
      <Link to="/sign-up">
        <p style={{ color: "blue" }}>Don`t have an account? Sign-Up</p>
      </Link>
    </Box>
  );
}
