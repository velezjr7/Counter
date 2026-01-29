import { useCounter } from "../context/CounterContext";

export const Display = () => {
  const { value } = useCounter();

  return (
    <>
      <p>Valor {value}</p>
    </>
  );
};
