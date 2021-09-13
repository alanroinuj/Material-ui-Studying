import React, { forwardRef } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import { Slide } from '@material-ui/core';

import WarningIcon from '@material-ui/icons/Warning';


const Transition = forwardRef(
  function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props}/>;
  }
)

const AlertDialog = (props) => {
  return(
    <>
      <Dialog 
      TransitionComponent={Transition}
      keepMounted
      open={props.open}
      close={props.close}>
        <WarningIcon fontSize="large" style={{margin: '5px 20px'}} color="error"/>
          <DialogTitle>
          {"Deseja realmente excluir?"}
          </DialogTitle>
        
        <DialogContent>
          <DialogContentText>
            Ao confirmar a exclusão, os dados não poderam ser acessados novamente. Deseja continuar ?
          </DialogContentText>
        </DialogContent>
        {props.children}
      </Dialog>
    </>
  );
};

export default AlertDialog;