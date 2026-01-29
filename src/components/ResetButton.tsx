import { useCounter } from "../context/CounterContext";
import { Button } from "./button/Button";

export const ResetButton = () => {
  const { handleButtonReset } = useCounter();
  return <Button onClick={handleButtonReset} label="Reset" />;
};
