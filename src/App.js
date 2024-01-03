import { useEffect } from "react";
import "./App.css";
import Index from "./components/Index";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();

    // Fetch user data
    const userData = tele.initDataUnsafe.user;
    const userId = userData?.id;
    const username = userData?.username; // Note: username might be undefined if the user hasn't set one in Telegram
    alert(`User ID: ${userId}, Username: ${username}`);
    // Send this data to your backend for storage
    //handleLogin(userId, username);
  });
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
