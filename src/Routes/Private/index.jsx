import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import RegisterToken from '../../Context';

const RoutesPrivate = ({ component: Component,...rest}) => {
  const [ token ] = useContext(RegisterToken);
  return(
    <Route
      {...rest}
      render={() => token 
        ? <Component { ...rest}/>
        : <Redirect to="/signin" />
      } 
    />
  );
};

export default RoutesPrivate;