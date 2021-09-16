import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
            <h1>Blog</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create' className="btn">New Post</Link>
            </div>
            
        </nav>
        </header>
    )
}

export default Header
