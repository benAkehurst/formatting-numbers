import * as React from 'react';
import classes from './Display.module.scss';

interface propTypes {
  children?: string;
  displayType: string;
}

const display = (props: propTypes) => {
  return (
    <div
      className={[classes.DisplayWrapper, classes[props.displayType]].join(' ')}
    >
      {props.children}
    </div>
  );
};

export default display;
