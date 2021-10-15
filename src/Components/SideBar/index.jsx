import React, { useContext } from 'react';

import clsx from 'clsx';

import styled from './styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ListRouterMain from './listItem';

import { DataContext } from '../../Context/useContext';

const Sidebar = () => {
  const style = styled();

  const { openSideBar, handleDrawerClose } = useContext(DataContext);

  return (
    <Drawer
      className={clsx(style.drawer, {
        [style.drawerPaper]: openSideBar,
        [style.drawerPaperClose]: !openSideBar,
      })}
      variant="permanent"
      classes={{
        paper: clsx(style.drawerPaper, !openSideBar && style.drawerPaperClose),
      }}
      open={openSideBar}
    >
      <div className={style.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListRouterMain />
      </List>
    </Drawer>
  );
};

export default Sidebar;
