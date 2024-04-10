"use client";
import Link from "next/link";
import isEntired from "@/helpers/entired";
import removeAccessToken from "@/helpers/remove-access-token";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setChanges(isEntired);
  }, [pathname]);
  const logOut = () => {
    removeAccessToken();
    router.push("/home");
  };

  return (
    <div className="navBar">
      <nav className="menu">
        <ul className="menu-items">
          {!changes ? (
            <>
              <li>
                <Link className="menu-item" href="/signup">
                  Регистрация
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/login">
                  Войти
                </Link>
              </li>
              <li>
                <a className="menu-item" href="#">
                  |
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  RU
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="menu-item" href="/myGames">
                  Мои Игры
                </Link>
              </li>

              <li>
                <a className="menu-item" href="#">
                  Уведомления
                </a>
              </li>
              <li>
                <Link className="menu-item" href="/myAccount">
                  Мой аккаунт
                </Link>
              </li>
              <li>
                <a className="menu-item" href="#">
                  |
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  RU
                </a>
              </li>
              <li>
                <button onClick={logOut} className="menu-item">
                  Выйти
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
