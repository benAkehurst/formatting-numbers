import React from 'react';
import classes from './Input.module.scss';

const input = (props: any) => {
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
