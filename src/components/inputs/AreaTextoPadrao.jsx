import React from "react";
import style from "./AreaTextoPadrao.module.css";
import PropTypes from "prop-types";

const AreaTextoPadrao = ({ label, placeholder, onChange, value, id }) => {

     return (
          <div className={style.container}>
               {label && <label className={style.label}>{label}</label>}
               <textarea
                  id={id}
                  value={value}
                  className={style.textarea}
                  placeholder={placeholder}
                  onChange={(e) => onChange(e.target.value)}
               >
               </textarea>
          </div>
     );
};

AreaTextoPadrao.propTypes = {
     label: PropTypes.string,
     placeholder: PropTypes.string,
     value: PropTypes.string.isRequired,
};

export default AreaTextoPadrao;
