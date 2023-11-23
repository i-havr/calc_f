import { FC } from "react";

import * as S from "./DisplayInput.styled";
import { IDisplayInput } from "./DisplayInput.props";

export const DisplayInput: FC<IDisplayInput> = ({ inputValue }) => {
  return (
    <S.Label>
      <S.DisplayInput
        type="text"
        value={inputValue}
        readOnly
      />
    </S.Label>
  );
};
