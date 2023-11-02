import * as React from 'react';


import Button from '@mui/material/Button';


const ButtonCancel=({fn})=> {
  return (
        <Button onClick={fn} variant="contained" color="secondary">
          Cancel
        </Button>
  );
}


export default ButtonCancel;