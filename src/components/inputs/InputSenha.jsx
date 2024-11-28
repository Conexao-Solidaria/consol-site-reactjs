import React from "react";
import style from "./InputPadrao.module.css";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";

const InputSenha = ({
  label,
  placeholder,
  mask,
  onlyLetters,
  onChange,
  onKeyDown,
  value,
  id,
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (onlyLetters) {
      const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, "");
      onChange(filteredValue);
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className={style.container}>
      {label && <label className={style.label}>{label}</label>}
      <InputMask
        mask={mask}
        value={value}
        onChange={handleChange}
        className={style.input}
        placeholder={placeholder}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            value={value}
            id={id}
            type="password"
          />
        )}
      </InputMask>
    </div>
  );
};

InputSenha.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string.isRequired,
  onlyLetters: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default InputSenha;
