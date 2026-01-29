import "./App.css";
import { DecrementButton } from "./components/DecrementButton";
import { Display } from "./components/Display";
import { IncrementButton } from "./components/IncrementButton";
import { ResetButton } from "./components/ResetButton";
import { CounterProvider } from "./context/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <Display />
      <IncrementButton />
      <DecrementButton />
      <ResetButton />
    </CounterProvider>
  );
}

export default App;
