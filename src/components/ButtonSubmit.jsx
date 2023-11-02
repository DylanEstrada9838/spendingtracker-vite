import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';


import Button from '@mui/material/Button';

const ButtonSubmit=()=> {
  return (
      
        <Button variant="contained" color="primary" type="submit">
          <CheckIcon/>
        </Button>  
  );
}

export default ButtonSubmit;