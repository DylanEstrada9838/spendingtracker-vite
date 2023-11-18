import * as React from 'react';
import Typography from '@mui/material/Typography';
import ButtonDelete from '../ButtonDelete';
import DeleteFormModal from './DeleteFormModal';
import {Sheet,Modal,DialogTitle,Divider,DialogContent} from '@mui/joy';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

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
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
           <Sheet variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
              display:"flex",
              alignItems:"center",
              flexDirection:"column",
              height:"250x",
              gap:".5em"
            }}>
              <DialogTitle>
            <WarningRoundedIcon color="error" />
            Delete {element}
          </DialogTitle>
          <Divider/>
          <DialogContent>
            Are you sure you want to delete this {element}?
          </DialogContent>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
              <DeleteFormModal element={element} fn={handleClose} id={id}/>
          </Typography>
        </Sheet>
      </Modal>
    </div>
  );
}