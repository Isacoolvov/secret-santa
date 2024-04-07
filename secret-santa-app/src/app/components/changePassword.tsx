"use client";
import { useFormState } from "react-dom";
import changeP from "../actions/my-account";
import saveTokens from "@/helpers/save-tokens";

export default function changePassword() {
  const [formstate, dispatch] = useFormState(changeP, {
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
        <input type="password" name="currentPassword" placeholder="currentPassword"/>
        <input type="password" name="newPassword" placeholder="newPassword" />
        <input type="password" name="confirmPassword" placeholder="confirmPassword" />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}
