import React from 'react';


const SocialMedia = (props) =>{
    const fontAwesomeClasses = props.fontAwesomeClassNames;
    const socialMediaIcons = fontAwesomeClasses.map( fontAwesomeClassName => {
        const id = fontAwesomeClassName.replace(" ", "").toLowerCase();
        return <li key ={ id }><i className={ fontAwesomeClassName } aria-hidden="true"></i></li>
    });
    return (
        <div id="socialMediaIcons">
            <ul>
                { socialMediaIcons }
            </ul>
        </div>
    )
}

export default SocialMedia;