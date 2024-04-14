"use client";
// import { useState } from "react";

export type WhishesProps = {
  name : string
}

export default function Wishes({ name }: WhishesProps) {
  // const [want, setWant] = useState("");
  // console.log(want);

  return (
    <input
      type="text"
      name={name}
    />
  );
}
