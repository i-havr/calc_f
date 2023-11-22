export const endWithOperator = (currentInputValue: string): boolean => {
  const operators = ["+", "-", "*", "/"];

  return operators.some((operator) => currentInputValue.endsWith(operator));
};
