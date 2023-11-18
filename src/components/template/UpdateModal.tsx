import * as React from 'react';
import Typography from '@mui/material/Typography';
import UpdateFormModal from './UpdateFormModal';
import ButtonUpdate from '../ButtonUpdate';
import {ModalClose,Sheet,Modal} from '@mui/joy';

export default function UpdateModal({element,id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
        <ButtonUpdate element = {element} fn={handleOpen}/>
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
            }}>
            <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit {element}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <UpdateFormModal element={element} fn={handleClose} id={id}/>
          </Typography>
        </Sheet>
      </Modal>
    </div>
  );
}