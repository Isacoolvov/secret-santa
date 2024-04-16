'use client'

import { Box, Grid, Typography, Button, styled, Link } from "@mui/material";
import Image from 'next/image';
import { MainButton, SecondaryButton } from '@/helpers/uiHelpers';

const CenteredContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

});

const Content = styled(Box)({
  alignItems: 'center',
});

const Title = styled(Typography)({
  color: 'rgb(51, 51, 51)',
  fontFamily: 'DM Sans',
  fontSize: '2.99rem',
});

const Description = styled(Typography)({
  color: 'rgb(51, 51, 51)',
  fontFamily: 'DM Sans',
  fontSize: '1.53rem',
  marginBottom: '2.375rem',
});


const Home = () => {
  return (
    <CenteredContainer>
      <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center">
        <Grid item xs={7} md={4}>
          <Content>
            <Title variant="h1" gutterBottom>Тайный Санта</Title>
            <Description variant="body1">Организуйте тайный обмен подарками между друзьями или коллегами</Description>

            <Link href="/myGames/createGame" >
              <MainButton variant="contained" >Создать игру</MainButton>
            </Link>
          </Content>
        </Grid>
        <Grid item xs={12} md={4} alignItems="center">
          <Box textAlign="center">
            <Image src="/img/homeSanta.svg" alt="santa_thum" width={500} height={500} priority={true} />
          </Box>
        </Grid>
      </Grid>
    </CenteredContainer>
  );
}

export default Home;
