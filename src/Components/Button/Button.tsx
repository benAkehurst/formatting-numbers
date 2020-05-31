import * as React from 'react';
import classes from './Button.module.scss';

interface propTypes {
  clicked?: any;
  disabled?: boolean;
  children?: string;
}

const button = (props: propTypes) => {
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
