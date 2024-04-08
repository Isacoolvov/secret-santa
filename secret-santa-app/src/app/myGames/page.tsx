import Link from 'next/link'
import React from 'react'

const myGames = () => {
  return (
<>
<li ><Link  className='menu-item' href="/myGames/games">Мои игры </Link></li>
<li ><Link  className='menu-item' href="/myGames/createGame">Создать Игру</Link></li>



</>
  )
}

export default myGames