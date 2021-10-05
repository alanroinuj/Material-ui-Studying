import React, {useState, useEffect} from 'react';

import TextField from '@material-ui/core/TextField';

import clsx from 'clsx';
import './styles.css';
import useStyles from './styles';

const Address = () =>{
  const styles = useStyles();
  const [ dataCep, setDataCep ] = useState("");
  const [ dataForm, setDataForm ] = useState({
    address: '',
    district: '',
    city: '',
    state: '',
  });

  useEffect(() =>{
    if (dataCep.length > 7)
    fetch(`https://viacep.com.br/ws/${dataCep}/json/`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => setDataForm({
      address : response.logradouro,
      district : response.bairro,
      city: response.localidade,
      state : response.uf,
    }))
    .catch((error) => alert(`Não foi possível obter o endereço do CEP informado! Erro:${error}`));
  }, [dataCep]);

  function searchingData(e){
    setDataCep(e.target.value);
  };
  
  function fillingForm({target}){
    const {id, value} = target;
    setDataForm ({...dataForm, [id]: value});
  };

  return(
    <div className="groupAddress">
      <TextField className={styles.input}
        label="Cep"
        variant="outlined" 
        size="small" 
        style={{ width: '15ch'}}
        value={dataCep.textmask} 
        onChange={searchingData}
        //InputProps={{ inputComponent: TextMaskCep }}
      />
      <TextField className={clsx(styles.input, styles.AddressInput)}
        label="Logradouro" 
        variant="outlined"
        size="small"
        style={{ width: '51ch'}} 
        value={dataForm.address}
        onChange={fillingForm}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField className={clsx(styles.input, styles.districtInput)}
        label="Bairro" 
        variant="outlined"
        size="small"
        style={{ width: '51ch'}}
        value={dataForm.district}
        onChange={fillingForm}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField className={clsx(styles.input)}
        label="Numero" 
        variant="outlined"
        size="small"
        style={{ width: '10ch'}} 
        InputLabelProps={{
          shrink: true,
      }}
      />
      <TextField className={clsx(styles.input)}
        label="Complemento" 
        variant="outlined"
        size="small"
        style={{ width: '50ch'}} 
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField className={clsx(styles.input)}
        label="Cidade" 
        variant="outlined"
        size="small"
        disabled
        style={{ width: '40ch'}}
        value={dataForm.city}
        onChange={fillingForm}
        InputLabelProps={{
          shrink: true,
      }}
      />
      <TextField className={clsx(styles.input)}
        label="Uf" 
        variant="outlined"
        size="small"
        disabled
        style={{ width: '10ch'}} 
        value={dataForm.state}
        onChange={fillingForm}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default Address;
