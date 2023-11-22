import { FC } from "react";

import * as S from "./DisplayInput.styled";
import { IDisplayInput } from "./DisplayInput.props";

export const DisplayInput: FC<IDisplayInput> = ({
  inputValue,
  currentCalc,
}) => {
  return (
    <S.Label>
      <S.DisplayInput
        type="text"
        value={inputValue}
        // onChange={() => console.log("input was changed")}
        readOnly
      />
      <S.CurrentCalc>{currentCalc}</S.CurrentCalc>
    </S.Label>
  );
};
