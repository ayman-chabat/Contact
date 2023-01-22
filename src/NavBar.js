import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function NavBar({setPage}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg pb-0">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item text-center">
                        <NavLink to='/' className="nav-link mx-2">
                            <p onClick={()=>{setPage(true)}} className='mb-0'>Contacts</p>
                        </NavLink>
                    </li>
                    <li className="nav-item  text-center">
                        <NavLink to='/new-contact' className="nav-link mx-2">
                            <p onClick={()=>{setPage(false)}} className='mb-0'>New Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default NavBar;