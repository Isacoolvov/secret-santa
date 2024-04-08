"use client";
import Link from "next/link";
import isEntired from "@/helpers/entired";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/helpers/getTokens";

export default function NavBar() {
//   const pathname = usePathname();
  const [changes, setChanges] = useState(false);
  useEffect(() => {
    if(getAccessToken()){
        setChanges(true);
    }
   
  }, [changes]);
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
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}