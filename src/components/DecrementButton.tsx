import { useCounter } from "../context/CounterContext";
import { Button } from "./button/Button";

export const DecrementButton = () => {
  const { handleButtonDecrement } = useCounter();
  return <Button onClick={handleButtonDecrement} label="Disminuir" />;
};
