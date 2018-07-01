import React from 'react';
import {fireApp , auth,  } from '../config/firebase'
import {connect} from 'react-redux'
// import {FormControl,FormGroup,form,ControlLabel } from 'react-bootstrap'
import {Link, BrowserRouter,Route,withRouter} from 'react-router-dom'
import UserDashboard from '../../container/dashboard/userDashboard'
import {userListAction} from '../../store/action/userListAction'
import {createAccount} from '../../store/action/userAuthAction'

class Signup extends React.Component {
constructor(){
  super();

  this.state= {
    email : '',
    password: '',
    username: '',
    error: '',
    
  }
}

createUserAccount (e) {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.userListState(this.state);
    fireApp.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result)
      this.setState({
        email : '',
        password: '',
        username: '',
        error: '',
      })
    })
    ; this.props.history.push("/userDashboard")


    // this.props.history.push("/userDashboard")   
    // .catch(error => {
    //   console.log('error', error)
    //   // this.setState({
  
    //   // })
    // })
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
            <form onSubmit={this.createUserAccount.bind(this)} >
             <div className="form-group"   >
               <input 
                type='text' 
                value={this.state.username}
                placeholder="USer Name"
                className="form-control"
                onChange={eve => this.setState({username: eve.target.value} )}    
                required
                />
             </div>

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
                <p style={{color: 'red'}}> {this.state.error} </p>

            </form>  
              <br/> <br/> 
            <div> <Link to='/signup'  style={{color: 'green'}} >
                Login With Us </Link></div>
          </div>
        </div>                    
      </div>
    </div> 

    );
  }
}


//redux

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    userListState: userDetail => dispatch (userListAction(userDetail))
  }
}



export default connect(mapStateToProps, mapDispatchToProps(withRouter))(Signup)  ;
