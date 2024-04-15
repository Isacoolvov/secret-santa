"use client";
import Link from "next/link";
import { useState, useEffect, use, FormEvent } from "react";
import Wishes from "../components/wishes";
import sendWishes from "../actions/wish-send";
import { Grid } from "@mui/material";
import { MainButton1, StyledBox } from "@/helpers/styles";
import '@/css/myAccount.css'
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
    <>
    <Grid container justifyContent="center" alignItems="center">
        <StyledBox style={{ width: "550px", height: "600px" }}>
        <form onSubmit={submitWishes}>
        <h2>Пожелания к подарку</h2>

            <label>
            {new Array(number).fill(null).map((wish, i) => <Wishes name={i.toString()} key={i}/>)}
            </label>
            <button onClick={handleButtonClick} type='button'>Добавить</button>
            <MainButton1 
            href="/wish-list/CardCreated"
            variant="contained"
           type="submit"
            style={{marginTop:'75px',marginLeft: '190px' ,width:'180px' ,height:'50px' }}
          >
        Далее
          </MainButton1>
          </form>
        </StyledBox>
      </Grid>

    </>
  );
}