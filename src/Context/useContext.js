import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [ showToast, setShowToast ] = useState(false);

  const handleToastShow = () => {
    setShowToast(true);
  };
  const handleToastHide = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setShowToast(false);
  };

  return(
    <DataContext.Provider
    value={{
      showToast,
      handleToastShow,
      handleToastHide,
    }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;