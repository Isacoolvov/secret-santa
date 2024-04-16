"use client";
import forgotPassw from "../actions/forgot-pass";
import { useState } from "react";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  async function sendToMail() {
    const res = forgotPassw(email);
    setError(await res);
    if (error != "error") {
      setError("Пароль отправлен вам на почту");
    }
  }
  return (
    <div>
      <p>Email</p>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        name="email"
      />
      <button onClick={sendToMail}>Отправить пароль</button>
      <p>{error}</p>
    </div>
  );
}
