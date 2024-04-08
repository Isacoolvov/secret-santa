// components/NavBar.js

import Link from "next/link";

export default function NavBar() {
  return (
    <header className='navBar'>
      <nav className="menu">
        <ul className='menu-items'>
          <li><a className='menu-item' href="#">Мои Игры</a></li>
          <li><a className='menu-item' href="#">Уведомления</a></li>
          <li><Link className='menu-item' href="/myAccount">Мой аккаунт</Link></li>
          <li><a className='menu-item' href="#">|</a></li>
          <li><a className='menu-item' href="#">RU</a></li>
        </ul>
      </nav>
    </header>
  );
}
