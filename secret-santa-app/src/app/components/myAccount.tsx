"use client";
import { useFormState } from "react-dom";
import changeLogin from "../actions/my-account";
// import saveTokens from "@/helpers/save-tokens";
import removeAccessToken from "@/helpers/remove-access-token";
import '../../css/myAccount.css'
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { MainButton1, StyledBox } from "@/helpers/styles";
import Stack from '@mui/material/Stack';


export default function MyAccount() {
  const [formstate, dispatch] = useFormState(changeLogin, null);
  console.log(formstate);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <StyledBox>

              {/* {formstate?<></>:<></>} */}
              <p className="result">{formstate?.data ? <>
                {formstate.data}
                {removeAccessToken()}
              </> : <></>}{formstate?.error}</p>



          <form className="form" action={dispatch}>

            <Stack m={2} spacing={3}>

              <TextField
                label="Ваше Имя"
                variant="outlined"
                fullWidth
                name="newLogin"
              />

              <TextField
                label="Ваш Email"
                variant="outlined"
                fullWidth
                name="newEmail"
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
        </StyledBox>
      </Grid>
    </>
  );
}
