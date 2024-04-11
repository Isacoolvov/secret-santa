import MyAccount from "../components/myAccount";
import ChangePassword from "../components/changePassword";
import DeleteAccount from "../components/deleteAccount";
import '../../css/myAccount.css'
import UserInfo from '../components/user-info'

export default function Page() {
  return (
    <main className="page-container"> 
   
      <div className="forms">
      <UserInfo/>
        <h2 className="form-h2">Личные данные</h2>
        <MyAccount />
        <ChangePassword />
      </div>
    </main>
  );
  
}
