"use client";
import { useFormState } from "react-dom";
import login from "../actions/log-in";
import saveTokens from "@/helpers/save-tokens";
import { useRouter } from "next/navigation";
import { MainButton1, StyledBox } from "@/helpers/styles";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import '@/css/myAccount.css'

export default function Login() {
  const router = useRouter()
  const [formstate, dispatch] = useFormState(login, {
    error: null,
    data: null,
  });
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
<b> Вход</b>
         </Typography>
     <form className="form" action={dispatch}>
       
       <label >
       Ваш E-mail
       <input  type="email" name="email" placeholder="exemple@gmail.com"/>
       </label>
       <label >
       Ваш Password
       <input  type="password" name="password" placeholder="password"/>
       </label>
       <br />
       {formstate?.data === undefined?<>не правильный логин или пароль</>:<></>}
       <br />
      <Link href='/forgot-password'>
      <span style={{marginLeft:'190px', fontSize: '0.94rem',color: 'rgb(151, 151, 151)'}}> Забыли пароль?</span>
      </Link>
 
       <br/>  
       <MainButton1 
           variant="contained"
          type="submit"
           style={{marginLeft: '190px' ,width:'180px' ,height:'50px' ,marginTop:'80px'}}         >
      Войти
         </MainButton1>
         <br />
        <span style={{fontSize: '0.87rem',color: 'rgb(151, 151, 151)',marginLeft:'90px'}}>
           Продолжая, вы даете согласие на обработку персональных данных.</span>
             </form>
             </StyledBox>
</Grid>
    </>
  );
}
