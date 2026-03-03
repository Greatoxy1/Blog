import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <nav style ={{display : "flex", gap : "250px"}}>
   <Link to ="/">Sports highlights</Link>
   <Link to ="sports">Current sports update </Link>
   
   </nav>
  );
}
