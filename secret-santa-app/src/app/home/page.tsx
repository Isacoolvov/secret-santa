import '../../css/header.css'
import Santa from '../../../public/homeSanta.svg';
import Link from 'next/link';
const Home = () => {
  return (
    <>
<header className='navBar'>
<nav className="menu">
  <ul className='menu-items'>
    <li ><a  className='menu-item' href="#">Мои Игры</a></li>
    <li ><a  className='menu-item' href="#">Уведомления</a></li>
    <li ><Link  className='menu-item' href="/myAccount">Мой аккаунт</Link></li>
    <li ><a  className='menu-item' href="#">|</a></li>
    <li ><a  className='menu-item' href="#">RU</a></li>
  </ul>
</nav>
</header>

<main className='main'>
    <img className='imgSanta' src={Santa.src} alt="SecretSanta" />
    <section className='content'>
  <h1 className='content-h1'>Тайный Санта</h1>
  <p className='content-p'>Организуй тайный обмен подарками между друзьями или коллегами</p>
</section>
</main>
    </>
  )
}

export default Home