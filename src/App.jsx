import React from 'react';
import DataContextProvider from './Context/useContext';
import Routes from './Routes';



function App() {
  return (
    <DataContextProvider>
       <Routes/>
    </DataContextProvider>
  );
}

export default App;
