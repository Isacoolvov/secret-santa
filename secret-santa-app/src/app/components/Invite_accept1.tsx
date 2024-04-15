"use client";

import React, { useMemo, useState } from "react";
import Stack from "@mui/material/Stack";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MainButton } from "@/helpers/uiHelpers";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { navigateToAcceptSend } from "@/app/actions/navigate_to_accept_send";
import { redirect } from "next/navigation";

import { getAccessToken } from "@/helpers/getTokens";

import { useFormState } from "react-dom";

type initial = {
  successMessage: string,
  errorMessage:any,
};
const initialState:initial = {
  successMessage: "",
  errorMessage:'',
};

const InviteAcceptComponent1 = () => {
  const [state, formAction] = useFormState(navigateToAcceptSend, initialState);

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
      console.log(state)
      redirect("/wish-list");
    } else if (state.successMessage === "Вы уже являетесь участником игры.") {
      console.log(state)
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
              Подтвердить приглашение1
            </Typography>
          </Grid>

          <Stack m={2} spacing={3}>
            <input type="hidden" name="invite_id" value={ID} />
            {access?<>
              <input type="hidden" name="access" value={access} />

            </>:<></>}

            <MainButton1
              variant="contained"
              style={{ marginLeft: "10px" }}
              type="submit"
            >
              Подтвердить
            </MainButton1>
          </Stack>
        </form>
      </StyledBox>
    </Grid>
  );
};

export default InviteAcceptComponent1;
