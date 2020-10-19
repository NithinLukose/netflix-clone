import React from 'react'
import '../styles/nav.css'

function Nav() {
    return (
        <div className="nav">
            <div>
                <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix logo" />
            </div>
            <div>
                <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix avatar" />
            </div>    
        </div>
    )
}

export default Nav
