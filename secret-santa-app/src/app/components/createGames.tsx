"use client";
import { useFormState } from "react-dom";
import createGame from "../actions/create-games";
import saveTokens from "@/helpers/save-tokens";
import '../../css/myAccount.css'
import { useState } from "react";
export default function createGames() {
  const [formstate, createdispatch] = useFormState(createGame, {
    error: null,
    data: null,
  });
  const [priceLimitChecked ,setPriceLimitChecked] = useState(false)

  console.log(formstate);
  

  return (
    <div className="container">
        
      <form className="form" action={createdispatch}>
        <label >
          Название игры
        <input  type="text" name="name" placeholder="Название игры"/>
        </label>
        <br />
        <label >
           uniqueIdentifier
        <input  type="text" name="uniqueIdentifier" placeholder="uniqueIdentifier"/>
        </label><br />
        <label >
        Максимальная стоимость подарка
        <input type="checkbox" name="priceLimitChecked" checked={priceLimitChecked}
          onChange={(e) => setPriceLimitChecked(e.target.checked)} />
        </label>  
        {priceLimitChecked===true?<><label >
        Максимальная стоимость подарка
        <input type="number" name="maxPrice"   placeholder="Укажите максимальную стоимость подарка" />
        </label>  </>:<></>}
        <br />  
        <button className="save-btn" type="submit">Создать игру</button>
      </form>
    </div>
  );
}
