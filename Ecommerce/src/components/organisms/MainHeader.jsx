import Logo from "../molecules/header/Logo";
const MainHeader = ({children}) => {
   // El hecho de poner children, lo hacemos para que podamos poner un main menu 
   // Diferente, tanto para el menu del app , como para el menu del admin
   return(
      <div className="fixed bg-gradient w-full z-10">
         <div className="w-full m-auto flex items-center lg:max-w-200">
            <Logo/>
            { children }
         </div>
      </div>
   )
}

export default MainHeader;