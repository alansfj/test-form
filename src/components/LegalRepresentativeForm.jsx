import React from "react";
import CustomInput from "./CustomInput";
import SaveButton from "./SaveButton";
import "../Sass/AllFormsStyles.scss";
import { validate } from "../helpers/validate";
import CustomSelect from "./CustomSelect";
import { regex } from "../helpers/regex";
import { useForm } from "../hooks/useForm";
import GridContainerWrapper from "./GridContainerWrapper";

const initialForm = {
  nombre: "",
  genero: "",
  fechaNacimiento: "",
  entidadNacimiento: "",
  paisNacimiento: "",
  curp: "",
  rfc: "",
  domicilio: "",
  estadoCivil: "",
  email: "",
  telefono: "",
  documentoID: "",
};

const LegalRepresentativeForm = ({ formTitle }) => {
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
      regex.OnlyLetters,
      form.paisNacimiento,
      "paisNacimiento",
      setErrors,
      errors,
      "Solo se permiten letras"
    );

    validate(
      e.target,
      regex.OnlyLetters,
      form.entidadNacimiento,
      "entidadNacimiento",
      setErrors,
      errors,
      "Solo se permiten letras"
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
      regex.RFC,
      form.rfc,
      "rfc",
      setErrors,
      errors,
      "Introduzca un RFC válido"
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

    validate(
      e.target,
      regex.OnlyNumbers,
      form.telefono,
      "telefono",
      setErrors,
      errors,
      "Solo se permiten números"
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
      <GridContainerWrapper>
        <CustomSelect
          label="Género"
          value={form.genero}
          name="genero"
          options={["Masculino", "Femenino"]}
          handleChange={handleChange}
        />

        <CustomInput
          type="date"
          name="fechaNacimiento"
          label="Fecha de nacimiento"
          handleChange={handleChange}
          value={form.fechaNacimiento}
        />
      </GridContainerWrapper>
      <GridContainerWrapper>
        <CustomInput
          name="paisNacimiento"
          label="País de Nacimiento"
          error={errors.paisNacimiento}
          handleChange={handleChange}
          value={form.paisNacimiento}
          handleBlur={handleBlur}
        />
        <CustomInput
          name="entidadNacimiento"
          label="Estado de Nacimiento"
          error={errors.entidadNacimiento}
          handleChange={handleChange}
          value={form.entidadNacimiento}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <GridContainerWrapper>
        <CustomInput
          name="curp"
          label="CURP"
          error={errors.curp}
          handleChange={handleChange}
          value={form.curp}
          handleBlur={handleBlur}
        />
        <CustomInput
          name="rfc"
          label="RFC"
          error={errors.rfc}
          handleChange={handleChange}
          value={form.rfc}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <CustomInput
        name="domicilio"
        label="Domicilio Particular"
        handleChange={handleChange}
        value={form.domicilio}
      />
      <CustomSelect
        label="Estado Civil"
        value={form.estadoCivil}
        name="estadoCivil"
        options={[
          "Soltero/a",
          "Casado/a",
          "Unión Libre",
          "Separado/a",
          "Divorciado/a",
          "Viudo/a",
        ]}
        handleChange={handleChange}
      />
      <GridContainerWrapper>
        <CustomInput
          name="email"
          label="Email"
          error={errors.email}
          handleChange={handleChange}
          value={form.email}
          handleBlur={handleBlur}
        />
        <CustomInput
          type="number"
          name="telefono"
          label="Teléfono"
          error={errors.telefono}
          handleChange={handleChange}
          value={form.telefono}
          handleBlur={handleBlur}
        />
      </GridContainerWrapper>
      <CustomInput
        type="file"
        name="documentoID"
        label="Documento de Identificación"
        accept="image/*,.pdf,.doc,.docx"
        handleChange={handleChange}
        value={form.documentoID}
      />
      <SaveButton errorsObj={errors} isDisabled={disableSaveButtonError} />
    </form>
  );
};

export default LegalRepresentativeForm;
