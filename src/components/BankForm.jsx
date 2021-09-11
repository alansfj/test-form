import React from "react";
import CustomInput from "./CustomInput";
import SaveButton from "./SaveButton";
import "../Sass/AllFormsStyles.scss";
import { validate } from "../helpers/validate";
import { regex } from "../helpers/regex";
import { useForm } from "../hooks/useForm";
import GridContainerWrapper from "./GridContainerWrapper";

const initialForm = {
  clabe: "",
  banco: "",
};

const BankForm = ({ formTitle }) => {
  const {
    form,
    errors,
    disableSaveButtonError,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm(initialForm);

  const handleBlur = e => {
    validate(
      e.target,
      regex.OnlyNumbers,
      form.clabe,
      "clabe",
      setErrors,
      errors,
      "Solo se permiten números"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <GridContainerWrapper>
        <CustomInput
          type="number"
          name="clabe"
          label="CLABE"
          error={errors.clabe}
          handleChange={handleChange}
          value={form.clabe}
          handleBlur={handleBlur}
        />
        <CustomInput
          name="banco"
          label="Banco"
          handleChange={handleChange}
          value={form.banco}
        />
      </GridContainerWrapper>
      <SaveButton errorsObj={errors} isDisabled={disableSaveButtonError} />
    </form>
  );
};

export default BankForm;
