"use client";

import { TextField, Typography } from "@mui/material";

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

<Typography variant="body1" gutterBottom>
        Пожелание №{Number(number) + 1}
      </Typography>

    <TextField
    label="Описание"
    variant="outlined"
    fullWidth
    name={name}
   
  />
     </>

   
  );
}
