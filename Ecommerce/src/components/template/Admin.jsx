import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";
import AdminMenu from "../molecules/header/AdminMenu";
const  Admin = () => {
   return(
      <div>
         <MainHeader>
            <AdminMenu/>
         </MainHeader>
         <div className="pt-16 m-auto max-w-200">
            <Outlet/>
         </div>
      </div>
   )
}

export default Admin;