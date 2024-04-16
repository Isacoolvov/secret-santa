"use client";
import { useFormState } from "react-dom";
import changeLogin from "../actions/my-account";
import removeAccessToken from "@/helpers/remove-access-token";

import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { MainButton1, StyledBox } from "@/helpers/styles";
import Stack from '@mui/material/Stack';
type Props ={
  
  name?:string,
  email?:string
}

export default function MyAccount({name ,email}:Props) {
  const [formstate, dispatch] = useFormState(changeLogin, null);
  console.log(formstate);

  return (
    <>

              <p className="result">{formstate?.data ? <>
                {formstate.data}
                {removeAccessToken()}
              </> : <></>}{formstate?.error}</p>



          <form className="form" action={dispatch}>

          <Stack m={2} spacing={3}>

              <TextField
                label={name}
                variant="outlined"
                fullWidth
                name="newLogin"
              />

              <TextField
                label={email}
                variant="outlined"
                fullWidth
                name="newEmail"
              />


              <MainButton1
                variant="contained"
                type="submit"
                style={{
        
                  height: "50px",
                  marginBottom: "70px",
                  marginTop: "30px",
                }}
              >
                Сохранить
              </MainButton1>


            </Stack>

          </form>
    </>
  );
}
