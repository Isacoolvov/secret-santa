'use client';
import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";
import { Grid, Box, Typography } from '@mui/material';
import { RingLoader } from "react-spinners";
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  width: '500px',
  height: '550px',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

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
      <StyledBox>
        {loading ? (
          <RingLoader color='red' loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader" />
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
                      bgcolor="primary.main"
                      color="primary.contrastText"
                      borderRadius="borderRadius"
                      p={2}
                      textAlign="center"
                    >
                      <Typography>ID: {item.id}</Typography>
                      <Typography>Name: {item.name}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </StyledBox>
    </Grid>
  );
}

export default FetchDataComponent;
