import * as React from 'react';
import classes from './Button.module.scss';

const button = (props: any) => {
  return <button className={classes.ButtonWrapper}>{props.children}</button>;
};

export default button;
