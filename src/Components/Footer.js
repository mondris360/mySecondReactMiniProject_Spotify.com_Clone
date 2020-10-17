import React from 'react';
import FooterText from './FooterText';
import SocialMediaIcon from './SocialMediaIcon';
import logo from "../Images/logo.png";


const Footer = () =>{
// different categories in the footer section
const company = {
    category: "COMPANY",
    footerText:   ["About", "Jobs", "For the Record"]  
};
const communities = {
    category: "COMMUNITIES",
    footerText:   ["For Artists", "Developers" , "Advertising", "Investors", "Vendors"]  
};
const usefulLinks =  {
    category: "USEFUL LINKS",
    footerText:   ["Help", "Web Player", "Free Mobile App"]  
};

const fontAwesomeClassNames  = ["fa fa-instagram", "fa fa-twitter", "fa fa-facebook"];

    return (
        <div id="footer"> 
           <img id="bottomlogo" src={logo}  alt="spotify logo"/>
           <FooterText categoryInfo={ company } />
           <FooterText categoryInfo={ communities } /> 
           <FooterText categoryInfo={ usefulLinks } /> 
           <SocialMediaIcon fontAwesomeClassNames = { fontAwesomeClassNames } />
        </div>
    )
}


export default Footer;