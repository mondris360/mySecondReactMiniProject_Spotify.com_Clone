import React from "react";
import MenuItem from './MenuItem';
import logo from "../Images/logo.png";
const NavBar = () => {

    const menusInfo = [
    {
        name: 'Premium',
        url:'/premium'
    }, 
    {
        name: 'Help',
        url:'/help'
    },
    {
        name: 'Download',
        url:'/download'
    },
    {
        name: 'Sign up',
        url:'/signup'
    },
    {
        name:'Log in',
        url:'login'
    }]

    return (
        <div id="navbar">
            <img id="logo" src={logo}  alt="spotify logo"/>
            <MenuItem menusInfo = { menusInfo } />
        </div>
    )
}


export default NavBar;