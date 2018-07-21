import React from 'react';
import {BrowserRouter as Router ,  Route} from 'react-router-dom'
import {auth,database} from './component/config/firebase'
import Home from './container/home'
import UserList from './container/dashboard/adminRights/userList'
import Signup from './component/userLogin/signup'
import UserDashboard from './container/dashboard/userDashboard'
import AdminDashboard from './container/dashboard/adminDashboard'
import FeedBack from './container/dashboard/feedBack'
import viewCrime from './container/dashboard/aboutCrime/viewBooking'
import AddCrime from './container/dashboard/aboutCrime/addCrime'
import ViewFeedback from './container/dashboard/adminRights/viewFeedback'


class App extends React.Component {

  constructor(){
    super()
    this.state={
      user:null,
    }

   }


componentDidMount(){
   auth.onAuthStateChanged(()=>{
     
     this.setState({
         user: auth.currentUser
     })
   })
 }
  render() {
    return (
      <div>
        <Router  createHistory="history">
        <div>

            <Route path='/' exact component={Home} />
            <Route path='/signup'  component={Signup}/>
            <Route path='/userDashboard'  component={UserDashboard}/>
            <Route path='/adminDashboard'  component={AdminDashboard}/>
            <Route path='/user/sendFeedback'  component={FeedBack}/>
            <Route path="/user/addCrime"  component={AddCrime} />
            <Route path="/User/viewCrime"    component={viewCrime}/>
            <Route path="/admin/viewFeedback"    component={ViewFeedback}/>
            <Route path="/admin/users"    component={UserList}/>
          </div>
          
        </Router>
      
      </div>
      
    
    )
  }
}


// fireApp.auth().onAuthStateChanged((user) => {
//   if(user) {
//     store.dispatch(login(user.uid))
//     console.log('logged in')
//     if(history.location.pathname === '/') {
//       localStorage.setItem('user', user.uid);
//       history.push('/userDashboard')
//     }
//   }

//   else {
//     console.log('log out')
//     history.push('/')
//   }
// })


export default App;
