import  React from 'react'
import AppBar from '@material-ui/core/AppBar';import Toolbar from '@material-ui/core/Toolbar';import Typography from '@material-ui/core/Typography';import Button from '@material-ui/core/Button';import IconButton from '@material-ui/core/IconButton';

import {Link} from 'react-router-dom'

export default class UserDasboard extends React.Component{

  
    render(){
     
        return(
            <div >
            <AppBar position="static">
              <Toolbar>
                <IconButton  color="inherit" style={{color: 'white' }} aria-label="Menu">
                  {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="title" color="inherit" 
                style={{fontSize: '20px' }}  >
                  Apwa Parking System
                </Typography>
                <Link color="inherit" to='/'  style={{color: 'white', marginRight: '1.8em',
                  marginLeft: '25.8em', fontSize: '13px' }}   > Logout </Link>

                <Link color="inherit"  to='userDashboard/bookParking' 
                 style={{color: 'white', marginRight: '1.8em',
                 fontSize: '13px' }}>Book Parking</Link>

                <Link color="inherit" to='userDashboard/viewParking'
                 style={{color: 'white', marginRight: '1.8em',
                 fontSize: '13px' }} >View Parking</Link>

                 <Link color="inherit" to='userDashboard/feedback'
                 style={{color: 'white', marginRight: '1.8em',
                 fontSize: '13px' }} >Feed Back</Link>
              </Toolbar>
            </AppBar>
          </div>
        )
    }

    
}
