import React, { useContext } from 'react';

import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';

import { DataContext } from '../../Context/useContext';

import styled from './styles';

const SubHeader = (props) => {
  const styles = styled();
  const { openSideBar } = useContext(DataContext);

  return (
    <Toolbar className={clsx(styles.root, !openSideBar && styles.marginShift)}>
      <div className={styles.container}>{props.children}
      </div>
    </Toolbar>
  );
};

export default SubHeader;
