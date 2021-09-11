import React from "react";
import "../Sass/CustomSelect.scss";

const CustomSelect = ({ label, value, handleChange, options, name }) => {
  return (
    <div className="select-container">
      <select onChange={handleChange} value={value.genero} name={name}>
        <option></option>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
      <label className={`label ${value.length ? "shrink" : ""}`}>{label}</label>
    </div>
  );
};

export default CustomSelect;
