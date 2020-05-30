import * as React from 'react';
import classes from './Button.module.scss';

const button = (props: any) => {
  return (
    <button className={classes.ButtonWrapper} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
