import React from 'react';
import {Link}  from 'react-router-dom'



class AppHeader extends React.Component {
  render() {
    return (
      <div>
         <Link to='/signup' >   Signup </Link>  
         <Link to='/login ' >   Login </Link>  
        
 
      </div>

    );
  }
}

export default AppHeader;
