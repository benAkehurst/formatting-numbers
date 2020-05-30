import * as React from 'react';
import classes from './Display.module.scss';

const display = (props: any) => {
  return <div className={classes.DisplayWrapper}>{props.children}</div>;
};

export default display;
