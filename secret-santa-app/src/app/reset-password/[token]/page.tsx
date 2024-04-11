"use client";
import validatePassword from "@/helpers/validatePassword";
import { useState } from "react";
import resetPass from "@/app/actions/reset-pass";

type Params = {
  params: {
    token: string;
  };
};
export default function ResetPassword({ params: { token } }: Params) {
  const [on, setOn] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function checkPass() {
    if (password !== confirm) {
      setIsCorrect("Пароли должны совподать");
    } else if (password === confirm && validatePassword(password)) {
      resetPass(password, confirm, token);
      setIsCorrect("Пароль заменен");
    }
  }
  return (
    <div>
      <p>Введите новый пароль</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
      />
      <p>Повторите новый пароль</p>
      <input
        onChange={(e) => setConfirm(e.target.value)}
        type="password"
        name="password"
        id="password"
      />
      <button onClick={checkPass}>Подтвердить</button>
      <p>{isCorrect}</p>
    </div>
  );
}
