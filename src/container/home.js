import React from 'react';
import {Link}  from 'react-router-dom'
import Login from '../component/userLogin/login'


class Home extends React.Component {
  render() {
    return (
      <div>
           
           <Link to='/signup' >   Signup </Link>  
           <Login />
      </div>

    );
  }
}

export default Home;
