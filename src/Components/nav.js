import React from "react";
import { Link } from "react-router-dom";
import "./reduce.css"

function Nav(){
    return(<>    

    <nav  className="bordering">     
    
    {/* <Link className='updates'  to ='/'>home  </Link>
    <Link className='updates' to='/Contact'>contant </Link>
    <Link className='updates' to='/Student'>  student       </Link><br/> */}
    <Link to ='/'> <div className="updates">HOME </div></Link><br/>
    <Link to ='/students'><div className="updates">Student </div></Link><br/>
    <Link to ='/contact'><div className="updates">Contact </div></Link><br/>
    
    </nav>

    </>)
}
export default Nav;