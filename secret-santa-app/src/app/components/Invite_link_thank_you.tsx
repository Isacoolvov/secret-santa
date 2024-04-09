'use client'


import React, { useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainButton } from "@/helpers/uiHelpers";



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



      <StyledBox>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
            Приглашения отправлены
          </Typography>


          <Typography align="center" variant="h5" gutterBottom>
            <img src="/img/santa_thumb.PNG" alt="santa_thumb"/>
          </Typography>


          <Typography align="center" variant="body2" gutterBottom>
            Вам придет уведомление, как только участники примут Ваше приглашение
          </Typography>

        </Grid>

        <Stack m={2} spacing={3}>

        <form action="/">
          <MainButton1
            variant="contained"
           type="submit"
            style={{ marginLeft: '10px' }}
          >
            На главную

          </MainButton1>
          </form>
        </Stack>
      </StyledBox>
    </Grid>
  );
};

export default InviteThankYouComponent;
