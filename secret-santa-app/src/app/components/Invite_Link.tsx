'use client'


import React, { useMemo, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainButton } from "@/helpers/uiHelpers";
import { useParams } from 'next/navigation';
import { getAccessToken } from "@/helpers/getTokens";

type DataFetchType = {
  link: string | null;
}|null



const InviteLinkComponent = () => {

  const params = useParams();
  const game_id = params.game_id || '';

  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const [dataFetch, setDataFetch] = useState<DataFetchType>(null);
  const [isLoading, setLoading] = useState(true);
  const access = getAccessToken();


  const fetchUrl = `http://51.107.14.25:8080/invitations/generate-link?gameId=${game_id}`;
  useEffect(() => {
    fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${access}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataFetch(data);
        setLoading(false);
      })
  }, [access ,fetchUrl]);

  if (isLoading)  <p>Loading...</p>
  if (!dataFetch)  <p>No  data</p>


  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const StyledBox = styled(Box)({
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  });

  const MainButton1 = styled(MainButton)({
    margin: '10px',
  });



  useMemo(() => {
    if (dataFetch && dataFetch.link) {
      let modifiedUrl = dataFetch.link.replace(/\/invitations\/accept\//, "/invitations_accept/");
      setUrl(modifiedUrl);
    }
  }, [dataFetch]);


  return (


    <Grid container justifyContent="center" alignItems="center">



      <StyledBox>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
            Пригласить участников
          </Typography>

          <Typography align="center" variant="body2" gutterBottom>
            Скопируйте ссылку ниже и отправьте её своим друзьям.
          </Typography>
          <Typography align="center" variant="body2" gutterBottom>
            После перехода по ссылке, участники смогут создать карточки для участия самостоятельно.
          </Typography>

        </Grid>

        <Stack m={2} spacing={3}>

          <TextField
            label="Ссылка"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <MainButton1
            variant="contained"
            onClick={handleCopyToClipboard}
            style={{ marginLeft: '10px' }}
          >
            {copied ? 'Скопировано!' : 'Копировать'}

          </MainButton1>

        </Stack>
      </StyledBox>
    </Grid>
  );
};

export default InviteLinkComponent;
