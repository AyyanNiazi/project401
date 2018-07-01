import React from 'react';
import {Router , Link, Switch, Route} from 'react-router-dom'
import createHistory from "history/createBrowserHistory";
import store from './store/index'
import {fireApp} from './component/config/firebase'
import {login , logout} from './store/action/userAuthAction'
import AppHeader from './container/AppHeader'
import Signup from './component/userLogin/signup'
import Login from './component/userLogin/login'
import UserDashboard from './container/dashboard/userDashboard'
import AdminDashboard from './container/dashboard/adminDashboard'
import BookParking from './container/dashboard/aboutBooking/bookParking'
import viewBooking from './container/dashboard/aboutBooking/viewBooking';
import UserList from './container/dashboard/adminRights/viewUsers';
import FeedBack from './container/dashboard/feedBack';
import ViewFeedBack from './container/dashboard/adminRights/viewFeedBack';


const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}  >
        <div>
          <div>
            <AppHeader/>
          </div>
            <div>
            <Switch>
            <Route path='/' exact omponent={AppHeader} />
            <Route path='/signup' exact component={Signup}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/userDashboard' exact component={UserDashboard}/>
            <Route path='/adminDashboard' exact component={AdminDashboard}/>
            <Route path='/userDashboard/bookParking' exact component={BookParking}/>
            <Route path='/userDashboard/viewParking' exact component={viewBooking}/>
            <Route path='/adminDashboard/adminRights/userList' exact component={UserList}/>
            <Route path='/userDashboard/feedBack' exact component={FeedBack}/>
            <Route path='/adminDashboard/viewFeedBack' exact component={ViewFeedBack}/>
            </Switch>           
          </div>
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
