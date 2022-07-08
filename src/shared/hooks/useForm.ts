import { useState, ChangeEventHandler } from "react";

interface UseFormParam {
  [name: string]: any;
}

const useForm = (
  initialValues: UseFormParam,
): [
  UseFormParam,
  ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
] => {
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (event) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value,
    }));
  };

  return [formValues, handleChange];
};

export default useForm;
