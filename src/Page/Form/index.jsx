import React, { useState} from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import  Checkbox  from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';

import MaskedInput from "react-text-mask";

import clsx from 'clsx';
import './styles.css';
import useStyles from './styles';

import Header from '../../Components/Header';
import Sidebar from '../../Components/SideBar';
import Address from './address';
import PhysicalPerson from './physicalPerson';
import LegalPerson from './legalPerson';
import { CssBaseline } from '@material-ui/core';


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


const FormExemplo = (props) =>{
  const styles = useStyles();
  const [values, setValues] = useState("");

  const [radioCheck, setRadioCheck] = useState('a');
  const [ isShowInput, setShowInput ] = useState(false);


  const handleChange = event => {
    setValues(event.target.value);
  };

  const handleChangeRadio = event => {
    setRadioCheck(event.target.value);
  }

  function handleClickChangeLegal(){
    setShowInput(true);
  }
  function handleClickChangePhysical(){
    setShowInput(false);
  }

  return(
      <div className={styles.root}>
        <CssBaseline />
        <Header/>
        <Sidebar/>
          <main className={styles.content}>
            <div className={styles.appBarSpacer}/>
            <div className={styles.appBarSpacer}/>
            <Container maxWidth="md">
              <Paper >
                <header className="formHeader">
                  <Typography color="primary">
                  Formulário
                  </Typography>
                </header>
                <div className="divisor"/>
                <section>
                  <div className="typeCheck">
                  <div>
                    <label>
                        <Checkbox/>
                        Comprador
                      </label>
                      <label>
                        <Checkbox/>
                        Vendedor
                      </label>
                  </div>
                  <div className="radioGroup">
                    <label>
                      <Radio 
                        id="radioLegalPerson"
                        checked={radioCheck === 'a'}
                        onChange={handleChangeRadio}
                        value="a"
                        onClick={handleClickChangeLegal}
                      />
                        P. Jurídico
                  </label>
                  <label>
                      <Radio
                        id="radioPhysicalPerson"
                        checked={radioCheck === 'b'}
                        onChange={handleChangeRadio}
                        value="b"
                        onClick={handleClickChangePhysical}
                        />
                        P. Físico
                  </label>
                  </div>
                  </div>
                  
                  <TextField className={clsx(styles.input, styles.nameInput)}
                    label="Nome/Razão Social" 
                    variant="outlined"
                    size="small" 
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <label>
                    <Checkbox/>
                    Ativo
                  </label>
                  {isShowInput ? (
                    <LegalPerson/>
                  ) : (
                    <PhysicalPerson/>
                  )}
                  <TextField className={clsx(styles.input, styles.nameInput)}
                    label="E-mail" 
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
          </main>
      </div>
  );
};

export default FormExemplo;