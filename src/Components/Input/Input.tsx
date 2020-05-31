import React from 'react';
import classes from './Input.module.scss';

interface propTypes {
  inputChange?: any;
  placeholder?: string;
}

const input = (props: propTypes) => {
  return (
    <div className={classes.field}>
      <input
        type="text"
        name="phonenumber"
        className={classes.input}
        onChange={props.inputChange}
        placeholder=" "
      />
      <label htmlFor="phonenumber" className={classes.label}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default input;
