'use client'

import Stack from '@mui/material/Stack';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainButton } from "@/helpers/uiHelpers";
import Image from 'next/image';
import Link from 'next/link';



const gamecreated = () => {


  const StyledBox = styled(Box)({
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  });

  const MainButton1 = styled(MainButton)({
    margin: '10px',
  });


  return (


    <Grid container justifyContent="center" alignItems="center">



      <StyledBox style={{width: '500px' , height:'500px'}}>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
          Игра создана!
          </Typography>


          <Typography align="center" variant="h5" gutterBottom>
          <Image src="/img/createdSanta.svg" alt="santa_thum" width={300} height={300} priority={true}/>
          </Typography>


          <Typography align="center" variant="body2" gutterBottom>
          Пока что никого нет<br />
          Добавьте участников, чтоб игра началась
          </Typography>

        </Grid>

        <Stack m={2} spacing={3}>

            <Link href='/invation/' passHref>
          <MainButton1
            variant="contained"
           type="submit"
            style={{ marginLeft: '120px' }}
          >
            Добавить участников

          </MainButton1>
          </Link>
        </Stack>
      </StyledBox>
    </Grid>
  );
};

export default gamecreated;
