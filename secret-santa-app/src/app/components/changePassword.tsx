"use client";
import { useFormState } from "react-dom";
import changeP from "../actions/change-password";
// import saveTokens from "@/helpers/save-tokens";

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
        <input type="password" name="currentPassword" placeholder="currentPassword"/>
        <input type="password" name="newPassword" placeholder="newPassword" />
        <input type="password" name="confirmPassword" placeholder="confirmPassword" />
        <button type="submit">Сохранить</button>
        
      </form>
    </div>
  );
}
