function oneToTwoNumber(number: number | string): string {
  return number.toString().length < 2 ? `0${number}` : number.toString();
}

export default oneToTwoNumber;
