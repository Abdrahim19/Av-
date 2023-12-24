import { Link, NavLink } from "react-router-dom"
import  "./Header.Modules.css";
import 'typeface-inter';


const Navbar = () => {
    const navlinks = [
        {name:'Connexion' , path:''},
        {name:'Inscription' , path:''},
    ]

  return (
    <nav style={{marginBottom:'5.55rem'}} className="d-flex align-items-center font-inter justify-content-between">
        <h1 className='titel'>Qui est AVE?</h1>
        <img className="logo" src="/jpg file.jpg" loading="lazy" alt="site_logo" />
        <ul className="d-flex align-items-center gap-4">
            {navlinks.map((link) => (
                <Link className='NavLink' to={link.path}>
                    {link.name}
                </Link> 
            ))}
        </ul>
    </nav>
  )
}
 
export default Navbar