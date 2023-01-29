import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function NavBar() {
    return (
        <span>
            <NavLink to='/new-contact' className="nav-link mx-4 py-2" style={{backgroundColor:'black', width:130, textAlign:'center'}}>
                <p  className='mb-0'>New Contact</p>
            </NavLink>
        </span>
    )
}
export default NavBar;