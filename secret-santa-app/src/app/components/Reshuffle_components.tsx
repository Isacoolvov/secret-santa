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
        {state?.successMessage}
        {state?.errorMessage}

        <form action={formAction}>
          <Grid item xs={12}>
            <Typography align="center" variant="h5" gutterBottom>
Название игры

            </Typography>

            <a href="#">Связаться с Организатором</a>
          </Grid>

          <Stack m={2} spacing={3}>
            <input type="hidden" name="game_id" value={ID} />
            <input type="hidden" name="access" value={access} />

Название игры

<div className="symbol">?</div>

            <MainButton1
              variant="contained"
              style={{ marginLeft: "10px" }}
              type="submit"
            >
              Жеребьевка
            </MainButton1>


Узнать подопечного
            
          </Stack>
        </form>
      </StyledBox>
    </Grid>
  );
};

export default Reshuffle_components;
