import React from "react";
import style from "./ComboBox.module.css";
import PropTypes from "prop-types";

const ComboBox = ({ label, defaultOption, options, onChange, value }) => {
  return (
    <div className={style.container}>
      {label && <label className={style.label}>{label}</label>}
      <select value={value} onChange={onChange} className={style.select}>
        {defaultOption && <option value="">{defaultOption}</option>}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

ComboBox.propTypes = {
  label: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ComboBox;
