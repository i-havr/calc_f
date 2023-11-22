export interface IButtonsContainer {
  changeInputValue: (
    value: string,
    isOperator?: boolean,
    isResetBtn?: boolean,
    isEqualBtn?: boolean
  ) => void;
  buttonAction: () => void;
}
