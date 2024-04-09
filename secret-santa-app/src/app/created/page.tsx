import Link from 'next/link';
import GameCreated from "../components/gamecreated";
const Created = () => {
  return (
    
    <div><Link href={`invitation/`}><GameCreated/> Создать игру</Link></div>
  )
}

export default  Created;