import React from "react";
import './header.css';
import { NavLink } from 'react-router-dom';
import { MENUITEMS } from "services/config";


export default React.memo(function Header() {

    // function to add and remove class for responsive navigation on movile devices
    const responsiveMenu = (e, item) => {
        let x = document.getElementById("menu");
        // control the item Home to not display the responsive menu when we click it first time
        if (x.className === "menu" && item && item.toLocaleLowerCase() === 'home') return
        if (x.className === "menu") {
            x.className += " responsive";
        } else {
            x.className = "menu";
        }
    }

    return (
        <div className='navbar' id='navbar'>

            <div className='logo'>
                <NavLink to='/home'>
                    <img id='imglogo' src='/images/pokemon_logo.png' alt='logo' ></img>
                </NavLink>

            </div>

            <ul className='menu' id='menu'>
                {
                    MENUITEMS.map(item =>
                        <li key={item} id={item}>
                            <NavLink className='navmenu' onClick={(e) => responsiveMenu(e, item)} to={`/${item.toLocaleLowerCase()}`}>{item}</NavLink>
                        </li>
                    )
                }
                <li id='icon' className="icon" onClick={responsiveMenu}>
                    <i className="fa fa-bars"></i>
                </li>
            </ul>
        </div>
    )
})

