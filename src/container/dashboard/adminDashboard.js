import  React from 'react'
import { BrowserRouter ,Link,Route} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';
import * as matui from 'material-ui'
import {fireApp,auth,database} from '../../component/config/firebase'
import AddCrime from './aboutCrime/addCrime'
import ViewFeedBack from './adminRights/viewFeedback';
import UserList from './adminRights/userList';


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
export default class AdminDasboard extends React.Component{
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
  viewCrime(){
    this.props.history.push("/admin/viewCrime")
 }   
 viewUser(){
   this.props.history.push("/admin/users");
 }
 viewFeedback(){
    this.props.history.push("/admin/viewFeedback");
    // <Link to="/User/sendFeedback"  />
    console.log("suces")
 }


    render(){
     
        return(
            <div >
              <div>
                <matui.AppBar
                 title={<span style={styles.title}  > Admin  Dashboard</span>}
                 onTitleClick={onhandleClick}
                 onClick={this.handleToggle} 
                 iconElementRight={<matui.FlatButton label="Log out" onClick={(event) => this.handleClick(event)}/>}
               />  

              <div>
                <matui.Drawer 
                onRequestChange={(open) => this.setState({open})}
                open={this.state.open} >
                          <MenuItem onClick={this.handleToggle.bind(this)}> X </MenuItem>
                          {/* <matui.MenuItem  >Add Crime </matui.MenuItem> */}
                          <matui.MenuItem onClick={this.viewCrime.bind(this)} >View Crime </matui.MenuItem>
                          <matui.MenuItem onClick={this.viewFeedback.bind(this)}   >  View Feedback   </matui.MenuItem>        
                          <matui.MenuItem  onClick={this.viewUser.bind(this)}  >  View Users   </matui.MenuItem>        
                </matui.Drawer>
                 </div>
                    <BrowserRouter>
                    <div>
                          {/* <Route path="/admin/addCrime" exact component={AddCrime} /> */}
                          <Route path="/admin/viewCrime" component={this.viewCrime}/>
                          <Route path="/admin/viewFeedback" component={ViewFeedBack}/>
                          <Route path="/admin/users"  component={UserList}/>
                    </div>
                    </BrowserRouter>
            </div>
            </div>
        )
    }

    
}
