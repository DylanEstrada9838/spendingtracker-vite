import { useState,useEffect } from 'react'
import Axios from 'axios';
import {useNavigate } from 'react-router-dom';
import ButtonSubmit from '../ButtonSubmit';
import ButtonCancel from '../ButtonCancel';
import * as React from 'react';
import { FocusTrap } from '@mui/base/FocusTrap';
import Box from '@mui/system/Box';
import ButtonCreate from '../ButtonCreate';

const Create = ({element})=>{
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
      '& [tabindex]:focus': { outline: '1px solid green',
      marginTop:'1em',
      marginBottom:'1em'
    },
    }}
  >
    <ButtonCreate element={element} fn={() => setOpen(true)}/>
    {open && (
      <FocusTrap disableEnforceFocus open>
        
        <div tabIndex={-1} sx={{mt:1}}style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'center',marginLeft:'1em'}}>
            <form onSubmit={handleSubmit} style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'center',gap:'1em '}}>
              <div>
                  <div class="form mb-3">
                    <input type="text" class="form-control form-control-sm " id="name"  
                      value={name}
                      onChange={handleChange} style={{marginTop:'12px'}}/>
                 </div>
              </div>
              <ButtonSubmit/>
              {isError ?<p style={{color:"red"}}>{message}</p> :<p style={{color:"green"}}>{message}</p> }
            </form>
             <ButtonCancel fn={() => setOpen(false)}/>
        </div>
      </FocusTrap>
    )}
  </Box>
    
  );
};

export default Create;