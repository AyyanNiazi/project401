import  React from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import * as matui from 'material-ui'
import {fireApp, auth, database} from '../../../component/config/firebase'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import './user.css'
const style = {
    container: {
      position: 'relative',
    },
    refresh: {
      display: 'inline-block',
      position: 'relative',
    },
  };
  
class UserList extends React.Component{
constructor(props){
    super(props)
    this.state={
        userList: '',
    }
}


componentDidMount(){
    auth.onAuthStateChanged(() => {
        if(auth.currentUser){
            const userRef = database.ref().child('users/');
            userRef.on('value', snap=>{
                var val = snap.val();
                var keys = Object.keys(val)
                var i;
                let allUsers = [];
                let email  = '';
                let name = '';
                
                email="admin123@gmail.com"
                for(i=0; i<keys.length; i++){
                    var userK = keys[i]
                    if(val[userK].Email!==email){
                        allUsers.push({
                            username:val[userK].username,
                            email:val[userK].email
                        })
                    }
                }

                this.setState({
                    userList:allUsers
                })

            })
        }
    })
}

    render(){
        return (
            <div>

              <h2>  users list </h2>
              <div>
                {this.state.userList === '' ? 
                <RefreshIndicator
                size={60}
                left={420}
                top={320}
                loadingColor="#FF9800"
                status="loading"
                style={style.refresh}
                  />
                 :
                    this.state.userList.map( (item, index ) => ( 
                    <div style={{size: 20}}  key={index }>
                        <matui.Card 
                        style={style} zDepth={4} rounded={false} id="abc"  >
                            <p
                             leftAvatar={<Avatar src="user.svg" />}>
                             username : {item.username}  </p>
                            <p> Email : {item.email}  </p>
                        </matui.Card>
                        
                    </div>
                ))}
              </div>
            

            </div>
        )
    }
}



export  default UserList