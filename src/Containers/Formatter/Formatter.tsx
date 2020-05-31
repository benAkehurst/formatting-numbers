import * as React from 'react';
import { Component } from 'react';
import classes from './Formatter.module.scss';

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import numberValidator from '../../Helpers/numberValidator';

import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Display from '../../Components/Display/Display';

interface propTypes {
  pageTitle?: string;
}

class Formatter extends Component<propTypes> {
  state = {
    isError: false,
    isSuccess: false,
    errorMessage: '',
    successMessage: '',
    submittedPhoneNumber: '',
    formattedNumber: '',
  };

  inputHandler = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    this.setState({
      isError: false,
      errorMessage: '',
      submittedPhoneNumber: target.value,
    });
  };

  convertNumberFormat = () => {
    numberValidator(this.state.submittedPhoneNumber)
      ? this.formatNumber(this.state.submittedPhoneNumber)
      : this.setState({
          isError: true,
          errorMessage: `${this.state.submittedPhoneNumber} is not a valid UK Phone number 😢`,
        });
  };

  formatNumber = (submittedPhoneNumber: string) => {
    if (submittedPhoneNumber !== null) {
      const phoneNumber = parsePhoneNumberFromString(submittedPhoneNumber);
      this.setState({
        isSuccess: true,
        successMessage: `Here's your formatted number: ${phoneNumber?.formatNational()} 🥳`,
      });
    } else {
      this.setState({ isError: true, errorMessage: 'Error formatting number' });
    }
  };

  render() {
    const headerSection = (
      <div className={classes.HeaderWrapper}>
        <h1>{this.props.pageTitle}</h1>
      </div>
    );

    const inputSection = (
      <div className={classes.InputWrapper}>
        <Input
          placeholder={'Phone Number'}
          inputChange={(e: React.FormEvent<EventTarget>): void =>
            this.inputHandler(e)
          }
        ></Input>
        <Button
          clicked={this.convertNumberFormat}
          disabled={this.state.submittedPhoneNumber === ''}
        >
          Check Number
        </Button>
      </div>
    );

    const displayError = this.state.isError ? (
      <Display displayType={'error'}>{this.state.errorMessage}</Display>
    ) : null;

    const displaySuccess = this.state.isSuccess ? (
      <Display displayType={'success'}>{this.state.successMessage}</Display>
    ) : null;

    const displaySection = (
      <div className={classes.DisplayWrapper}>
        {this.state.isError ? (
          <div className={classes.ErrorDisplay}>{displayError}</div>
        ) : (
          <div className={classes.SuccessDisplay}>{displaySuccess}</div>
        )}
      </div>
    );

    return (
      <main className={classes.FormatterWrapper}>
        {headerSection}
        {inputSection}
        {displaySection}
      </main>
    );
  }
}

export default Formatter;
