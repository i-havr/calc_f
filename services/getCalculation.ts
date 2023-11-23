import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.baseURL = "https://calc-b.onrender.com";

export const getCalculation = async (
  operator: string,
  num1: number,
  num2: number
): Promise<number> => {
  let url = "";

  switch (operator) {
    case "+":
      url = "add";
      break;
    case "-":
      url = "subtract";
      break;
    case "*":
      url = "multiply";
      break;
    case "/":
      url = "divide";
      break;

    default:
      break;
  }

  const response = await axios.post(`/${url}`, {
    num1,
    num2,
  });

  const responseData: number = response.data;
  return responseData;
};
