import React, { useState } from "react";
import style from "./InputPadrao.module.css";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";
import EyeIconOn from "../../utils/assets/eye-on.svg";
import EyeIconOff from "../../utils/assets/eye-off.svg";

const InputPadrao = ({
  label,
  placeholder,
  mask,
  onlyLetters,
  onChange,
  onKeyDown,
  value,
  id,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (onlyLetters) {
      const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, "");
      onChange(filteredValue);
    } else {
      onChange(newValue);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={style.container}>
      {label && <label className={style.label}>{label}</label>}
      <div className={style.inputContainer}>
        <InputMask
          mask={mask}
          value={value}
          onChange={handleChange}
          className={style.input}
          placeholder={placeholder}
          type={isPassword && !showPassword ? "password" : "text"}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              onChange={handleChange}
              onKeyDown={onKeyDown}
              value={value}
              id={id}
            />
          )}
        </InputMask>
        {isPassword && (
          <span onClick={togglePasswordVisibility} className={style.toggleIcon}>
            {showPassword ? (
              <img
                src={EyeIconOn}
                alt="Mostrar senha"
                className={style.icon}
              />
            ) : (
              <img
                src={EyeIconOff}
                alt="Ocultar senha"
                className={style.icon}
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

InputPadrao.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  onlyLetters: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  value: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
};

export default InputPadrao;
