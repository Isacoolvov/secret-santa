"use client";
import { useFormState } from "react-dom";
import { useState } from "react";
import login from "../actions/log-in";
import saveTokens from "@/helpers/save-tokens";
import { redirect } from "next/navigation";

export default function Login() {
  const [formstate, dispatch] = useFormState(login, {
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
        <p>Email</p>
        <input type="email" name="email" />
        <p>Password</p>
        <input type="password" name="password" />
        <button type="submit">Войти</button>
        <p>{formstate.error}</p>
      </form>
    </div>
  );
}
