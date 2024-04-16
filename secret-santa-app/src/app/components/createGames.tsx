"use client";
import { useFormState } from "react-dom";
import createGame from "../actions/create-games";
import '../../css/myAccount.css'
import { ChangeEvent, useEffect, useState } from "react";
import localsaveGameId from "@/helpers/saveGameId";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography, styled } from "@mui/material";
import { MainButton, SwitchMain } from "@/helpers/uiHelpers";
import { MainButton1, StyledBox } from "@/helpers/styles";
import PacmanLoader from "react-spinners/BarLoader";

export default function CreateGames() {
  const [formstate, createdispatch] = useFormState(createGame, {
    error: null,
    data: null,
  });
  const router =useRouter()
  const [priceLimitChecked ,setPriceLimitChecked] = useState(false)
  const [loading, setLoading] = useState<boolean>(false);

  console.log(formstate);

useEffect(() => {
  if (formstate?.data != null) {
    setLoading(true);
    localsaveGameId(formstate.data.id);
    console.log(formstate.data.id);  
    setTimeout(() => {
      router.push(`/gameCreated/${formstate.data.id}`);
    }, 1500); 
  }
}, [formstate])
  return (
    <div>
        

    <Grid container justifyContent="center" alignItems="center">


 <StyledBox style={{width: '550px' , height:'600px'}}> 
 <Typography align="center" variant="h5" gutterBottom style={{marginTop:'50px' ,marginBottom:'40px'}} >
<b> Создать игру</b>
          </Typography>
      <form className="form" action={createdispatch}>

        <label >
          Название игры
        <input  type="text" name="name" placeholder="Название игры"/>
        </label>
        <br />
        <label >
        Идентификатор
        <input  type="text" name="name" placeholder="random"/>
        </label>
        <label >
        <span>Максимальная стоимость подарка</span>
         <SwitchMain 
        defaultChecked={priceLimitChecked} 
         onClick={(e: React.MouseEvent<HTMLButtonElement>) => setPriceLimitChecked(!priceLimitChecked)} />
              </label>  
              <p style={{fontSize:'0.63rem' , marginLeft:'40px' , }}>При включенной опции участникам будет показано ограничение, которому они должны будут следовать</p>
              <br />
       {priceLimitChecked===true?<>
        <input type="number" name="maxPrice"   placeholder="Укажите максимальную стоимость подарка" />
         </>:<></>}
        <br/>  
        <MainButton1 
            variant="contained"
           type="submit"
            style={{marginLeft: '190px' ,width:'180px' ,height:'50px' }}
          >
            {loading?<> 
              <PacmanLoader
        color='green'
        loading={loading}
        
        aria-label="Loading Spinner"
        data-testid="loader"></PacmanLoader>
            
            </>:<></>}
        Создать игру

          </MainButton1>
              </form>
              </StyledBox>



</Grid>

    </div>
  );
}
