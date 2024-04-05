import * as React from "react";
import dayjs from "dayjs";
import {
  Box,
  TextField,
  MenuItem,
  Snackbar,
  FormHelperText,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Axios from "axios";
import tokenInterceptor from "../../functions/tokenInterceptor";
import { useState, useEffect } from "react";
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BaseUrl from "../../functions/baseUrl";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  amount: Joi.number().min(1).required().messages({
    "number.base":`Please enter an amount`
  }),
  description: Joi.string().min(0).max(150).optional(),
  date: Joi.date().required(),
  categoryId: Joi.number().min(1).required().messages({
    "number.min":"Please select a category"
  }),
  methodId: Joi.number().min(1).required().messages({
    "number.min":"Please select a method"
  }),
});

export default function CreateFormModal({ element, fn }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: joiResolver(schema),
  });
  const [categories, setCategories] = useState([]);
  const [methods, setMethods] = useState([]);

  tokenInterceptor();

  const onSubmit = async(data) => {
    console.log(data);
    await Axios.post(`${BaseUrl}/${element}`, {
      amount: data.amount,
      description: data.description,
      date: data.date,
      categoryId: data.categoryId,
      methodId: data.methodId,
    })
      .then((response) => {
        console.log(response.data);
        setTimeout(function () {
          location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response.data.details[0].message);
        setError("root", {
          message: error.response.data.details[0].message,
        });
      });
  };

  const fetchView = () => {
    Axios.get(`${BaseUrl}/category`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
    Axios.get(`${BaseUrl}/method`)
      .then((response) => {
        setMethods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching methods:", error);
      });
  };
  useEffect(() => {
    // Fetch categories and methods from your server using Axios
    fetchView();
  }, []);

  return (
    <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          gap: "1em",
          flexDirection: "column",
          marginBottom: "1em",
        }}
      >
        {errors.root && <FormHelperText sx={{ color: "error.main" }}>
          errors.root.message
        </FormHelperText>}
        {isSubmitSuccessful && <FormHelperText sx={{color:"success.main"}}>
            {"Expense created succesfully"}
          </FormHelperText>}
        <TextField
          {...register("amount")}
          label={`$ Amount`}
          id="amount"
          type="number"
          defaultValue=""
          size="small"
          error={errors.amount}
          helperText={
            errors.amount && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.amount.message}
              </FormHelperText>
            )
          }
        />
        <TextField
          {...register("description")}
          label={`Description(Optional)`}
          id="description"
          size="small"
          error={errors.description}
          helperText={
            errors.description && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.description.message}
              </FormHelperText>
            )
          }
        />
        <TextField
          {...register("categoryId")}
          id="category"
          select
          defaultValue={0}
          label="Select a category"
          size="small"
          error={errors.categoryId}
          helperText={
            errors.categoryId && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.categoryId.message}
              </FormHelperText>
            )
          }
        >
          {categories.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          {...register("methodId")}
          id="method"
          select
          defaultValue={0}
          label="Select a method"
          size="small"
          error={errors.methodId}
          helperText={
            errors.methodId && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.methodId.message}
              </FormHelperText>
            )
          }
        >
          {methods.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            {...register("date")}
            slotProps={{
              textField: { size: "small"},
            }}
            defaultValue={dayjs()}
            helperText={
              errors.methodId && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.methodId.message}
                </FormHelperText>
              )
            }
          />
        </LocalizationProvider>

        <ButtonSubmit submitting={isSubmitting}/>
        <ButtonCancel fn={fn} />
      </form>
    </Box>
  );
}
