"use client";
import { useFormState } from "react-dom";
import signup from "../actions/sign-up";
import saveTokens from "@/helpers/save-tokens";
import { MainButton1, StyledBox } from "@/helpers/styles";
import Link from "next/link";
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import "@/css/myAccount.css";
import { redirect } from "next/navigation";
import Stack from '@mui/material/Stack';



export default function SingUp() {
  const [formstate, dispatch] = useFormState(signup, {
    error: null,
    data: null,
  });
  console.log(formstate);
  if (formstate?.data != null) {
    saveTokens(formstate.data);
    if (localStorage.getItem("invite_id")) {
      redirect(`/invitations_accept/${localStorage.getItem("invite_id")}`);
    }
    else {
      redirect('/')
    }
  }
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <StyledBox>


          <Grid item xs={12}>
            <Typography align="center" variant="h5" gutterBottom>
              Регистрация
            </Typography>
          </Grid>

          <span style={{ marginLeft: "190px", color: "red" }}>
            {formstate?.error}
          </span>

          <form className="form" action={dispatch}>

            <Stack m={2} spacing={3}>



              <TextField
                label="Ваше Имя"
                variant="outlined"
                fullWidth
                name="name"
              />

              <TextField
                label="Ваш E-mail"
                variant="outlined"
                fullWidth
                name="email"
              />

              <TextField
                label="Ваш пароль"
                variant="outlined"
                fullWidth
                name="password"
              />




              <MainButton1
                variant="contained"
                type="submit"
                style={{
                  marginLeft: "-24px",
                  height: "50px",
                  marginTop: "70px",
                }}
              >
                Зарегистрироваться
              </MainButton1>

            </Stack>

          </form>
          <span style={{ marginLeft: "190px" }}>
            Уже есть аккаунт? <Link href="/login">Войти</Link> {" "}
          </span>
        </StyledBox>
      </Grid>
    </>
  );
}
