"use client"
import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { getAccessToken } from "@/helpers/getTokens";
import { StyledBox } from "@/helpers/styles";
import {  useParams, useRouter } from "next/navigation";
import  {navigateToWishList}  from "../navigation/navigate_to_wishList";

export default function UserInfo() {
  const params = useParams();
  const router =useRouter()
  const game_id = params.game_id || 'dd';
  console.log('useParams' , game_id);
  
  const [dataFetch, setDataFetch] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const access = getAccessToken();
  const game = localStorage.getItem('id')
  const fetchUrl = `http://51.107.14.25:8080/gameuser/${localStorage.getItem('id')}/contact-info`;

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
        // router.push(`/wish-list/${game_id}`)
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
            <b>Contacts</b>
          </Typography>
          <form className="form"  onSubmit={handleSubmit}>
            <label>
              Ваш E-mail
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </label>
            <label>
              Ваш userName
              <input type="text" name="userName" placeholder="userName" />
            </label>
            <label>
              Ваш userPhoneNumber
              <input type="text" name="userPhoneNumber" placeholder="userPhoneNumber" />
            </label>
            <button type="submit">Save</button>
          </form>
        </StyledBox>
      </Grid>
    </>
  );
}
