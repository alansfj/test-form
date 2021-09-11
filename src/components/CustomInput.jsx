import React from "react";
import "../Sass/CustomInput.scss";

const CustomInput = ({
  type,
  name,
  label,
  error,
  accept,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="input-label-container">
      <input
        type={type || "text"}
        accept={accept || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        name={name}
      />
      <label className={`label ${value.length ? "shrink" : ""}`}>{label}</label>
      {/* <p>Validación</p> */}
      <p>{error || " "}</p>
    </div>
  );
};

export default CustomInput;
