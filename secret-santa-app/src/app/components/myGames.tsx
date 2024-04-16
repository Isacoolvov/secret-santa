'use client';
import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";
import { Grid, Box, Typography, Link } from '@mui/material';
import { BarLoader } from "react-spinners";
import { styled } from '@mui/system';
import { MainButton1, StyledBox } from '@/helpers/styles';
import Image from 'next/image';

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

  async function fetchData() {
    try {
      const access = getAccessToken();
      const res = await fetch('http://51.107.14.25:8080/games/mygames', {
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
    <Grid container justifyContent="center" alignItems="center">
      <StyledBox style={{ width: "550px", height: "600px" }}>
        <Grid style={{marginLeft:'50px'}}>
          {loading ? (
            <BarLoader color='orange' loading={loading} aria-label="Loading Spinner" data-testid="loader" />
          ) : (
            <>
              <Typography variant="h4" gutterBottom>Мои игры</Typography>
              {data.length === 0 ? (
                <Typography>У вас нет игр</Typography>
              ) : (
                <Grid container spacing={1}>
                  {data.map((item, index) => (
                    <Grid item key={index}>
                      <Box
                        color="rgb(151, 151, 151)"
                        borderRadius="20px"
                        p={2}
                        textAlign="center"
                        border={2}
                        borderColor="rgb(192, 227, 229)"
                      >
                        <Typography variant="h5" gutterBottom>
                          <Link href={`/reshuffle/${item.id}`} style={{ color: 'rgb(240, 93, 0)', textDecoration: 'none' }}>{item.name}</Link>
                        </Typography>

                        <Typography align="center" >
                          <Image src="/img/santa_thumb.png" alt="santa_thum" width={100} height={100} priority={true} />
                        </Typography>

                        <Typography>Вы участник</Typography>
                        <Typography>Вы Организатор</Typography>
                        <Typography>Количество участников: </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </>
          )}
        </Grid>
      </StyledBox>
    </Grid>
  );
}

export default FetchDataComponent;
