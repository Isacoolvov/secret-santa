"use client";
// import { useState } from "react";

export type WhshesProps = {
  setGetWishes: React.Dispatch<React.SetStateAction<string>>
}

export default function Wishes({ setGetWishes }: WhshesProps) {
  // const [want, setWant] = useState("");
  // console.log(want);

  return (
    <input
      onChange={(e) => {
        setGetWishes(e.target.value);
      }}
      type="text"
      name="name"
    />
  );
}
