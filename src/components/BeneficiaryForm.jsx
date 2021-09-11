import React from "react";
import "../Sass/AllFormsStyles.scss";
import CustomInput from "./CustomInput";
import SaveButton from "./SaveButton";
import { validate } from "../helpers/validate";
import CustomSelect from "./CustomSelect";
import { regex } from "../helpers/regex";
import { useForm } from "../hooks/useForm";
import GridContainerWrapper from "./GridContainerWrapper";

const initialForm = {
  nombre: "",
  fechaNacimiento: "",
  curp: "",
  genero: "",
  domicilio: "",
  telefono: "",
  email: "",
};

const BeneficiaryForm = ({ formTitle }) => {
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
      regex.Name,
      form.nombre,
      "nombre",
      setErrors,
      errors,
      "Solo se permiten letras y punto ( . )"
    );

    validate(
      e.target,
      regex.CURP,
      form.curp,
      "curp",
      setErrors,
      errors,
      "Introduzca un CURP válido"
    );

    validate(
      e.target,
      regex.OnlyNumbers,
      form.telefono,
      "telefono",
      setErrors,
      errors,
      "Solo se permiten números"
    );

    validate(
      e.target,
      regex.Email,
      form.email,
      "email",
      setErrors,
      errors,
      "Introduzca un email válido"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <CustomInput
        name="nombre"
        label="Nombre Completo"
        error={errors.nombre}
        handleChange={handleChange}
        value={form.nombre}
        handleBlur={handleBlur}
      />
      <CustomSelect
        label="Género"
        value={form.genero}
        name="genero"
        options={["Masculino", "Femenino"]}
        handleChange={handleChange}
      />
      <GridContainerWrapper>
        <CustomInput
          type="date"
          name="fehcaNacimiento"
          label="Fecha de nacimiento"
          handleChange={handleChange}
          value={form.fechaNacimiento}
        />
        <CustomInput
          name="curp"
          label="CURP"
          error={errors.curp}
          handleChange={handleChange}
          value={form.curp}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>

      <CustomInput
        name="domicilio"
        label="Domicilio"
        handleChange={handleChange}
        value={form.domicilio}
      />
      <GridContainerWrapper>
        <CustomInput
          type="number"
          name="telefono"
          label="Teléfono"
          error={errors.telefono}
          handleChange={handleChange}
          value={form.telefono}
          handleBlur={handleBlur}
        />
        <CustomInput
          name="email"
          label="Email"
          error={errors.email}
          handleChange={handleChange}
          value={form.email}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <SaveButton errorsObj={errors} isDisabled={disableSaveButtonError} />
    </form>
  );
};

export default BeneficiaryForm;
