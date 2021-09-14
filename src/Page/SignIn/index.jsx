import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterToken from '../../Context';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {useStyles} from './styles';

const initialValues = {
  username: '',
  password: '',
  remember: false
};

function login({email, password}){
  if(email=== 'alan@email.com' && password=== '123'){
    return {token: 'ewqiop321'};
  }
  return { error: 'E-mail ou senha inválidos'};
};

const SignIn = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues); 
  const {setToken} = useContext(RegisterToken);
  const history = useHistory();

  const validations = Yup.object().shape({
    username: Yup.string().email('Por favor informar o e-mail válido!'),
    password: Yup.string().required("Senha Obrigatória!")
  });

  function handleChange(event){
    const {value, name} = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  function handleSubmit(event){
    event.preventDefault();

    const { token } = login(values);

    if(token){
      setToken(token);
      return history.post('/');
    }
    setValues(initialValues);
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Acessar Sistema
        </Typography>
        
          <Formik initialValues={initialValues} 
          onSubmit={handleSubmit}
          validationSchema={validations}
          >
            {(props) => (
              <Form className={classes.form} noValidate>
              <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="username"
              autoComplete="off"
              onChange={handleChange}
              value={values.email}
              autoFocus
              helperText={<ErrorMessage name="username"/>}
            />
            <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={values.password}
              helperText={<ErrorMessage name="password"/>}
            />
            <Field as={FormControlLabel}
              name="remember"
              control={<Checkbox  value="remember" color="primary" />}
              label="Lembrar senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Acessar
            </Button>
            </Form>
            )}
          </Formik>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
};

export default SignIn;