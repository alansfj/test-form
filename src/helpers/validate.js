const validate = (target, regex, formProperty, str, setError, error, text) => {
  if (target.name === str) {
    if (!regex.test(formProperty.trim()) && formProperty) {
      setError({
        ...error,
        [str]: text,
      });
    } else {
      setError({ ...error, [str]: "" });
    }
  }
};

export { validate };
