import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [formRoute, setFormRoute] = useState('');
  const [openSideBar, setOpenSideBar] = useState(false);
  const [ showToast, setShowToast ] = useState(false);

  const handleDrawerOpen = () => {
    setOpenSideBar(true);
  };
  const handleDrawerClose = () => {
    setOpenSideBar(false);
  };

  const handleToastShow = () => {
    setShowToast(true);
  };

  const handleFormRoute = (route) => {
    setFormRoute(route);
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
      openSideBar,
      showToast,
      formRoute,
      handleDrawerOpen,
      handleDrawerClose,
      handleFormRoute,
      handleToastShow,
      handleToastHide,
    }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;