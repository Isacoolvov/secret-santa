"use client";
import { useFormState } from "react-dom";
import login from "../actions/log-in";
import saveTokens from "@/helpers/save-tokens";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const [formstate, dispatch] = useFormState(login, {
    error: null,
    data: null,
  });
  console.log(formstate);
  if (formstate?.data != null) {
    saveTokens(formstate.data);
    router.push('/home')
    
  }

  return (
    <div>
      <form action={dispatch}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Войти</button>
      </form>
      {formstate?.data === undefined?<>не правильный логин или пароль</>:<></>}
    </div>
  );
}
