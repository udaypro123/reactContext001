import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        <div className='navbardiv'>
            <Link to="/Home" >
                Home
            </Link>
            <Link to="/service" >
                service
            </Link>
            <Link to="/Contact" >
                contact
            </Link>

        </div>
        </>
    )
}

export default Navbar;
