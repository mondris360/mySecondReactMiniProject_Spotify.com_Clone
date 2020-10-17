import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
 
const  FooterText = (props) =>{
    const categoryName = props.categoryInfo.category;
    const footerText =   props.categoryInfo.footerText;
    const footerItems =  footerText.map(footerItem => {
        return <li key={ footerItem }><Link to={"/" +  footerItem }> { footerItem } </Link> </li>
    })
    return (
      <div id= { categoryName.toLowerCase().replace(" ", "") }> 
         <Router>
           <ul> 
            <li className="categoryName"> { categoryName }</li>
                {footerItems}
           </ul> <br/>
          </Router>
      </div>
    )
}


export default FooterText;
