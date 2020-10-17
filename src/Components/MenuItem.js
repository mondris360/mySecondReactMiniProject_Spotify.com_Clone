import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// component to create each menu item

const MenuItem = (props) => {

    const   menusText =  props.menusInfo;
    let counter = 0;
    let menus =  menusText.map(menuItem => {
       
        counter++;
        if(counter % 4 !== 0 ){
            console.log("counter" + counter);
            console.log( menuItem.name )
            return <li key={ menuItem.name }><Link to={menuItem.url}> { menuItem.name } </Link> </li>

        } else {
            // vertical line
            return (
                // separate each three menus with a  vertical line separator
                <React.Fragment>
                    <li id="separator" key={ menuItem.name }><Link to={menuItem.url}> | </Link> </li>
                    <li key={ menuItem.name }><Link to={menuItem.url}> { menuItem.name } </Link> </li>
                </React.Fragment>
            )
        }
        
    });

    return(
        <Router>
            <ul id="menu">
                { menus }
            </ul>
        </ Router >
    )

}

export default MenuItem;