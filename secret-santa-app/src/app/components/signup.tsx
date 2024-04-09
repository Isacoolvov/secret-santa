"use client";
import { useFormState } from "react-dom";
import signup from "../actions/sign-up";
import saveTokens from "@/helpers/save-tokens";

export default function SingUp() {
  const [formstate, dispatch] = useFormState(signup, {
    error: null,
    data: null,
  });
  console.log(formstate);
  if (formstate?.data != null) {
    saveTokens(formstate.data);
  }

  return (
    <div>
      <form action={dispatch}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
}
