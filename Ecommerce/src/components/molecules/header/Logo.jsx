import { Link } from "react-router-dom";
const Logo = () => {
   return(
      <div className="logo flex">
         <Link to="/">
            <p>logo</p>
         </Link>
      </div>
   )
}
export default Logo;