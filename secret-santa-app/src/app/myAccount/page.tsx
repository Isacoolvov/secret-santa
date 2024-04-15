"use client";


import MyAccount from "../components/myAccount";
import ChangePassword from "../components/changePassword";
import DeleteAccount from "../components/deleteAccount";
import '../../css/myAccount.css'
import UserInfo from '../components/user-info'
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { MainButton1, StyledBox } from "@/helpers/styles";


export default function Page() {
  return (
    <Grid container justifyContent="center" alignItems="center">
    <StyledBox>
   
      
      <UserInfo/>

        <Grid item xs={12}>
            <Typography align="center" variant="h5" gutterBottom>
            Личные данные
            </Typography>
          </Grid>

        <MyAccount />
        <ChangePassword />
        </StyledBox>
      </Grid>
  );
  
}
