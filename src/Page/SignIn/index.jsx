import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {useStyles} from './styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const SignIn = ({ history }) => {
  const classes = useStyles();
  const initialValues = {
    username: '',
    password: '',
    remember: false
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().email('Por favor informar o e-mail válido!'),
    password: Yup.string().required("Senha Obrigatória!")
  })
  const onSubmit=(values, props) =>{
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
          onSubmit={onSubmit}
          validationSchema={validationSchema}
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
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignIn;