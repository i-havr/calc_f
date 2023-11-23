import { operators } from "@/constants";

export const endWithOperator = (currentInputValue: string): boolean => {
  return operators.some((operator) => currentInputValue.endsWith(operator));
};
