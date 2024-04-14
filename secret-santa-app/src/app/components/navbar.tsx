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
              
              <li >
                <Link  className='menu-item' href="/myGames">Мои Игры
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
                <button onClick={logout}>Выйти</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}