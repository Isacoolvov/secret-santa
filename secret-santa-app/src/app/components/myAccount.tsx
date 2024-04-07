"use client";
import { useFormState } from "react-dom";
import changeLogin from "../actions/my-account";
import saveTokens from "@/helpers/save-tokens";

export default function MyAccount() {
  const [formstate, dispatch] = useFormState(changeLogin, {
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
        <input type="text" name="newLogin" placeholder="login"/>
        <input type="email" name="newEmail" placeholder="email" />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}
