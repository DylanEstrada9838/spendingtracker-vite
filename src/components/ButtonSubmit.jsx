import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";

const ButtonSubmit = ({submitting}) => {
  return (
    <Button  variant="contained" color="primary" type="submit" disabled={submitting}>
      <CheckIcon />
    </Button>
  );
};

export default ButtonSubmit;
