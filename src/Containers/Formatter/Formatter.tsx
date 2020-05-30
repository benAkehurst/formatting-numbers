import * as React from 'react';
import { Component } from 'react';
import classes from './Formatter.module.scss';

import formattingRules from '../../Data/formattingRules';
import numberValidator from '../../Helpers/numberValidator';

import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Display from '../../Components/Display/Display';

class Formatter extends Component<{ pageTitle: string }> {
  state = {
    isError: false,
    errorMessage: '',
    submittedPhoneNumber: '',
  };

  inputHandler = (e: any) => {
    this.setState({
      isError: false,
      errorMessage: '',
      submittedPhoneNumber: e.target.value,
    });
  };

  convertNumberFormat = () => {
    numberValidator(this.state.submittedPhoneNumber)
      ? this.formatNumber(this.state.submittedPhoneNumber)
      : this.setState({
          isError: true,
          errorMessage: `${this.state.submittedPhoneNumber} is not UK a valid UK Phone number`,
        });
  };

  formatNumber = (phoneNumber: string) => {
    if (phoneNumber !== null) {
      // 1. split number
      let numberSplit = phoneNumber.split('');
      console.log(numberSplit);
      // 2. remove + and replace with 0
      let formattedNumber = numberSplit;
      let replacementValue = ['0'];
      formattedNumber.splice(0, 3, ...replacementValue);
      console.log(formattedNumber);
      // 3. loop though rules matching first number
    } else {
      this.setState({ isError: true, errorMessage: 'Error formatting number' });
    }
  };

  render() {
    return (
      <div className={classes.FormatterWrapper}>
        <h1>{this.props.pageTitle}</h1>
        <div className={classes.InputWrapper}>
          <Input
            placeholder={'Cool Input'}
            inputChange={(e: any) => this.inputHandler(e)}
          ></Input>
          <Button clicked={this.convertNumberFormat}>Check Number</Button>
        </div>
        <div className={classes.DisplayWrapper}>
          {this.state.isError ? (
            <Display displayType={'error'}>{this.state.errorMessage}</Display>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Formatter;
