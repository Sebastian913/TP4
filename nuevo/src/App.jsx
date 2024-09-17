import React from "react";
import { PublicLayout, PrivateLayout } from './layouts'
import { HomePage, LoginPage } from "./pages";
import { useAuth } from "./hooks";

function App() {
  const { login, logout, isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <PrivateLayout>
        <HomePage onLogout={logout} />
        </PrivateLayout>
      ) : (
        <PublicLayout>
        <LoginPage onLogin={login} />
        </PublicLayout>
      )}
    </div>
  );
} 

export default App;
