import { useEffect } from "react";
import "./App.css";
import Index from "./components/Index";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      const userData = window.Telegram.WebApp.initDataUnsafe.user;
      //alert(`User ID: ${userData.id}, Username: ${userData.username}`);
      alert(JSON.stringify(userData));
    } else {
      alert("Not running inside Telegram WebApp");
    }
  }, []);
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
