"use client";

import React, { useMemo, useState } from "react";
import Stack from "@mui/material/Stack";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MainButton } from "@/helpers/uiHelpers";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { navigate_to_reshuffle } from "@/app/actions/navigate_to_reshuffle";
import { redirect } from "next/navigation";

import { getAccessToken } from "@/helpers/getTokens";

import { useFormState } from "react-dom";

const initialState = {
  successMessage: "",
  errorMessage: "",
};

const Reshuffle_components = () => {
  const [state, formAction] = useFormState(navigate_to_reshuffle, initialState);
  const [trigger, setTrigger]  = useState(false)

  const StyledBox = styled(Box)({
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
  });

  const MainButton1 = styled(MainButton)({
    margin: "10px",
  });

  const [ID, setID] = useState("");
  const params = useParams();
  useMemo(() => {
    const game_id = params.game_id || "";
    setID(`${game_id}`);
  }, [params.game_id]);
  useEffect(() => {
    if (state.successMessage === "Данные успешно отправлены на сервер") {
      redirect("/wish-list");
    } else if (state.successMessage === "Вы уже являетесь участником игры.") {
      redirect("/wish-list");
    }
  }, [state]);

  const access = getAccessToken();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <StyledBox>
      <Typography align="center" variant="h5" gutterBottom style={{color:'green'}}>
        {state?.successMessage}
        {state?.errorMessage}
      </Typography>
        

        <form action={formAction}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4" gutterBottom style={{color:'#ff6400' }}>

                                 Название игры

            </Typography>
            <a href="#" style={{marginLeft:'75px' ,color:'rgb(192, 227, 229)'}}>Связаться с Организатором</a>
          </Grid>

          <Stack m={2} spacing={3}>
            <input type="hidden" name="game_id" value={ID} />
            {access?
            <>
            <input type="hidden" name="access" value={access} />
            </>
            :<></>}
                  <span style={{marginLeft:'100px'}}>Название игры</span>

  <Typography className="symbol" 
    align="center" variant="h3" gutterBottom
    >{!trigger ? '?' : 'Danial'}</Typography>
    <Typography className="symbol" 
    align="center" variant="h5" gutterBottom
    >{!trigger ? '' : 'Монитор, Наушники'}</Typography>

            <MainButton1
              variant="contained"
              style={{ width: '20.25rem', height: '3.125rem' }}
              type="submit"
              
            >
              Жеребьевка
            </MainButton1>

            <MainButton1
              variant="contained"
              style={{ width: '20.25rem', height: '3.125rem' }}
              type="submit"
              onClick={() => {
                setTrigger(true)
              }}
              
            >
              Узнать подопечного
            </MainButton1>

            
          </Stack>
        </form>
      </StyledBox>
    </Grid>
  );
};

export default Reshuffle_components;
