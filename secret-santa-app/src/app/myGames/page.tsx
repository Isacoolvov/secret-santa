'use client'
import Stack from '@mui/material/Stack';
import { Grid, Typography } from '@mui/material';
import { SecondaryButton } from "@/helpers/uiHelpers";
import Image from 'next/image';
import Link from 'next/link';
import { MainButton1, StyledBox } from '@/helpers/styles';



const myGames = () => {
  return (


    <Grid container justifyContent="center" alignItems="center">



      <StyledBox >
        <Grid >

          <Stack m={3} spacing={-1}>
            <Link href="/myGames/games" passHref>
              <MainButton1 variant="contained" style={{ width: '21.875rem', height: '2.813rem' }}>
                Мои игры
              </MainButton1>
            </Link>


          </Stack>


          <Typography align="center" >
            <Image src="/img/myGameSanta.svg" alt="santa_thum" width={300} height={300} priority={true} />
          </Typography>
          <Typography align="center" style={{ marginTop: '-0.938rem', fontSize: '1rem' }}>
            Пока что Вы не участвуете в играх
          </Typography>
          <Typography align="center" style={{ marginTop: '0.625rem', fontSize: '0.813rem' }} >
            Создайте или вступите в игру, чтоб принять участие
          </Typography>
          <Typography align="center" variant="h5">
            <Link href="/myGames/createGame" passHref>
              <SecondaryButton variant="contained" style={{ color: 'rgb(255, 99, 0)', marginTop: '1.25rem' }}>Создать игру</SecondaryButton>
            </Link>
          </Typography>



        </Grid>

      </StyledBox>
    </Grid>
  );
};

export default myGames;
