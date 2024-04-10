import Login from "../components/login";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Login />
      <p>Еще не зарегистрировались?</p>
      <Link href="/signup">Регистрация</Link>
      <Link href="/forgot-password">Забыли пароль?</Link>
    </>
  );
}
