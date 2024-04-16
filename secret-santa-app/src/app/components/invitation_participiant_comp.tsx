"use client";

import { getAccessToken } from "@/helpers/getTokens";


import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { MainButton } from "@/helpers/uiHelpers";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { navigateToInviteSend1 } from '@/app/actions/navigate_to_invite_send_action';
import { useParams } from 'next/navigation'
import { useMemo } from 'react';

import { useFormState } from 'react-dom'
//import Alert from '@mui/material/Alert';


const initialState = {
  successMessage: 'qq1',
  errorMessage: 'qqq2'
}


const MainButton1 = styled(MainButton)({
  margin: '10px',
});

const StyledBox = styled(Box)({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
});



const InviteParticipants = () => {
  const [participants, setParticipants] = useState<any>([{ name: '', email: '' }]);

  const handleAddParticipant = () => {
    setParticipants([...participants, { name: '', email: '' }]);
  };

  const handleInputChange = (index:any, event:any) => {
    const { name, value } = event.target;
    const updatedParticipants = [...participants];
    updatedParticipants[index][name] = value;
    setParticipants(updatedParticipants);
  };

  const [ID, setID] = useState('');
  const params = useParams()
  useMemo(() => {
    const game_id = params.game_id || '';
    setID(`${game_id}`);
  }, [params.game_id]);


  const access = getAccessToken();

  const [state, formAction1] = useFormState(navigateToInviteSend1, initialState);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <StyledBox>
      
          {state?.successMessage}

        {state?.errorMessage}


        <form action={formAction1}>

          <Grid item xs={12}>
            <Typography align="center" variant="h5" gutterBottom>
              Добавить участников
            </Typography>
          </Grid>
          <Stack m={2} spacing={3}>


            {participants.map((participant:any, index:number) => (
              <React.Fragment key={index}>

                Участник №{index + 1}

                <TextField
                  key={`name-${index}`}

                  label="Имя"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={participant.name}
                  onChange={(e) => handleInputChange(index, e)}
                />

                <TextField
                  key={`email-${index}`}

                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={participant.email}
                  onChange={(e) => handleInputChange(index, e)}
                />

              </React.Fragment>
            ))}


          </Stack>
          <input type="hidden" name="gameId" value={ID} />
          {access?<>          <input type="hidden" name="access" value={access} />
</>:<></>}


          <MainButton1 variant="contained" onClick={handleAddParticipant}>
            Добавить еще участника
          </MainButton1>

          <MainButton1 variant="contained" color="primary" type="submit">
            Пригласить
          </MainButton1>

        </form>
      </StyledBox>
    </Grid>
  );
};

export default InviteParticipants;
