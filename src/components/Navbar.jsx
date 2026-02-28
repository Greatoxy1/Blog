import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <nav style ={{display : "flex", gap : "400px"}}>
   <Link to ="/"></Link>
   <Link to ="sports"></Link>
   
   </nav>
  );
}
