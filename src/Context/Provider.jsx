import React from 'react';
import RegisterToken from './';
import useStore from '../Utils/useStorage.js';

const TokenProvider = ({ children }) =>{
  const [ token, setToken ] = useStore('token');
  return(
    <RegisterToken.Provider
    value={{ 
      token,
      setToken,
    }}>
      {children}
    </RegisterToken.Provider>
  );
};

export default TokenProvider;