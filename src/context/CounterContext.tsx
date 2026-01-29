import { createContext, useContext } from "react";

interface CounterContextProps {
  value: number;
  handleButtonIncrement: () => void;
  handleButtonDecrement: () => void;
  handleButtonReset: () => void;
}

export const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter deber estar dentro de CounterProvider");
  }

  return context;
};
