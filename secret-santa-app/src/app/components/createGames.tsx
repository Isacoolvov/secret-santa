"use client";
import { useFormState } from "react-dom";
import createGame from "../actions/create-games";
import Created from "../created/page";
import getGameId from "@/helpers/saveGameId";
import '../../css/myAccount.css'
import { useState } from "react";
import saveGameId from "@/helpers/saveGameId";
import router from "next/router";
type Props ={   
        id: string,
        name: string,
        maxPrice: number,
        participantCount: number,
        creatorId: string,
        role?: string     
}
export default function createGames() {
  const [formstate, createdispatch] = useFormState(createGame, {
    error: null,
    data: null,
  });
  const [priceLimitChecked ,setPriceLimitChecked] = useState(false)
const data:Props = formstate?.data
  console.log(formstate);
  if (formstate?.data != null) {
    saveGameId(formstate.data.id);
    console.log(formstate.data.id);
    
    // router.push('/created')
    
  }

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
