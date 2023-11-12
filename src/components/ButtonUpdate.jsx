import * as React from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

export default function ButtonUpdate({ element, fn }) {
  return (
    <Fab size="small" color="secondary" aria-label="add" onClick={fn}>
      <EditIcon />
    </Fab>
  );
}
