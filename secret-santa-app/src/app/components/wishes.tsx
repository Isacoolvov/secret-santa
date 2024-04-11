"use client";
import { useState } from "react";
export default function Wishes({ setGetWishes }) {
  const [want, setWant] = useState("");
  console.log(want);

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
