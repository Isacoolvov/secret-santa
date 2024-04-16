"use client";

import { useState } from "react";

// import { useState } from "react";

export type WhishesProps = {
  name : string
}

export default function Wishes({ name }: WhishesProps) {

  return (

    <label >
      Пожелание №{Number(name) +1}
    <input
      type="text"
      name={name}
    />
    </label>
  );
}
