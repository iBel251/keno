import { useEffect } from "react";
import "./App.css";
import Index from "./components/Index";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();
  });
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
