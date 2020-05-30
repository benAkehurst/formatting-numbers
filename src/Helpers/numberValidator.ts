const numberValidator = (phoneNumber: string) => {
  const numberToCheck = phoneNumber.split('');
  const output = [numberToCheck[1], numberToCheck[2]].join('');
  if (output !== '44') {
    return false
  } else {
    return true;
  }
}

export default numberValidator;
