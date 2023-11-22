"use client";

import { FC, useState, useEffect } from "react";

import * as S from "./CalculatorContainer.styled";

import { DisplayInput } from "../DisplayInput/DisplayInput";
import { ButtonsContainer } from "../ButtonsContainer/ButtonsContainer";
import { normalizeSubmitData, endWithOperator } from "@/helpers";

export const CalculatorContainer: FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [calculateValue, setCalculateValue] = useState<string>("0");
  const [currentCalc, setCurrentCalc] = useState<number | null>(555);

  useEffect(() => {
    if (!displayValue) {
      return;
    }
  }, [displayValue]);

  const submitToCalculate = (value: string) => {
    const normalizedValue = normalizeSubmitData(value);

    return normalizedValue;
  };

  const changeInputValue = (
    value: string,
    isOperator?: boolean,
    isResetBtn?: boolean,
    isEqualBtn?: boolean
  ) => {
    setDisplayValue((prev) => {
      if (isResetBtn) {
        return "0";
      }

      if (isEqualBtn) {
        // повертати відповідь з сервера
        return submitToCalculate(prev);
      }

      if (prev === "0") {
        return value;
      }

      if (isOperator && endWithOperator(prev)) {
        return prev.slice(0, -1) + value;
      }

      return prev + value;
    });

    setCalculateValue((prev) => {
      if (isResetBtn) {
        return "0";
      }

      if (prev === "0" && isOperator) {
        return "0" + value;
      }

      if (prev === "0") {
        return value;
      }

      return prev + value;
    });
  };

  return (
    <S.CalculatorContainer>
      <DisplayInput inputValue={displayValue} currentCalc={currentCalc} />
      <ButtonsContainer
        changeInputValue={changeInputValue}
        buttonAction={() => console.log("CLICKED BUTTON")}
      />
    </S.CalculatorContainer>
  );
};
