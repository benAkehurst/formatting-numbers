import * as React from 'react';
import classes from './Button.module.scss';

const button = (props: any) => {
  return (
    <button
      className={classes.ButtonWrapper}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
