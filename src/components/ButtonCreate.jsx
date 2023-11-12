import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function ButtonCreate({ element, fn }) {
  return (
    <Fab variant="extended" color="primary" onClick={fn}>
      <AddIcon sx={{ mr: 1 }} />
      {element}
    </Fab>
  );
}
