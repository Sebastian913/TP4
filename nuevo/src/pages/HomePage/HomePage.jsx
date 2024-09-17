"use client";
import React from "react";
import styles from "./HomePage.module.css";

const HomePage = ({ onLogout }) => {
  return (
    <div className={styles.homepage}>
      <h1>HomePage works!</h1>
      <button
        type="button"
        onClick={onLogout}
        title="Esto es un boton que hereda estilos"
      >
        volver
      </button>
    </div>
  );
};

export default HomePage;
