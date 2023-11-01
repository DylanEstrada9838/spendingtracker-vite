import * as React from 'react';
import {Link} from 'react-router-dom'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const ButtonCreate=({element})=> {
  return (
      <Link to={`/${element}/create`}>
        <Fab variant="extended" color="primary">
          <AddIcon sx={{ mr: 1 }} />
          {element}
        </Fab>
      </Link>
  );
}

export default ButtonCreate;