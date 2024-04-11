"use client";
import { useFormState } from "react-dom";
import changeP from "../actions/change-password";
import '../../css/myAccount.css'
import DeleteAccount from "./deleteAccount";
export default function changePassword() {
  const [formstate, dispatch] = useFormState(changeP,  null);
  console.log(formstate);
  
  return (
    <div>
      <form action={dispatch}>
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
        <p className="result"> {formstate?.data===''?<>{formstate.error} Текущий пароль не совпадает </>:<>{formstate?.data}</>}</p>

    
      </form>
      <DeleteAccount/>
    </div>
  );
}
