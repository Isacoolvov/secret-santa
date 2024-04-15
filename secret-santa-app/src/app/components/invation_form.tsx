"use client";

import { Box, Button, Grid, Typography } from '@mui/material';
import { MainButton } from "@/helpers/uiHelpers";
import { styled } from '@mui/material/styles';
import { navigateToCard } from '@/app/actions/navigate_to_card_action';
import { navigateToInviteParticipiant } from '@/app/actions/navigate_to_invite_action';
import { navigateToAddParticipiant } from '@/app/actions/navigate_to_add_participiant_action';
import { useParams } from 'next/navigation'
import React, { useMemo, useState } from 'react';

const MainButton1 = styled(MainButton)({
  margin: '10px',
});

const StyledBox = styled(Box)({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
});




export default function InvitationForm() {

  const [ID, setID] = useState('');
  const params = useParams()
  useMemo(() => {
    const game_id = params.game_id || '';
    setID(`${game_id}`);
  }, [params.game_id]);
  
  

  return (
    <Grid container justifyContent="center" alignItems="center" >
      <StyledBox style={{width: '500px' , height:'500px'}}>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" style={{marginTop:'50px'}}>
            <b >Добавить участников</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form action={navigateToCard}>
            <MainButton1 variant="contained" type="submit"  style={{marginTop:'50px' , marginLeft: '70px' ,width:'350px' , height:'60px' ,fontSize:'1rem'}}>Создать свою карточку участников</MainButton1>
            <input type="hidden" name="id" value={ID} />
            
          </form>
        </Grid>
        <Grid item xs={12}>
          <form action={navigateToAddParticipiant}>
            <MainButton1 variant="contained" type="submit"
            style={{ marginLeft: '70px' ,width:'350px' , height:'60px' ,fontSize:'1rem'}}>Добавить участников вручную</MainButton1>
            <input type="hidden" name="id" value={ID} />

          </form>
        </Grid>
        <Grid item xs={12}>
          <form action={navigateToInviteParticipiant}>
            <MainButton1 variant="contained" type="submit" style={{ marginLeft: '70px' ,width:'350px' , height:'60px' ,fontSize:'1rem'}}>Пригласить по ссылке</MainButton1>
            <input type="hidden" name="id" value={ID} />

          </form>
        </Grid>
      </StyledBox>
    </Grid>
  );
}