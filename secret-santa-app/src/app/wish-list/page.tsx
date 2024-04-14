"use client";
import Link from "next/link";
import { useState, useEffect, use, FormEvent } from "react";
import Wishes from "../components/wishes";
import sendWishes from "../actions/wish-send";

export default function WishLists() {

  const [number, setNumber] = useState(3) 
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
    <form onSubmit={submitWishes}>
      {new Array(number).fill(null).map((wish, i) => <Wishes name={i.toString()} key={i}/>)}
      <button onClick={handleButtonClick} type='button'>Добавить</button>
      <button>Отправить</button>
    </form>
  );
}