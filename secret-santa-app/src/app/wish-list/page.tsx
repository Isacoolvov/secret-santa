"use client";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import Wishes from "../components/wishes";
import sendWishes from "../actions/wish-send";
interface props {
  val: number;
}
const arr = [];

export default function WishList() {
  const [counter, setCounter] = useState<number>(0);
  const [getWishes, setGetWishes] = useState([""]);
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const handleButtonClick = () => {
    const newCounter = counter + 1;
    if (newCounter < 11) {
      setCounter(newCounter);
      arr.push(getWishes);
      // Создание нового компонента и добавление его в массив
      const newComponent = <Wishes setGetWishes={setGetWishes} />;
      setComponents([...components, newComponent]);
    }
  };

  const submitWishes = () => {
    arr.push(getWishes);
    sendWishes(arr);
  };

  return (
    <div>
      {/* Рендеринг всех созданных компонентов */}
      {components}
      <button onClick={handleButtonClick}>Добавить</button>
      <button onClick={submitWishes}>Отправить</button>
    </div>
  );
}
