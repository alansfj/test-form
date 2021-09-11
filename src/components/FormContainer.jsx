import React from "react";
import "../Sass/FormContainer.scss";

const FormContainer = ({ formTitle, children }) => {
  return (
    <div className="container">
      <h2 className="form-title"> {formTitle}</h2>
      {children}
    </div>
  );
};

export default FormContainer;
