'use client'
import { BASE_URL } from "@/helpers/helpers_base_url";

import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";
import { Grid } from '@mui/material';
import { StyledBox } from '@/helpers/styles';
import PacmanLoader from "react-spinners/RingLoader";
import * as dotenv from 'dotenv';
dotenv.config();
type Repo = {
  name: string;
  id: string;
}[];

function FetchDataComponent() {
  const [data, setData] = useState<Repo>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(BASE_URL);
  console.log("BASE_URL" ,'bASE');

  async function fetchData() {
    try {
      const access = getAccessToken();
      const res = await fetch(`${BASE_URL}/games/mygames`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access}`,
        }
      });
      const data: Repo = await res.json();
      setData(data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  }

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
      <StyledBox style={{width: '500px' , height:'550px'}}>
      {loading?<>
        <PacmanLoader
        color='red'
        loading={loading}
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></>:<>
      
      <h1>Мои игры </h1>
      <br />
      {data.length === 0 ? <p>У вас нет игр</p> : (
  <ul>
    {data.map((item , index) => (
      <li key={index}>
        ID: {item.id}, Name: {item.name}
      </li>
    ))}
  </ul>
       
  )}
  </>}
  </StyledBox>

  </Grid>

      </div>
  )
}

export default FetchDataComponent;
