import '../../css/header.css'
import Santa from '../../../public/homeSanta.svg';
import Link from 'next/link';
import { MainButton, SecondaryButton } from '@/helpers/uiHelpers';
import Stack from '@mui/material/Stack';
const Home = () => {
  return (
    <>
{/* <header className='navBar'>
<nav className="menu">
  <ul className='menu-items'>
    <li ><Link  className='menu-item' href="/myGames">Мои Игры</Link></li>
    <li ><a  className='menu-item' href="#">Уведомления</a></li>
    <li ><Link  className='menu-item' href="/myAccount">Мой аккаунт</Link></li>
    <li ><a  className='menu-item' href="#">|</a></li>
    <li ><a  className='menu-item' href="#">RU</a></li>
  </ul>
</nav>
</header> */}

<main className='main'>
    <img className='imgSanta' src={Santa.src} alt="SecretSanta" />
    <section className='content'>
  <h1 className='content-h1'>Тайный Санта</h1>
  <p className='content-p'>Организуй тайный обмен подарками между друзьями или коллегами</p>
  <Stack spacing={2} direction="row">
<MainButton variant="contained">Создать игру</MainButton>
            <SecondaryButton variant="contained">Жеребьевка</SecondaryButton>
            </Stack>
</section>

</main>

    </>
  )
}

export default Home