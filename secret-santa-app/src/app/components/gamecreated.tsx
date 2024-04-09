'use client'
import { Box,Grid, Typography } from '@mui/material';
import { MainButton } from "@/helpers/uiHelpers";
import { styled } from '@mui/material/styles';

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
       
      
      </StyledBox>
    </Grid>
  );
}