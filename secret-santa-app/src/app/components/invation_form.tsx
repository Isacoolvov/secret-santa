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
    <Grid container justifyContent="center" alignItems="center">
      <StyledBox>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
            Добавить участников
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form action={navigateToCard}>
            <MainButton1 variant="contained" type="submit">Создать свою карточку участников</MainButton1>
            <input type="hidden" name="id" value={ID} />
            <button>Submit URL</button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <form action={navigateToAddParticipiant}>
            <MainButton1 variant="contained" type="submit">Добавить участников вручную</MainButton1>
            <input type="hidden" name="id" value={ID} />

          </form>
        </Grid>
        <Grid item xs={12}>
          <form action={navigateToInviteParticipiant}>
            <MainButton1 variant="contained" type="submit">Пригласить по ссылке</MainButton1>
            <input type="hidden" name="id" value={ID} />
            <button>Submit URL</button>

          </form>
        </Grid>
      </StyledBox>
    </Grid>
  );
}