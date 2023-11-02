import { useState,useEffect } from 'react'
import Axios from 'axios';
import ButtonSubmit from '../ButtonSubmit';
import ButtonCancel from '../ButtonCancel';
import * as React from 'react';
import { FocusTrap } from '@mui/base/FocusTrap';
import Box from '@mui/system/Box';
import ButtonCreate from '../ButtonCreate';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const CreateMui = ({element})=>{
  const [name, setName] = useState('')
  const [message, setMessage] = useState('');
  const [isError,setIsError] = useState(false)
  const [open, setOpen] = React.useState(false);


  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis"

   Axios.post(`http://localhost:8080/${element}`, {name:name},{
    headers: {
      Authorization: `Bearer ${token}`
    }}).then((response)=>{
      console.log(response.data)
      setMessage("Created succesfully")
      setIsError(false)
    }).catch((error)=>{
        setMessage(error.response.data.message)
        setIsError(true)
    })
  }
  return (
    
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        '& [tabindex]:focus': { outline: '1px solid green' },
      }}
    >
      <ButtonCreate fn={() => setOpen(true)} element={element}/>
      {open && (
        <FocusTrap disableEnforceFocus open>
          <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
          <form  onSubmit={handleSubmit} style={{display:'flex',gap:'1em'}}>
            <TextField
            label={`New ${element}`}
            id="outlined-size-small"
            size="small"
            value={name}
            onChange={handleChange}/>
            
             <ButtonSubmit size="small"/>
             <ButtonCancel fn={() => setOpen(false)}/>
          </form>
            
          </Box>
        </FocusTrap>
      )}
    </Box>
    
  );
};

export default CreateMui;