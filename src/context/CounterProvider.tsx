import { useState, type ReactNode } from "react";
import { CounterContext } from "./CounterContext";

interface Props {
  children: ReactNode;
}

export const CounterProvider = ({ children }: Props) => {
  const [value, setValue] = useState(0);

  const handleButtonIncrement = () => setValue((prev) => prev + 1);
  const handleButtonDecrement = () => setValue((prev) => prev - 1);
  const handleButtonReset = () => setValue(0);

  return (
    <CounterContext.Provider
      value={{
        value,
        handleButtonIncrement,
        handleButtonDecrement,
        handleButtonReset,
      }}>
      {children}
    </CounterContext.Provider>
  );
};
