import React from "react";
import { validate } from "../helpers/validate";
import "../Sass/AllFormsStyles.scss";
import CustomInput from "./CustomInput";
import SaveButton from "./SaveButton";
import { regex } from "../helpers/regex";
import { useForm } from "../hooks/useForm";
import GridContainerWrapper from "./GridContainerWrapper";

const initialForm = {
  razonSocial: "",
  nombreComercial: "",
  email: "",
  nacionalidad: "",
  fechaConstitucion: "",
  fechaInicio: "",
  rfc: "",
  regimenFiscal: "",
  industria: "",
};

const BasicInfoForm = () => {
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
      regex.Email,
      form.email,
      "email",
      setErrors,
      errors,
      "Introduzca un email válido"
    );

    validate(
      e.target,
      regex.OnlyLetters,
      form.nacionalidad,
      "nacionalidad",
      setErrors,
      errors,
      "Solo se permites letras"
    );

    validate(
      e.target,
      regex.RFC,
      form.rfc,
      "rfc",
      setErrors,
      errors,
      "Introduzca un RFC válido"
    );

    validate(
      e.target,
      regex.OnlyLetters,
      form.industria,
      "industria",
      setErrors,
      errors,
      "Solo se permiten letras"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <CustomInput
        label="Razón Social"
        error={errors.razonSocial}
        value={form.razonSocial}
        name="razonSocial"
        handleChange={handleChange}
        handleBlur={handleBlur}
      ></CustomInput>
      <CustomInput
        label="Nombre Comercial"
        error={errors.nombreComercial}
        value={form.nombreComercial}
        name="nombreComercial"
        handleChange={handleChange}
        handleBlur={handleBlur}
      ></CustomInput>
      <CustomInput
        label="Email"
        error={errors.email}
        value={form.email}
        name="email"
        handleChange={handleChange}
        handleBlur={handleBlur}
      ></CustomInput>
      <CustomInput
        label="Nacionalidad"
        error={errors.nacionalidad}
        value={form.nacionalidad}
        name="nacionalidad"
        handleChange={handleChange}
        handleBlur={handleBlur}
      ></CustomInput>
      <GridContainerWrapper>
        <CustomInput
          type="date"
          label="Fecha de constitución"
          error={errors.fechaConstitucion}
          value={form.fechaConstitucion}
          name="fechaConstitucion"
          handleChange={handleChange}
          handleBlur={handleBlur}
        ></CustomInput>
        <CustomInput
          type="date"
          label="Fecha de inicio de opreación"
          error={errors.fechaInicio}
          value={form.fechaInicio}
          name="fechaInicio"
          handleChange={handleChange}
          handleBlur={handleBlur}
        ></CustomInput>
      </GridContainerWrapper>
      <CustomInput
        label="RFC"
        error={errors.rfc}
        value={form.rfc}
        name="rfc"
        handleChange={handleChange}
        handleBlur={handleBlur}
      ></CustomInput>
      <CustomInput
        label="Régimen Fiscal"
        error={errors.regimenFiscal}
        value={form.regimenFiscal}
        name="regimenFiscal"
        handleChange={handleChange}
        handleBlur={handleBlur}
      ></CustomInput>
      <CustomInput
        label="Industria"
        error={errors.industria}
        value={form.industria}
        name="industria"
        handleChange={handleChange}
        handleBlur={handleBlur}
      ></CustomInput>
      <SaveButton
        errorsObj={errors}
        isDisabled={disableSaveButtonError}
        form={form}
      />
    </form>
  );
};

export default BasicInfoForm;
