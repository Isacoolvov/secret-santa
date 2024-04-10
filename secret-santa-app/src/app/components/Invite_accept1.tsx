'use client'


import React, { useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainButton } from "@/helpers/uiHelpers";
import { useParams } from 'next/navigation';
import { navigateToAcceptSend } from '@/app/actions/navigate_to_accept_send';



const InviteAcceptComponent1 = () => {


  const StyledBox = styled(Box)({
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  });

  const MainButton1 = styled(MainButton)({
    margin: '10px',
  });


  const [ID, setID] = useState('');
  const params = useParams()
  useMemo(() => {
    const game_id = params.game_id || '';
    setID(`${game_id}`);
  }, [params.game_id]);



  return (


    <Grid container justifyContent="center" alignItems="center">



      <StyledBox>

      <form action={navigateToAcceptSend}>


        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
            Подтвердить приглашение
          </Typography>


        </Grid>

        <Stack m={2} spacing={3}>

        <input type="hidden" name="gameId" value={ID} />
         
          <MainButton1
            variant="contained"
            style={{ marginLeft: '10px' }}
            type="submit"
          >
            Подтвердить приглашение

          </MainButton1>

        </Stack>

        </form>
      </StyledBox>
    </Grid>
  );
};

export default InviteAcceptComponent1;
