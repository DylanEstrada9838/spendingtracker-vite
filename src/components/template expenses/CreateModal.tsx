import * as React from "react";
import Typography from "@mui/material/Typography";
import CreateFormModal from "./CreateFormModal";
import ButtonCreate from "../ButtonCreate";
import {ModalClose,Sheet,Modal} from '@mui/joy';

export default function CreateModal({ element }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonCreate element={element} fn={handleOpen} />
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
              Add {element}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <CreateFormModal element={element} fn={handleClose} />
            </Typography>
        </Sheet>
       
      </Modal>
    </div>
  );
}
