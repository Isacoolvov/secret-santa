"use client";
import { useFormState } from "react-dom";
import login from "../actions/log-in";
import saveTokens from "@/helpers/save-tokens";
import { useRouter } from "next/navigation";
import { MainButton1, StyledBox } from "@/helpers/styles";
import { Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import "@/css/myAccount.css";
import Stack from '@mui/material/Stack';

export default function Login() {
  const router = useRouter();
  const [formstate, dispatch] = useFormState(login, {
    error: null,
    data: null,
  });
  console.log(formstate);
  if (formstate?.data != null) {
    saveTokens(formstate.data);
    router.push("/");
  }

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <StyledBox style={{ width: "550px", height: "600px" }}>
          <Typography
            align="center"
            variant="h5"
            gutterBottom
            style={{ marginTop: "50px", marginBottom: "40px" }}
          >
            <b> Вход</b>
          </Typography>
          <form className="form" action={dispatch}>
          <Stack m={2} spacing={3}>

            <TextField
              label="Ваш E-mail"
              variant="outlined"
              fullWidth
              name="email"
            />


            <TextField
              label="Ваш Password"
              variant="outlined"
              fullWidth
              name="password"
            />


            <span
              style={{
                marginLeft: "11.875rem",
                fontSize: "0.94rem",
                color: "red",
              }}
            >
              {formstate?.error}
            </span>
            <MainButton1
              variant="contained"
              type="submit"
              style={{
                width: "11.25rem",
                height: "3.125rem",
                marginLeft: "10rem",
              }}
            >
              Войти
            </MainButton1>

          
            <span
              style={{
                fontSize: "0.87rem",
                color: "rgb(151, 151, 151)",
                marginLeft: "4.375rem",
              }}
            >
              Продолжая, вы даете согласие на обработку персональных данных.
            </span>

           
            <Link href="/forgot-password">
              <span
                style={{
                  marginLeft: "11.875rem",
                  fontSize: "0.94rem",
                  color: "rgb(151, 151, 151)",
                }}
              >
                {" "}
                Забыли пароль?
              </span>
            </Link>


            </Stack>


          </form>
        </StyledBox>
      </Grid>
    </>
  );
}
