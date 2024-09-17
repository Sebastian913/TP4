"use client";
import React, { useState } from "react";
import { LoginForm } from "../components";

import { useForm } from "../hooks";

const LoginContainer = ({ onLogin }) => {
  const { values, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submitForm = (e) => {
    setIsLoading(true);

    // Simulando una petición a un servidor
    setTimeout(() => {
      console.log(`Email: ${values.email}, Password: ${values.password}`);
      setIsLoading(false);

      onLogin();
      // setError("ESTO ES UN ERROR");
    }, 2000);
  };

  return (
    <LoginForm
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit(submitForm)}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default LoginContainer;
