import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UpdateFormModal from './UpdateFormModal';
import ButtonCreate from "../ButtonCreate";
import Fab from '@mui/material/Fab';
import EditIcon from "@mui/icons-material/Edit";
import ButtonDelete from '../ButtonDelete';
import DeleteFormModal from './DeleteFormModal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({element,id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <ButtonDelete element = {element} fn={handleOpen}/>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:"center"}}>
            Are you sure you want to delete this {element}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
              <DeleteFormModal element={element} fn={handleClose} id={id}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}