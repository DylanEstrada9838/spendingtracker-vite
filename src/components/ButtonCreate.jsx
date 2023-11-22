import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from '@mui/material/styles';
import OrangeTheme from "../themes/OrangeTheme";
import Button from "@mui/material/Button";

export default function ButtonCreate({ element, fn }) {
  return (
   <ThemeProvider theme={OrangeTheme}> 
   <Fab variant="extended" color="secondary" onClick={fn}>
      <AddIcon sx={{ mr: 1 }} />{element}
    </Fab> 
  </ThemeProvider>
   
   
  );
}
