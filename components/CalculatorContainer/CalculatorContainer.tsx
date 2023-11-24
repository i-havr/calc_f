"use client";

import { FC, useState, useEffect, useCallback } from "react";

import { DisplayInput } from "../DisplayInput/DisplayInput";
import { ButtonsContainer } from "../ButtonsContainer/ButtonsContainer";

import { keysAndButtonsData } from "@/data";
import {
  normalizeSubmitData,
  endWithOperator,
  roundDisplayInput,
  isDuplicationDots,
} from "@/helpers";
import { operators } from "@/constants";
import { getCalculation } from "@/services";

import * as S from "./CalculatorContainer.styled";

export const CalculatorContainer: FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [currentCalc, setCurrentCalc] = useState<number | null>(null);
  const [isStart, setIsStart] = useState<boolean>(true);

  const submitDataToCalculate = useCallback(
    async (value: string): Promise<number | undefined> => {
      const normalizedString = normalizeSubmitData(value);

      for (const segment of normalizedString.slice(1)) {
        if (operators.includes(segment)) {
          const operand1 = currentCalc
            ? currentCalc
            : parseFloat(
                normalizedString.startsWith("-")
                  ? "-" + normalizedString.slice(1).split(segment)[0]
                  : normalizedString.split(segment)[0]
              );
          const operand2 = parseFloat(
            normalizedString.slice(1).split(segment)[1]
          );

          try {
            const result = await getCalculation(segment, operand1, operand2);

            setCurrentCalc(result);

            const remainingString = normalizedString.replace(
              operand1 + segment + operand2,
              ""
            );

            if (remainingString.length > 1) {
              return await submitDataToCalculate(result + remainingString);
            } else {
              return result;
            }
          } catch (error) {
            setDisplayValue("Error");
            setCurrentCalc(null);
            setIsStart(true);
            console.log(error);
          }
        }
      }
    },
    [currentCalc]
  );

  const changeInputValue = useCallback(
    async (
      value: string,
      isOperator?: boolean,
      isResetBtn?: boolean,
      isEqualBtn?: boolean,
      isDotBtn?: boolean
    ) => {
      if (isResetBtn) {
        setDisplayValue("0");
        setCurrentCalc(null);
        setIsStart(true);
        return;
      }

      if (isEqualBtn) {
        const result = await submitDataToCalculate(displayValue);

        if (typeof result === "number") {
          setDisplayValue(
            roundDisplayInput(result.toString()).substring(0, 12)
          );
        }

        setCurrentCalc(null);
        setIsStart(true);
        return;
      }

      setDisplayValue((prev) => {
        if (prev === "0") {
          setIsStart(false);
          return value.substring(0, 12);
        }

        if (endWithOperator(prev) && isDotBtn) {
          setIsStart(false);
          return prev + 0 + value;
        }

        if (isDuplicationDots(prev) && isDotBtn) {
          setIsStart(false);
          return prev;
        }

        if (prev.endsWith(value) && isDotBtn) {
          setIsStart(false);
          return prev;
        }

        if (isOperator && endWithOperator(prev)) {
          return (prev.slice(0, -1) + value).substring(0, 12);
        }

        if (isOperator && prev.endsWith(".")) {
          return prev.replace(".", "") + value;
        }

        if (isStart) {
          setIsStart(false);
          return isOperator
            ? (prev + value).substring(0, 12)
            : value.substring(0, 12);
        } else {
          return (prev + value).substring(0, 12);
        }
      });
    },
    [displayValue, isStart, submitDataToCalculate]
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;

      if (!isNaN(+key) || [...operators, "."].includes(key)) {
        const pressedKey = keysAndButtonsData.find((obj) => obj.key === key);

        changeInputValue(
          key,
          pressedKey?.className?.includes("operator"),
          false,
          false,
          pressedKey?.className?.includes("dot")
        );
      } else if (key === "Enter") {
        changeInputValue(key, false, false, true, false);
      } else if (key === "Escape") {
        changeInputValue(key, false, true, false, false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [changeInputValue]);

  return (
    <S.CalculatorContainer>
      <DisplayInput inputValue={displayValue} />
      <ButtonsContainer changeInputValue={changeInputValue} />
    </S.CalculatorContainer>
  );
};
