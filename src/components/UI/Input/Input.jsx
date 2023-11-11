import React from "react";
import styles from "./Input.module.css";
import iconLeft from "../../../assets/search.svg";
import iconright from "../../../assets/filter.svg";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className={styles.inputContainer}>
      {leftIcon && (
        <span className={styles.icon}>
          <img src={iconLeft} alt="Left Icon" className={styles.leftIcon} />
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={leftIcon ? styles.inputWithLeftIcon : styles.input}
      />
      {rightIcon && (
        <span className={styles.icon}>
          <img src={iconright} alt="Right Icon" className={styles.rightIcon} />
        </span>
      )}
    </div>
  );
};
