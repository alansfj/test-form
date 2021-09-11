import React from "react";
import CustomInput from "./CustomInput";
import SaveButton from "./SaveButton";
import "../Sass/AllFormsStyles.scss";
import { validate } from "../helpers/validate";
import { regex } from "../helpers/regex";
import { useForm } from "../hooks/useForm";
import GridContainerWrapper from "./GridContainerWrapper";

const initialForm = {
  calle: "",
  numeroExt: "",
  numeroInt: "",
  codigoPostal: "",
  colonia: "",
  municipio: "",
  ciudad: "",
  estado: "",
  pais: "",
  comprobanteDomicilio: "",
  telefonoDomicilio: "",
};

const AddressForm = ({ formTitle }) => {
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
      regex.OnlyLetters,
      form.pais,
      "pais",
      setErrors,
      errors,
      "Solo se permiten letras"
    );

    validate(
      e.target,
      regex.OnlyLetters,
      form.estado,
      "estado",
      setErrors,
      errors,
      "Solo se permiten letras"
    );

    validate(
      e.target,
      regex.OnlyLetters,
      form.municipio,
      "municipio",
      setErrors,
      errors,
      "Solo se permiten letras"
    );

    validate(
      e.target,
      regex.OnlyLetters,
      form.ciudad,
      "ciudad",
      setErrors,
      errors,
      "Solo se permiten letras"
    );

    validate(
      e.target,
      regex.OnlyNumbers,
      form.codigoPostal,
      "codigoPostal",
      setErrors,
      errors,
      "Solo se permiten números"
    );

    validate(
      e.target,
      regex.OnlyNumbers,
      form.numeroExt,
      "numeroExt",
      setErrors,
      errors,
      "Solo se permiten números"
    );

    validate(
      e.target,
      regex.OnlyNumbers,
      form.numeroInt,
      "numeroInt",
      setErrors,
      errors,
      "Solo se permiten números"
    );

    validate(
      e.target,
      regex.OnlyNumbers,
      form.telefonoDomicilio,
      "telefonoDomicilio",
      setErrors,
      errors,
      "Solo se permiten números"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <GridContainerWrapper>
        <CustomInput
          name="pais"
          label="País"
          error={errors.pais}
          handleChange={handleChange}
          value={form.pais}
          handleBlur={handleBlur}
        />
        <CustomInput
          name="estado"
          label="Estado"
          error={errors.estado}
          handleChange={handleChange}
          value={form.estado}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <GridContainerWrapper>
        <CustomInput
          name="municipio"
          label="Municipio"
          error={errors.municipio}
          handleChange={handleChange}
          value={form.municipio}
          handleBlur={handleBlur}
        />
        <CustomInput
          name="ciudad"
          label="Ciudad"
          error={errors.ciudad}
          handleChange={handleChange}
          value={form.ciudad}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <GridContainerWrapper columns="1fr 1fr">
        <CustomInput
          name="colonia"
          label="Colonia"
          error={errors.colonia}
          handleChange={handleChange}
          value={form.colonia}
          handleBlur={handleBlur}
        />
        <CustomInput
          name="calle"
          label="Calle"
          error={errors.calle}
          handleChange={handleChange}
          value={form.calle}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <GridContainerWrapper columns="1fr 1fr 1fr">
        <CustomInput
          type="number"
          name="codigoPostal"
          label="Código Postal"
          error={errors.codigoPostal}
          handleChange={handleChange}
          value={form.codigoPostal}
          handleBlur={handleBlur}
        />
        <CustomInput
          type="number"
          name="numeroExt"
          label="Número Ext"
          error={errors.numeroExt}
          handleChange={handleChange}
          value={form.numeroExt}
          handleBlur={handleBlur}
        />
        <CustomInput
          type="number"
          name="numeroInt"
          label="Número Int"
          error={errors.numeroInt}
          handleChange={handleChange}
          value={form.numeroInt}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <GridContainerWrapper>
        <CustomInput
          type="file"
          name="comprobanteDomicilio"
          label="Comprobante de domicilio"
          handleChange={handleChange}
          value={form.comprobanteDomicilio}
        />
        <CustomInput
          type="number"
          name="telefonoDomicilio"
          label="No. Teléfono del Domicilio"
          error={errors.telefonoDomicilio}
          handleChange={handleChange}
          value={form.telefonoDomicilio}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <SaveButton errorsObj={errors} isDisabled={disableSaveButtonError} />
    </form>
  );
};

export default AddressForm;
