'use client'


import React, { useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainButton } from "@/helpers/uiHelpers";
import { useParams } from 'next/navigation'



const InviteLinkComponent = () => {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

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
  const params = useParams()


  useMemo(() => {
    const game_id = params.game_id || '';
    setUrl(`http://my.supertest.com/linktogame/?invite_id=${game_id}`);
  }, [params.game_id]);


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
