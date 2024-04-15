"use client";

import { useState } from "react";

// import { useState } from "react";

export type WhishesProps = {
  name : string
}

export default function Wishes({ name }: WhishesProps) {
  const [counter, setCounter] = useState(1);
  // console.log(want);

  return (
    <label >
      Подарок
    <input
      type="text"
      name={name}
    />
    </label>
  );
}
