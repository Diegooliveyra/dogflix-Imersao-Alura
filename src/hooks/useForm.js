import { useState } from 'react';

function useForm(valoresInciais) {
  const [values, setValues] = useState(valoresInciais);
  function setValue(key, values) {
    setValues({
      ...values,
      [key]: values,
    });
  }
  function handleChange(eventInfo) {
    setValue(eventInfo.target.getAttribute('name'), eventInfo.target.values);
  }
  function clearForm() {
    setValues(valoresInciais);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
