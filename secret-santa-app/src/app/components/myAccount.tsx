"use client";
import { useFormState } from "react-dom";
import changeLogin from "../actions/my-account";
import saveTokens from "@/helpers/save-tokens";
import '../../css/myAccount.css'
export default function MyAccount() {
  const [formstate, dispatch] = useFormState(changeLogin, {
    error: null,
    data: null,
  });
  console.log(formstate);
  if (formstate?.data != null) {
    saveTokens(formstate.data);
  }

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
        <button className="save-btn" type="submit">Сохранить</button>
      </form>
    </div>
  );
}
