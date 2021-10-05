import React, {useState} from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import MaskedInput from "react-text-mask";

import clsx from 'clsx';
import './styles.css';
import useStyles from './styles';
import Address from './address';

function TextMaskPhone(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",0,/\d/,/\d/,")",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};

function TextMaskCellPhone(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",0,/\d/,/\d/,")",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};


const FormExemplo = () =>{
  const styles = useStyles();
  const [values, setValues] = useState("");
  const handleChange = event => {
    setValues(event.target.value);
  };
  return(
    <>
      <Container maxWidth="md">
        <Paper style={{ height: '100vh'}} >
          <header className="formHeader">
            <Typography variant="h4" color="primary">
            Formulário
            </Typography>
          </header>
          <div className="divisor"/>
          <section>
            <TextField className={clsx(styles.input, styles.nameInput)}
              label="Nome" 
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField className={styles.input}
              label="Telefone"
              variant="outlined" 
              size="small" 
              value={values.textmask} 
              onChange={handleChange}
              InputProps={{ inputComponent: TextMaskPhone }}
            />
            <TextField className={styles.input}
              label="Celular"
              variant="outlined" 
              size="small" 
              value={values.textmask} 
              onChange={handleChange}
              InputProps={{ inputComponent: TextMaskCellPhone }}
            />
            <Address/>
          </section>
        </Paper>
      </Container>
    </>
  );
};

export default FormExemplo;