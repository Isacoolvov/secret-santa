import Santa from '../../../public/homeSanta.svg';
import Link from 'next/link';
import '../../css/home.css'
import { MainButton, SecondaryButton } from '@/helpers/uiHelpers';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
const Home = () => {
  return (
    <>
<main className='main'>
<Image src="/img/homeSanta.svg" alt="santa_thum" width={600} height={600} priority={true}/>
    <section className='content'>
  <h1 className='content-h1'>Тайный Санта</h1>
  <p className='content-p'>Организуй тайный обмен подарками между друзьями или коллегами</p>
  <Stack  direction="row">
<MainButton variant="contained">Создать игру</MainButton>
            <SecondaryButton variant="contained">Жеребьевка</SecondaryButton>
            </Stack>
</section>

</main>

    </>
  )
}

export default Home