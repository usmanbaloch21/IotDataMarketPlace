import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStateValue } from '../../context/AppContext';

const ConfirmDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [name, setName] = useState('');
  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Semantic Rule Name</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To save a Semantic Rule please Write its Name in the Given Field.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Rule Name"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleSubmit(name);
            handleClose();
          }}
          color="primary"
        >
          Add Rule
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
