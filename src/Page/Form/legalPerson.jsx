import React from 'react';

import TextField from '@material-ui/core/TextField';

import clsx from 'clsx';
import './styles.css';
import useStyles from './styles';

const LegalPerson = () => {
  const styles = useStyles();
  return(
    <>
            <TextField className={clsx (styles.input, styles.nameInput)}
              label="Nome Fantasia" 
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField className={styles.input}
              label="Cnpj" 
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField className={styles.input}
              label="Insc. Estadual" 
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField className={clsx (styles.input, styles.nameInput)}
              label="Contato" 
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />
    </>
  );
};

export default LegalPerson;