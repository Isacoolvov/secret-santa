import Link from 'next/link'
import React from 'react'
import MyGameSanta from '../../../public/myGameSanta.svg'
const myGames = () => {
  return (
<>
<li ><Link  className='menu-item' href="/myGames/games">Мои игры </Link></li>
<img src={MyGameSanta.src} alt="Santa" />
<li ><Link  className='menu-item' href="/myGames/createGame">Создать Игру</Link></li>
</>
  )
}

export default myGames