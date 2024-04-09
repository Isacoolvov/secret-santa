"use client";
import { useFormState } from "react-dom";
import changeLogin from "../actions/my-account";
// import saveTokens from "@/helpers/save-tokens";
import removeAccessToken from "@/helpers/remove-access-token";
import '../../css/myAccount.css'
export default function MyAccount() {
  const [formstate, dispatch] = useFormState(changeLogin,  null );
  console.log(formstate);

  return (
    <div className="container">
      <form className="form" action={dispatch}>
        <label >
          Ваше Имя
        <input  type="text" name="newLogin" placeholder="   Имя Фамилия"/>
        </label>
        <br />
        <label >
          Ваш Email
        <input type="email" name="newEmail" placeholder="   example@gmail.com" />
        </label>     
        <br />  
        <button className="save-btn" type="submit">Сохранить</button><br />
        {/* {formstate?<></>:<></>} */}
        <p className="result">{formstate?.data?<>
        {formstate.data}
        {removeAccessToken()}
        </>:<></>}{formstate?.error}</p>
      </form>
    </div>
  );
}
