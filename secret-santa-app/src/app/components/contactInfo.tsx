"use client"
import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { getAccessToken } from "@/helpers/getTokens";
import { MainButton1, StyledBox } from "@/helpers/styles";
import {  useParams, useRouter } from "next/navigation";
import  {navigateToWishList}  from "../navigation/navigate_to_wishList";
import { BASE_URL } from "@/helpers/helpers_base_url";
import '@/css/myAccount.css'
export default function UserInfo() {
  const router =useRouter()
  const [isLoading, setLoading] = useState(true);
  const access = getAccessToken();
  const game = localStorage.getItem('id')
  const fetchUrl = `${BASE_URL}/gameuser/${localStorage.getItem('id')}/contact-info`;

  const handleSubmit = async (event:any) => {
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
          <form className="form"  onSubmit={handleSubmit}>
            <label>
              Ваш E-mail
              <input
                type="email"
                name="email"
               
              />
            </label>
            <label>
            Ваше Имя
              <input type="text" name="userName"  />
            </label>
            <label>
            Номер телефона
              <input type="text" name="userPhoneNumber"  />
            </label>
            <MainButton1 
            variant="contained"
           type="submit"
            style={{marginTop:'75px',marginLeft: '190px' ,width:'180px' ,height:'50px' }}
          >
        Далее
          </MainButton1>
          </form>
        </StyledBox>
      </Grid>
    </>
  );
}
