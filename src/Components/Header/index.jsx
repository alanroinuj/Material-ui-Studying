import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { DataContext } from '../../Context/useContext';

import styled from './styles';
import HeaderMenu from '../HeaderMenu';
import Buttons from '../Button';
import { InputBase } from '@material-ui/core';


const Header = (props) => {
  const styles = styled();
  const { formRoute, openSideBar, handleDrawerOpen, handleOpenForm } = useContext(DataContext);

  return (
    <>
      <AppBar className={clsx(styles.appBar, openSideBar && styles.appBarShift)}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            arial-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(styles.menuButton, openSideBar && styles.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={styles.title}>
            {props.title}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={2} color={'secondary'}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Avatar className={styles.avatar} />
          </IconButton>
        </Toolbar>
        <HeaderMenu>
            <Buttons onClick={handleOpenForm} variant="outlined" color="primary">
            <RouterLink to={formRoute}/>
              Novo
            </Buttons>
            <div className={styles.search}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisar..."
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </HeaderMenu>
      </AppBar>
    </>
  );
};

export default Header;
