import React from 'react';

import TextField from '@material-ui/core/TextField';

import './styles.css';
import useStyles from './styles';

const PhysicalPerson = () => {
  const styles = useStyles();
  return(
    <>
    <TextField className={styles.input}
              label="Cpf" 
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField className={styles.input}
              label="Rg" 
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField className={styles.input}
              label="Data Nasc." 
              variant="outlined"
              size="small" 
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
    </>
  );
};

export default PhysicalPerson;