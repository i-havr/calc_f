import { FC } from "react";

import * as S from "./Button.styled";
import { IButton } from "./Button.props";

export const Button: FC<IButton> = ({ children, className, actionHandler }) => {
  return (
    <S.Button className={className} type="button" onClick={actionHandler}>
      {children}
    </S.Button>
  );
};
