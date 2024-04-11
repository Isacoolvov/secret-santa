"use client";
import { useFormState } from "react-dom";
import signup from "../actions/sign-up";
import saveTokens from "@/helpers/save-tokens";
import { MainButton1, StyledBox } from "@/helpers/styles";
import Link from "next/link";
import { Grid, Typography } from "@mui/material";
import '@/css/myAccount.css'
import { useRouter } from "next/navigation";
export default function SingUp() {
  const [formstate, dispatch] = useFormState(signup, {
    error: null,
    data: null,
  });
  const router = useRouter()
  console.log(formstate);
  if (formstate?.data != null) {
    saveTokens(formstate.data);
    router.push('/')
  }
  return (
    <>
    
      <Grid container justifyContent="center" alignItems="center">


<StyledBox style={{width: '550px' , height:'600px'}}> 
<Typography align="center" variant="h5" gutterBottom style={{marginTop:'50px' ,marginBottom:'40px'}} >
<b> Регистрация</b>
         </Typography>
     <form className="form" action={dispatch}>

       <label >
       Ваше Login
       <input  type="text" name="name" placeholder="Имя Фамилия"/>
       </label>
       <br />
       <label >
       Ваш E-mail
       <input  type="email" name="email" placeholder="exemple@gmail.com"/>
       </label>
       <label >
       Ваш Password
       <input  type="password" name="password" placeholder="password"/>
       </label>
  
       <br/>  
       <MainButton1 
           variant="contained"
          type="submit"
           style={{marginLeft: '190px' ,width:'180px' ,height:'50px' ,marginTop:'70px' }}
         >
      Зарегистрироваться

         </MainButton1>
       
             </form>
            <span style={{marginLeft:'190px'}}>Уже есть аккаунт? <Link href="/login">Войти</Link> </span> 
             </StyledBox>



</Grid>
    </>
  );
}
