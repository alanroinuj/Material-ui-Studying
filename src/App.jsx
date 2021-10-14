import React from 'react';
import DataContextProvider from './Context/useContext';
import MiniDrawer from './Page/DashBoard';



function App() {
  return (
    <DataContextProvider>
       <MiniDrawer/>
    </DataContextProvider>
  );
}

export default App;
