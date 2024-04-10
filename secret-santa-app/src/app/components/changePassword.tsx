"use client";
import { useFormState } from "react-dom";
import changeP from "../actions/change-password";
// import saveTokens from "@/helpers/save-tokens";
import '../../css/myAccount.css'
export default function changePassword() {
  const [formstate, dispatch2] = useFormState(changeP, 
  null
  );
   console.log(formstate);
  // if (formstate?.data != null) {
  //   // saveTokens(formstate.data);
  //   console.log();
    
  // }
  
  return (
    <div>
      <form action={dispatch2}>
        <h2 className="form-h2">Пароль</h2>
        <label>
        Текущий пароль
          <input type="password" name="currentPassword"/>
        </label>
        <label>
        Новый пароль
          <input type="password" name="newPassword" />
        </label>
        <label>  
        Повторите пароль
          <input type="password" name="confirmPassword"/>
        </label>
        <br />
        <button className="save-btn" type="submit">Сохранить</button>
        
      </form>
    </div>
  );
}
