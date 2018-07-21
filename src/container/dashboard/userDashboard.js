import  React from 'react'
import {BrowserRouter as Router , Link,  Route} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';
import * as matui from 'material-ui'
import {fireApp,auth,database} from '../../component/config/firebase'
import AddCrime from './aboutCrime/addCrime'
import viewCrime from './aboutCrime/viewBooking'
import FeedBack from './feedBack'
const styles = {
  title: {
    cursor: 'pointer',
  },
};
function onhandleClick() {
  console.log("working handle click")
  // alert('thanks to visit our app');
  // this.props.history.push('/')
} 
export default class UserDasboard extends React.Component{
  constructor(){
    super()
      this.state={
        open: false,
        user: '',
      }
    }
      
  handleToggle = () => this.setState({open: !this.state.open});
  handleClick(){
    auth.signOut().then(()=> { }).catch(err => {
      console.log("error raised from sign out ", err )
    }); this.props.history.push('/');
  }
  
  componentDidMount(){
    auth.onAuthStateChanged(()=>{
      if(auth.currentUser){
      console.log("succesfully user came")
      }else{
        this.props.history.push('/')
      }
    })
  }

  //navigation points starting here
  addCrime(){
    this.props.history.push("/user/addCrime")
 
 }   
 viewCrime(){
   this.props.history.push("/User/viewCrime");
 }
 sendFeedback(){
    this.props.history.push("/User/sendFeedback");
    console.log("suces")
 }


    render(){
     
        return(
            <div >
              <div>
                <matui.AppBar
                 title={<span style={styles.title}  > User  Dashboard</span>}
                 onTitleClick={onhandleClick}
                 onClick={this.handleToggle} 
                 iconElementRight={<matui.FlatButton label="Log out" onClick={(event) => this.handleClick(event)}/>}
               />  
              <div>
                <matui.Drawer 
                onRequestChange={(open) => this.setState({open})}
                open={this.state.open} >
                          <MenuItem onClick={this.handleToggle.bind(this)}> X </MenuItem>
                          <matui.MenuItem onClick={this.addCrime.bind(this)} >Add Crime </matui.MenuItem>
                          <matui.MenuItem onClick={this.viewCrime.bind(this)} >View Crime </matui.MenuItem>
                          <matui.MenuItem  onClick={this.sendFeedback.bind(this)}>  FeedBack  </matui.MenuItem>        
                </matui.Drawer>
                 </div>
                    <Router>
                    <div>
                          <Route path="/user/addCrime" exact component={AddCrime} />
                          <Route path="/User/viewCrime"    component={viewCrime}/>
                          <Route path="/user/sendFeedback"  component={FeedBack}/>
                    </div>
                    </Router>
            </div>
            </div>
        )
    }

    
}
