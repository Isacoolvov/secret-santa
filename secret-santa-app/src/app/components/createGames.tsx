"use client";
import { useFormState } from "react-dom";
import createGame from "../actions/create-games";
import '../../css/myAccount.css'
import { useState } from "react";
import localsaveGameId from "@/helpers/saveGameId";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography, styled, TextField } from "@mui/material";
import { MainButton, SwitchMain } from "@/helpers/uiHelpers";
import { MainButton1, StyledBox } from "@/helpers/styles";
import Stack from '@mui/material/Stack';

export default function CreateGames() {
  const [formstate, createdispatch] = useFormState(createGame, {
    error: null,
    data: null,
  });
  const router = useRouter()
  const [priceLimitChecked, setPriceLimitChecked] = useState(false)
  console.log(formstate);
  if (formstate?.data != null) {
    localsaveGameId(formstate.data.id);
    console.log(formstate.data.id);
    router.push(`/gameCreated/${formstate.data.id}`)
  }
  return (
   


      <Grid container justifyContent="center" alignItems="center">


        <StyledBox>
          <Typography align="center" variant="h5" gutterBottom style={{ marginTop: '50px', marginBottom: '40px' }} >
            <b> Создать игру</b>
          </Typography>
          <form className="form" action={createdispatch}>

            <Stack m={2} spacing={3}>


              <TextField
                label="Название игры"
                variant="outlined"
                fullWidth
                name="name"
              />



              <TextField
                label="Идентификатор (Random)"
                variant="outlined"
                fullWidth
                name="random"
              />




              <label >
                <Typography variant="body1">
                  <span>Максимальная стоимость подарка</span>
                </Typography>
                <SwitchMain
                  defaultChecked={priceLimitChecked}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => setPriceLimitChecked(!priceLimitChecked)} />

              </label>
              <Typography variant="body2" style={{ fontSize: '1rem', marginLeft: '40px', }}>При включенной опции участникам будет показано ограничение, которому они должны будут следовать </Typography>
              {priceLimitChecked === true ? <>


                <TextField
                  label="Укажите максимальную стоимость подарка"
                  variant="outlined"
                  fullWidth
                  name="maxPrice"
                />



              </> : <></>}
              
              <MainButton1 
                variant="contained"
                type="submit"
                style={{ width: '11.25rem', height: '3.125rem' }}
              >
                Создать игру

              </MainButton1>

            </Stack>


          </form>
        </StyledBox>



      </Grid>

   
  );
}
