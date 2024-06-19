import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';
import underline from '../../assets/nav_underline.svg';
import toggle from '../../assets/menu_open.svg'
import close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
   const menuRef=useRef();
   const openMenu=()=>{
    menuRef.current.style.right="0";
   }
   const closeMenu=()=>{
    menuRef.current.style.right="-350px";
   }
  return (
    <div className='Navbar'>
      <img src={logo} alt="Logo" />
      <img src={toggle} onClick={openMenu}alt="" className='nav-mob' />
      <ul ref={menuRef} className='navmenu'>
        <img src={close} onClick={closeMenu}alt="" className="nav-mob-close" />
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          {menu === "home" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("about")}
          >
            About Me
          </Link>
          {menu === "about" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("services")}
          >
            Services
          </Link>
          {menu === "services" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="work" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("work")}
          >
            Portfolio
          </Link>
          {menu === "work" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("contact")}
          >
            Contact
          </Link>
          {menu === "contact" ? <img src={underline} alt='' /> : null}
        </li>
      </ul>
      <div className="navconnect">
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
        >
          Connect with me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
