import React from 'react';
import DataContextProvider from './Context/useContext';
import FormExemplo from './Page/Form';
//import SignIn from './Page/SignIn';

function App() {
  return (
    <DataContextProvider>
       <FormExemplo/>
    </DataContextProvider>
  );
}

export default App;
