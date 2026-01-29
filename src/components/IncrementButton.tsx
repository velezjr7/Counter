import { useCounter } from "../context/CounterContext";
import { Button } from "./button/Button";

export const IncrementButton = () => {
  const { handleButtonIncrement } = useCounter();
  return <Button onClick={handleButtonIncrement} label="Incrementar" />;
};
