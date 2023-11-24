import { operators } from "@/constants";

export const isDuplicationDots = (input: string): boolean => {
  const lastDotIndex = input.lastIndexOf(".");

  if (lastDotIndex === -1) {
    return false;
  }

  return !operators.some((operator) =>
    input.slice(lastDotIndex, -1).includes(operator)
  );
};
