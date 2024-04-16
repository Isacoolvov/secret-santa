"use client";

import { TextField } from "@mui/material";

// import { useState } from "react";

export type WhishesProps = {
  name : string
}

export default function Wishes({ name }: WhishesProps) {
  // const [want, setWant] = useState("");
  // console.log(want);
const number = name
  return (
    <>
 Пожелание №{Number(number) + 1}
    <TextField
    label="Описание"
    variant="outlined"
    fullWidth
    name={name}
   
  />
     </>

   
  );
}