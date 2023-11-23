import { operators } from "@/constants";
import { endWithOperator } from "@/helpers";

export const calculateWhenOperatorIsRepeating = (value: string): boolean => {
  return (
    !endWithOperator(value) &&
    operators.some((operator) => value.includes(operator))
  );
};
