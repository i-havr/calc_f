export const roundDisplayInput = (input: string) => {
  if (input.includes(".")) {
    return parseFloat(input).toFixed(2).toString();
  } else {
    return input;
  }
};
