import React from 'react'
import logo from '../logo/react-logo.png';

export default function Main() {
    return (
        <main className='div-center'>
            <h1>Fun facts about React!</h1>
                <ul className='ul'>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousand of enterprise apps, including mobile apps</li>
                </ul>
            <img src={logo} alt="" className='main-logo'/>
        </main>
    )
}