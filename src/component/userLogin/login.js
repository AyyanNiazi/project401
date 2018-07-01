import React from 'react';
import {Link,BrowserRouter, Route,withRouter } from 'react-router-dom'
import {fireApp , auth, database, } from '../config/firebase'
import createHistory from "history/createBrowserHistory";
import {connect} from 'react-redux'
import UserDashboard from '../../container/dashboard/userDashboard';

var history = createHistory();




class Login extends React.Component {
 
 //initialize state
  constructor(props){
    super(props);
    this.state = {
     
      email: '',
      password: '',
      error: ''
    }
  }

 
  formHandler (eve) {
  eve.preventDefault();
  const {email, password} = this.state;
  const {history} = this.props
  fireApp.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    this.setState({
      email: '',
      password: '',
      error: ''
    })
  })
    this.props.history.push("/userDashboard")

  console.log(this.state)

}

  render() {
    return (
      <div>
      <BrowserRouter >
      <Route path="/userDashboard" component={UserDashboard} />
      </BrowserRouter>

      <div className="container " >                           
      <div className="col-md-4 col-md-offset-4 ">
      <div className="jumbotron" >      
   
     <form onSubmit={this.formHandler.bind(this)} >
    
   
     <div className="form-group"  >

       <input 
       type='text' 
       value={this.state.email}
       placeholder="Email"
       className="form-control"
       onChange={eve => this.setState({email: eve.target.value} )}    
       required
       />

    </div>
       <div className="form-group" >
       <input type='password' 
       value={this.state.password}
       placeholder="PAssword"
       className="form-control"
       onChange={eve => this.setState({password: eve.target.value} )}    
       required
       />
       </div>
       {/* {error && <p  style={{color: 'red'}}> {error.message}</p>} */}
  <button  type='submit' > Login </button>

 </form>  
 <br/> <br/> 
 <div> <Link to='/signup'  style={{color: 'green'}} >
  Create Account </Link></div>

     </div>
            
      </div>                    
    </div>  
    </div>


    );
  }
}

export default  Login;
