"use client";
import forgotPassw from "../actions/forgot-pass";
import { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { MainButton1, StyledBox } from "@/helpers/styles";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  async function sendToMail() {
    const res = forgotPassw(email);
    setError(await res);
    if (error != "error") {
      setError("Пароль отправлен вам на почту");
    }
  }
  return (
    <div>

      <Grid container justifyContent="center" alignItems="center">

        <StyledBox>


          <Grid item xs={12}>
            <Typography align="center" variant="h5" gutterBottom>
              Забыл пароль
            </Typography>
          </Grid>

          <Stack m={10} spacing={0}>

            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />



            <MainButton1 onClick={sendToMail}
              variant="contained"
              type="submit"
              style={{

                height: "50px",
                marginBottom: "70px",
                marginTop: "30px",
              }}
            >
              Отправить пароль
            </MainButton1>

            <p>{error}</p>

          </Stack>
        </StyledBox>

      </Grid>

    </div>
  );
}
