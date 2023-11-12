import * as React from "react";
import { Link } from "react-router-dom";

import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ButtonDelete({ element, fn }) {
  return (
    <Fab
    size="small"
    color="error"
    aria-label="delete"
    onClick={fn}
  >
    <DeleteIcon />
  </Fab>
  )
}
