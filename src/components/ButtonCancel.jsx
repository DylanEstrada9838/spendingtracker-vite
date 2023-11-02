import * as React from 'react';


import Button from '@mui/material/Button';


const ButtonCancel=({fn})=> {
  return (
        <Button  variant="contained" color="secondary" onClick={fn}>
          Cancel
        </Button>
  );
}


export default ButtonCancel;