import { IButton } from "@/components/Button/Button.props";

export const keysAndButtonsData: IButton[] = [
  { children: "7", key: "7", className: "" },
  { children: "8", key: "8", className: "" },
  { children: "9", key: "9", className: "" },
  { children: "/", key: "/", className: "operator" },

  { children: "4", key: "4", className: "" },
  { children: "5", key: "5", className: "" },
  { children: "6", key: "6", className: "" },
  { children: "*", key: "*", className: "operator" },

  { children: "1", key: "1", className: "" },
  { children: "2", key: "2", className: "" },
  { children: "3", key: "3", className: "" },
  { children: "-", key: "-", className: "operator" },

  { children: ".", key: ".", className: "dot" },
  { children: "0", key: "0", className: "" },
  { children: "=", key: "Enter", className: "equal" },
  { children: "+", key: "+", className: "operator" },
];
