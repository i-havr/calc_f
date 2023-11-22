import { FC } from "react";

import { Button } from "../Button/Button";
import { buttonsData } from "@/data/buttonsData";

import * as S from "./ButtonsContainer.styled";
import { IButtonsContainer } from "./ButtonsContainer.props";

export const ButtonsContainer: FC<IButtonsContainer> = ({
  buttonAction,
  changeInputValue,
}) => {
  return (
    <S.ButtonsContainer>
      <Button
        className="reset-button"
        actionHandler={() => changeInputValue("0", false, true, false)}
      >
        C
      </Button>
      <S.MainButtonsGrid>
        {buttonsData.map((btn) => {
          return (
            <li key={btn.children}>
              <Button
                className={btn.className}
                actionHandler={() =>
                  changeInputValue(
                    btn.children,
                    btn.className?.includes("operator"),
                    false,
                    btn.className?.includes("equal")
                  )
                }
              >
                {btn.children}
              </Button>
            </li>
          );
        })}
      </S.MainButtonsGrid>
    </S.ButtonsContainer>
  );
};
