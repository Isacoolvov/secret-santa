"use client";

import { Box, Button, Grid, Typography } from '@mui/material';
import { MainButton } from "@/helpers/uiHelpers";
import { styled } from '@mui/material/styles';

const MainButton1 = styled(MainButton)({
  margin: '10px',
});

const StyledBox = styled(Box)({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
});


export default function InvitationForm() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <StyledBox>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
            Добавить участников
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MainButton1 variant="contained">Создать свою карточку участников</MainButton1>
        </Grid>
        <Grid item xs={12}>
          <MainButton1 variant="contained">Добавить участников вручную</MainButton1>
        </Grid>
        <Grid item xs={12}>
          <MainButton1 variant="contained">Пригласить по ссылке</MainButton1>
        </Grid>
      </StyledBox>
    </Grid>
  );
}