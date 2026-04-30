import { useState } from 'react';

export const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values, resetForm);
  };

  return { values, handleChange, resetForm, handleSubmit };
};
