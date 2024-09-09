import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";
import MainMenu from "../molecules/header/MainMenu";
const App = () => {
   return(
      <div>
          <MainHeader>
            <MainMenu/>
         </MainHeader>
         <div className="pt-16 m-auto max-w-200">
            <Outlet/>
         </div>
      </div>
   )
}

export default App;