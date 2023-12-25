import { Link } from "react-router-dom"
import  "./Header.Modules.css";
import { Container } from "react-bootstrap";
import { IoMenuSharp } from "react-icons/io5";
import { navlinks } from "../../data/navlinks";
import { useState, useCallback, useMemo } from "react";
import Mobilemenu from "./Mobilemenu";



const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = useCallback(() => {
      setToggle((prevToggle) => !prevToggle);
    }, []);
    const memoizedHandleClick = useMemo(() => handleClick, [handleClick]);

    console.log(toggle);
    

  return (
    
    <nav style={{marginBottom:'5.55rem'}} className="d-flex align-items-center justify-content-between">
        <h1 className='titel d-none d-lg-block user-select-none'>Qui est AVE?</h1>
        <Link to='/'>
        <img className="logo user-select-none" src="/jpg file.jpg" loading="lazy" alt="site_logo" />
        </Link>
        <ul className="d-none d-lg-flex align-items-center gap-4">
            {navlinks.map((link) => (
                <p className='NavLink '>
                    {link.name}
                </p> 
            ))}
        </ul>
        <div className="d-lg-none d-flex">
            <IoMenuSharp className="d-block d-lg-none user-select-none"
             onClick={memoizedHandleClick}  size={40} />
            <Mobilemenu Isblock={toggle} onClick={memoizedHandleClick}/>
        </div>
    </nav>
  )
}
 
export default Navbar