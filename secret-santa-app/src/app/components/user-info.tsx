'use client'
import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";
import MyAccount from './myAccount';
import { Grid, Typography } from '@mui/material';


type Repo = {
  login: string;
  email: string;
};

function FetchUserData() {
  const [data, setData] = useState<Repo|null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const access = getAccessToken();
      const res = await fetch('http://51.107.14.25:8080/settings/user-info', {
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
    <>

      {loading?<>Loading...</>:<>
      
      Мои account 
      <br />
      {data === null ? <p>авторизуйтесь</p> :<>{data.login} {data.email}</>}

      <Grid item xs={12}>
            <Typography align="center" variant="h5" gutterBottom>
            Личные данные
            </Typography>
          </Grid>
      <MyAccount name={data?.login} email={data?.email}/>

      </>}
 
      </>
  )
}

export default FetchUserData;
