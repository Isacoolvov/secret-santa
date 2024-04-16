"use client";
import Link from "next/link";
import { useState, useEffect, use, FormEvent } from "react";
import Wishes from "../components/wishes";
import sendWishes from "../actions/wish-send";
import { MainButton1, StyledBox } from "@/helpers/styles";
import { Grid, Stack, Typography } from "@mui/material";

export default function WishLists() {

  const [number, setNumber] = useState(1) 
  function handleButtonClick() {
    setNumber(prevNumber => prevNumber < 10 ? prevNumber + 1: prevNumber)
  }

  const submitWishes = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {currentTarget} = event
    const arr = []
    for (let i = 0; i < currentTarget.elements.length; i++) {
      const el = currentTarget.elements.item(i)
      if (el instanceof HTMLInputElement) {
        arr.push(el.value)
      }
    }
    console.log(arr)
    sendWishes(arr);
  };
  return (
    <Grid container justifyContent="center" alignItems="center">
<StyledBox >
<Grid item xs={12}>
            <Typography align="center" variant="h5" gutterBottom>
            Пожелания к подарку
            </Typography>
          </Grid>  <p>Добавить пожелание ,  который хотели бы паьламв </p>
    <form onSubmit={submitWishes}>
    <Stack m={2} spacing={3}>
      {new Array(number).fill(null).map((wish, i) => <Wishes name={i.toString()} key={i}/>)}   
      </Stack>   
    <MainButton1 variant="contained" type='button' onClick={handleButtonClick}>
    Добавить еще пожелания
    </MainButton1>

    <MainButton1 href="/wish-list/CardCreated" variant="contained" color="primary" type="submit">
    Далее
        </MainButton1>
    </form>
    </StyledBox>
    </Grid>
  );
}
