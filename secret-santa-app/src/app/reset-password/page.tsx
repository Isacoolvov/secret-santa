"use client";
import validatePassword from "@/helpers/validatePassword";
import { useState } from "react";
import { usePathname } from "next/navigation";
type Params = {
  params: {
    token: string;
  };
};
export default function ResetPassword({ params: { token } }: Params) {
  console.log(token);
  const [on, setOn] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function checkPass() {
    if (password !== confirm) {
      setIsCorrect("Пароли должны совподать");
    } else if (validatePassword(password)) {
      setIsCorrect("Пароль должен быть длинее 7 символов");
    } else if (password === confirm && validatePassword(password)) {
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
