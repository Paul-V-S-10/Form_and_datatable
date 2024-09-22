import React from 'react';
import './NavBar.css';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbarTop">
                <div className="navbarTopSocial">
                    <FaInstagram className="icon" />
                    <FaLinkedinIn className="icon" />
                    <FaFacebookF className="icon" />
                    <TfiYoutube className="icon" />
                </div>
            </div>
            <div className="navbarMenu">
                <img src="/logo.png" alt="Logo" />
                <div className="navbarMenuLinks">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">PROJECTS</a>
                    <a href="#">GALLERY</a>
                    <a href="#">TEAM</a>
                    <a href="#">SPONSORS</a>
                    <a href="#">CONTACT</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
