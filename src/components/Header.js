import React from 'react'
import logo from '../logo/react-logo.png';

export default function Header() {
    return (
        <header>
            <nav className='nav'>
                <div className='nav-logo'>
                    <img src={logo} className='image' alt=""/>
                    <p>ReactFacts</p>
                </div>
                <ul className='nav-items'>
                    <li>React course</li>
                    <li>Project 1</li>
                </ul>
            </nav>
        </header>
    )
}

//export default Header