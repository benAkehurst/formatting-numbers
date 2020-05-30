import * as React from 'react';
import { Component } from 'react';
import classes from './Formatter.module.scss';

import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Display from '../../Components/Display/Display';

class Formatter extends Component<{ pageTitle: string }> {
  render() {
    return (
      <div className={classes.FormatterWrapper}>
        <h1>{this.props.pageTitle}</h1>
        <div className={classes.InputWrapper}>
          <Input placeholder={'Cool Input'}></Input>
          <Button>Cool Button</Button>
        </div>
        <div className={classes.DisplayWrapper}>
          <Display>Display</Display>
        </div>
      </div>
    );
  }
}

export default Formatter;
