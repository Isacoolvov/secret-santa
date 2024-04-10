import SingUp from "../components/signup";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <SingUp />
      <p>Уже есть аккаунт?</p>
      <Link href="/login">Войти</Link>
    </>
  );
}
