"use client";
import { useFormState } from "react-dom";
import changeP from "../actions/change-password";
import '../../css/myAccount.css'
import DeleteAccount from "./deleteAccount";

import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { MainButton1, StyledBox } from "@/helpers/styles";
import Stack from '@mui/material/Stack';

export default function ChangePassword() {
  const [formstate, dispatch] = useFormState(changeP, null);
  console.log(formstate);

  return (
    <div>

      <p className="result"> {formstate?.data === '' ? <>{formstate.error} Текущий пароль не совпадает </> : <>{formstate?.data}</>}</p>


      <form action={dispatch}>

        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
            Сменить пароль
          </Typography>
        </Grid>

        <Stack m={2} spacing={3}>

          <TextField
            label="Текущий пароль"
            variant="outlined"
            fullWidth
            name="currentPassword"
          />

          <TextField
            label="Новый пароль"
            variant="outlined"
            fullWidth
            name="newPassword"
          />

          <TextField
            label="Повторите пароль"
            variant="outlined"
            fullWidth
            name="confirmPassword"
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
            Сохранить
          </MainButton1>



        </Stack>
      </form>
      <DeleteAccount />
    </div>
  );
}
