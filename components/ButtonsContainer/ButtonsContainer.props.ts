export interface IButtonsContainer {
  changeInputValue: (
    value: string,
    isOperator?: boolean,
    isResetBtn?: boolean,
    isEqualBtn?: boolean,
    isDotBtn?: boolean
  ) => void;
}
