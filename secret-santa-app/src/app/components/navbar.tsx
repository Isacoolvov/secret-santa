"use client";
import Link from "next/link";
import isEntired from "@/helpers/entired";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import removeAccessToken from "@/helpers/remove-access-token";
export default function NavBar() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(false);
  useEffect(() => {
    setChanges(isEntired);
  }, [pathname]);
  function logout() {
    removeAccessToken()
    window.location.reload();
  }
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
                <Link className="menu-item" href="/#">
                  |
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/#">
                  RU
                </Link>
              </li>
            </>
          ) : (
            <>

              <li >
                <Link className='menu-item' href="/myGames">Мои Игры
                </Link>
              </li>

              <li>
                <Link className="menu-item" href="/#">
                  Уведомления
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/myAccount">
                  Мой аккаунт
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/#">
                  |
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/#">
                  RU
                </Link>
              </li>
              <li>

                <Link className="menu-item" href="/#" onClick={logout}>
                  Выйти
                </Link>

              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}