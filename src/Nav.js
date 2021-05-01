import React, { useEffect, useState } from 'react'
import "./Nav.css"


function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true)
            }else {
                handleShow(false)
            }
        })

        return (() => {
            window.removeEventListener("scroll")
        })
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png" alt=""/>
            <img 
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/378800000613008272/2f5a24bb2c8c7f83dc62a7533f34f47d_400x400.jpeg" alt=""/>
        </div>
    )
}

export default Nav
