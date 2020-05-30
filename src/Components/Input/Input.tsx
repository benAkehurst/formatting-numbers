import React from 'react';
import classes from './Input.module.scss';

const input = (props: any) => {
  return (
    <input
      className={classes.InputWrapper}
      type="text"
      onChange={props.inputChange}
      placeholder={props.placeholder}
    ></input>
  );
};

export default input;
