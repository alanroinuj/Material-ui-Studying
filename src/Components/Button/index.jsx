import React from 'react';

import Button from '@material-ui/core/Button';

import Styled from './styles';

const ButtonNew = (props) => {
  const style = Styled();

  return (
    <div className={style.root}>
      <Button
        color={props.color}
        type={props.type}
        onClick={props.onClick}
        variant={props.variant}
        startIcon={props.startIcon}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default ButtonNew;
