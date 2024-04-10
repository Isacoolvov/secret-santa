"use client";
import { useFormState } from "react-dom";
import signup from "../actions/sign-up";
import saveTokens from "@/helpers/save-tokens";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SingUp() {
  const [formstate, dispatch] = useFormState(signup, {
    error: null,
    data: null,
  });
  const [message, setMessage] = useState("");
  console.log(formstate);
  if (formstate.data != null) {
    saveTokens(formstate.data);
    redirect("/home");
  }

  return (
    <div>
      <form action={dispatch}>
        <p>Имя</p>
        <input type="text" name="name" />
        <p>Почта</p>
        <input type="email" name="email" />
        <p>Пароль</p>
        <input type="password" name="password" />
        <button type="submit">Регистрация</button>
        <p>{formstate.error}</p>
      </form>
    </div>
  );
}
