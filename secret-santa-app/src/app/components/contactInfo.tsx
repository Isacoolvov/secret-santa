"use client"
import { useEffect, useState } from "react";
import { Typography, Grid, TextField } from "@mui/material";
import { getAccessToken } from "@/helpers/getTokens";
import { MainButton1, StyledBox } from "@/helpers/styles";
import { useParams, useRouter } from "next/navigation";
import { navigateToWishList } from "../navigation/navigate_to_wishList";
import Stack from '@mui/material/Stack';



export default function UserInfo() {
  const router = useRouter()
  const [isLoading, setLoading] = useState(true);
  const access = getAccessToken();
  const game = localStorage.getItem('GameId')
  const fetchUrl = `http://51.107.14.25:8080/gameuser/${localStorage.getItem('GameId')}/contact-info`;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const userName = formData.get("userName");
    const phoneNumber = formData.get("userPhoneNumber");

    try {
      const response = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access}`,
        },
        body: JSON.stringify({ email, userName, phoneNumber })
      });
      if (response.ok) {
        // Handle success
        console.log(response);
        router.push(`/wish-list/`)
      } else {
        Promise.reject(new Error('Failed to save data'));
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

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
            <b>Контактные данные </b>
          </Typography>



          <form className="form" onSubmit={handleSubmit}>
            <Stack m={2} spacing={3}>

              <TextField
                label="Ваш E-mail"
                variant="outlined"
                fullWidth
                name="email"
              />



              <TextField
                label="Ваше Имя"
                variant="outlined"
                fullWidth
                name="userName"
              />


              <TextField
                label="Номер телефона"
                variant="outlined"
                fullWidth
                name="userPhoneNumber"
              />

              <MainButton1
                variant="contained"
                type="submit"
                style={{

                  height: "50px",
                  marginBottom: "70px",
                  marginTop: "30px",
                }}              >
                Далее
              </MainButton1>

            </Stack>

          </form>
        </StyledBox>
      </Grid>
    </>
  );
}
