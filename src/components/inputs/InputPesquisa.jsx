import { React, useEffect, useState } from "react";
import style from "./InputPesquisa.module.css";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";

const InputPesquisa = ({
  label,
  placeholder,
  mask,
  onlyLetters,
  onChange,
  value,
  options,
  id,
  onOptionSelect,
}) => {
  const [lastSelectedOption, setLastSelectedOption] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (onlyLetters) {
      const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, "");
      onChange(filteredValue);
    } else {
      onChange(newValue);
    }
  };

  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display =
      value.length > 0 && value !== lastSelectedOption ? "block" : "none";
  };

  useEffect(() => {
    handleDropdown();
  }, [value]);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setLastSelectedOption(option.nome);
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
          <input {...inputProps} onChange={handleChange} value={value} id={id} />
        )}
      </InputMask>
      <div className={style.dropdown}>
        <ul id="dropdown" className={style.optionsList} style={{ display: "none" }}>
          {options.length > 0 &&
            options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className={style.optionItem}
              >
                {option.nome}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

InputPesquisa.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string.isRequired,
  onlyLetters: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
};

export default InputPesquisa;
