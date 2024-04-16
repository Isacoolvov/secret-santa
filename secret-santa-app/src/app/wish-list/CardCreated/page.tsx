'use client'

import Stack from '@mui/material/Stack';
import { Grid,Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { MainButton1, StyledBox } from '@/helpers/styles';


const Gamecreated = () => {
    const [ID, setID] = useState('');
    const params = useParams()
    useMemo(() => {
      const game_id = params.game_id || '';
      setID(`${game_id}`);
    }, [params.game_id]);
  return (


    <Grid container justifyContent="center" alignItems="center">



      <StyledBox style={{width: '500px' , height:'500px'}}>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" gutterBottom>
          Карточка участника создана!
          </Typography>


          <Typography align="center" variant="h5" gutterBottom>
          <Image src="/img/createdSanta.svg" alt="santa_thum" width={300} height={300} priority={true}/>
          </Typography>


          <Typography align="center" variant="body2" gutterBottom>
          Вам придет уведомление, как только Организатор проведет жеребьевку
          </Typography>

        </Grid>

        <Stack m={2} spacing={3}>

            <Link href={`/`} passHref>
          <MainButton1
            variant="contained"
           type="submit"
           style={{marginTop:'30px',marginLeft: '150px' ,width:'180px' ,height:'50px' }} >
            На главную

          </MainButton1>
          </Link>
        </Stack>
      </StyledBox>
    </Grid>
  );
};

export default Gamecreated;