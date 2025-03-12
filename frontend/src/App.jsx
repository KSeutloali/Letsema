import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserRegistration from "./components/UserRegistration";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MongoDB User Registration</h1>
      </header>
      <main>
        <UserRegistration />
      </main>
    </div>
  );
}

export default App;
