import React from "react";
import { HomePage, LoginPage } from "./pages";
import { useAuth } from "./hooks";

function App() {
  const { login, logout, isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <HomePage onLogout={logout} />
      ) : (
        <LoginPage onLogin={login} />
      )}
    </div>
  );
}

export default App;
