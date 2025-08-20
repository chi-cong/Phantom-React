import "./App.css";
import { Character } from "@phantom-react/ui";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Character>P</Character>
      <Character bgStyle={{ rotate: "10deg" }}>5</Character>
    </div>
  );
}

export default App;
