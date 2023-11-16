import React from "react";
import styles from "./Button.module.css"

export const Button = ({ children, type }) => {
  const buttonClass = type ? `${styles.btn} ${styles.type2}` : styles.btn;
  
  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};
