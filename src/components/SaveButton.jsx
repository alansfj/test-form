import React, { memo } from "react";
import "../Sass/SaveButton.scss";

const SaveButton = ({ ButtonText, isDisabled, isDisabledForm, form }) => {
  return (
    <div className="btn-container">
      {isDisabled ? (
        <input
          type="submit"
          value={ButtonText || "Guardar"}
          disabled
          className="save-btn"
        />
      ) : (
        <input
          type="submit"
          value={ButtonText || "Guardar"}
          className="save-btn"
        />
      )}
    </div>
  );
};

export default memo(SaveButton);
