import { useState } from "react";

const useForm = initialForm => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const errorsArray = Object.values(errors);
  const filteredErrorsArray = errorsArray.filter(error => error !== "");
  const disableSaveButtonError = filteredErrorsArray.length;

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Los datos se han guardado con éxito.");
  };

  return {
    form,
    setForm,
    errors,
    disableSaveButtonError,
    setErrors,
    handleChange,
    handleSubmit,
  };
};

export { useForm };
