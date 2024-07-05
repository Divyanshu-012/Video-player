import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Nav.css';


function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);
    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <div className='nav-contents'>

                <img
                    onClick={() => navigate("/")}
                    className='nav-logo'
                    src="/images/Netflix-logo.png"
                    alt="Netflix-Logo"
                />

                <img
                    onClick={() => navigate("/profile")}
                    className='nav-Avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Avatar"
                />

            </div>


        </div>
    )
}

export default Nav;