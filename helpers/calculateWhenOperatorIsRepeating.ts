import { endWithOperator } from ".";

export const calculateWhenOperatorIsRepeating = (value: string): boolean => {
  const operators = ["+", "-", "*", "/"];

  return (
    !endWithOperator(value) &&
    operators.some((operator) => value.includes(operator))
  );
};
