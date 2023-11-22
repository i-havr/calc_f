import { endWithOperator } from ".";

export const normalizeSubmitData = (value: string): string => {
  const operators = ["+", "-", "*", "/"];

  const trimValue = endWithOperator(value) ? value.slice(0, -1) : value;

  console.log("value in normalizeSubmitData", trimValue);

  if (operators.some((operator) => trimValue.startsWith(operator))) {
    return 0 + trimValue;
  }

  return trimValue;
};
