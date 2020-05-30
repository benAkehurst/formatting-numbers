import * as React from 'react';
import classes from './Display.module.scss';

const display = (props: any) => {
  return (
    <div
      className={[classes.DisplayWrapper, classes[props.displayType]].join(' ')}
    >
      {props.children}
    </div>
  );
};

export default display;
