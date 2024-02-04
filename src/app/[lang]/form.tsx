"use client";

import { hashPassword } from "@/actions/test";
import { useFormState } from "react-dom";


const Form = () => {
  const [state, action] = useFormState(hashPassword, {
    type: "idle",
  });
  return (
    <form action={action}>
      <input type="password" name="password" />
      <button type="submit">Hashear</button>
    </form>
  );
};

export default Form;
