import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import QuantumGenerator from "./components/QuantumGenerator";
import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("token") ? true : false);
  const [showRegister, setShowRegister] = useState(false);

  if (!user) {
    return (
      <div className="auth-container">
        {showRegister ? (
          <RegisterForm setShowRegister={setShowRegister} />
        ) : (
          <LoginForm setShowRegister={setShowRegister} setUser={setUser} />
        )}
      </div>
    );
  }

  return <QuantumGenerator setUser={setUser} />;
}

export default App;
