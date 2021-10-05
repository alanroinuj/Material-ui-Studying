import React, { useContext } from 'react';
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

import { DataContext } from '../../Context/useContext';

import {useStyles} from './styles';

const initialValues = {
  username: '',
  password: '',
  phone: '',
  remember: false
};




const SignIn = () => {
  const classes = useStyles();
  const { handleToastShow } = useContext(DataContext);
  const validations = Yup.object().shape({
    username: Yup.string().email('Por favor informar o e-mail válido!').required('E-mail é obrigatório'),
    password: Yup.string().required("Senha Obrigatória!")
  });

  function handleSubmit(values){
    console.log(values);
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
            {({errors, touched}) => (
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
              error={errors.username && touched.username}
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
              error={errors.password && touched.password}
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
              onClick={handleToastShow}
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