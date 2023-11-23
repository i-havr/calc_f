import { endWithOperator } from "@/helpers";

export const normalizeSubmitData = (value: string): string => {
  const trimmedValue = endWithOperator(value) ? value.slice(0, -1) : value;

  let normalizedString = "";

  if (["*", "/"].some((operator) => trimmedValue.startsWith(operator))) {
    normalizedString = 0 + trimmedValue;
  } else {
    normalizedString = trimmedValue;
  }

  return normalizedString;
};
