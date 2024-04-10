'use client'
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainButton, SecondaryButton } from "@/helpers/uiHelpers";
import Image from 'next/image';
import Link from 'next/link';
import { orange } from '@mui/material/colors';



const InviteThankYouComponent = () => {


  const StyledBox = styled(Box)({
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  });

  const MainButton1 = styled(MainButton)({
    margin: '10px',

  });


  return (


    <Grid container justifyContent="center" alignItems="center">



      <StyledBox style={{width: '500px' , height:'550px'}}>
        <Grid >
       
        <Stack m={3} spacing={-1}>
        <Link href="/myGames/games" passHref>
  <MainButton1 variant="contained" style={{ marginLeft: '60px' , width:'350px' , height:'45px' }}>
    Мои игры
  </MainButton1>
</Link>

          
        </Stack>


        <Typography align="center" >
        <Image src="/img/myGameSanta.svg" alt="santa_thum" width={300} height={300} priority={true} />
          </Typography>
          <Typography align="center" style={{ marginTop: '-15px', fontSize:'16px'}}>
          Пока что Вы не участвуете в играх
          </Typography>
          <Typography align="center" style={{ marginTop: '10px' ,fontSize:'13px'}} >
          Создайте или вступите в игру, чтоб принять участие
          </Typography>
          <Typography align="center" variant="h5">
          <Link  href="/myGames/createGame" passHref>
            <SecondaryButton variant="contained" style={{color:'rgb(255, 99, 0)' , marginTop:'20px'}}>Создать игру</SecondaryButton>
            </Link>
          </Typography>
          


        </Grid>

        <Stack m={2} spacing={3}>

        </Stack>
      </StyledBox>
    </Grid>
  );
};

export default InviteThankYouComponent;
