import React from 'react';
import { connect } from "react-redux";
import {auth} from '../../../component/config/firebase'
import {Link , Route, BrowserRouter,} from 'react-router-dom'
import {bookingHandler} from '../../../store/action/bookingAction'
import * as matui from 'material-ui'
import './crime.css'
import UserDasboard from '../userDashboard'
import ViewCrime from './viewBooking'
function onhandleClick() {
  console.log("working handle click")
  // alert('thanks to visit our app');
  // this.props.history.push('/')
} 
class AddCrime extends React.Component {

  //initialise
constructor(props){
    super(props);
    this.state = {
      
      username: '',
      missing_peroson_name: '',
      crimetype:'',
      cityname: '',
      dated: {},
      open: false,

  }
}
handleToggle = () => this.setState({open: !this.state.open});
handleClick(){
  auth.signOut().then(()=> { }).catch(err => {
    console.log("error raised from sign out ", err )
  }); this.props.history.push('/');
}



dateHandler(e,date) {
  this.setState({
    dated: date
  })
}

addBookingHandler(e){
  e.preventDefault();
    // dispatch To Pops
    this.props.bookingSubmit(this.state)
    this.setState({
      username: '',
      missing_peroson_name: '',
      crimetype:'',
      cityname: '',
      dated: '',
    })
    
}


handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};

handleLink = () => {
  this.props.history.push('/User/viewCrime')
}


  render() {

      const isInvalid =  this.state.username === '' ||  this.state.missing_peroson_name === '' || this.state.crimetype === '' || this.state.cityname === '' || this.state.dated === null

     
      const actions = [
        <matui.FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <matui.FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleLink}
        />,
      ];
    return (
      <div>
         <BrowserRouter  >
                <div>
                   <Route path="/userDashboard" component={ViewCrime} />
                  </div>
                </BrowserRouter>
          <div>
                <matui.AppBar
                 title={<span style={styles.title}  > Add crime</span>}
                 onTitleClick={onhandleClick}
                 onClick={this.handleToggle} 
                 iconElementRight={<matui.FlatButton label="Log out" onClick={(event) => this.handleClick(event)}/>}
                  />  
              </div>
        <br/><br/>
        <matui.Card  className='crime-card'>
         <form onSubmit={this.addBookingHandler.bind(this)} >
         <matui.CardText>
            <matui.TextField
             required
             value={this.state.username}
             onChange={(e) => this.setState({ username: e.target.value }) }
             floatingLabelText="Name"
             floatingLabelStyle={styles.floatingLabelStyle}
             floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
             />
            <matui.TextField
             value={this.state.crimetype}
             onChange={(e) => this.setState({ crimetype: e.target.value }) }
             floatingLabelText="Crime Type"
             floatingLabelStyle={styles.floatingLabelStyle}
             floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
             />
            <matui.TextField
              type="text"
              value={this.state.missing_peroson_name}
              onChange={(e) => this.setState({ missing_peroson_name: e.target.value }) }
              floatingLabelText="Missing Person Name"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            /> 
              <matui.TextField
              value={this.state.cityname}
              onChange={(e) => this.setState({ cityname: e.target.value }) }
              floatingLabelText="City Name"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              /> 

          <matui.DatePicker
            mode="landscape"
            value={this.state.dated}
            floatingLabelText="choose date"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            onChange={this.dateHandler.bind(this) }          
          />
         </matui.CardText>
          <matui.CardActions>
          <matui.RaisedButton label="Submit" 
           disabled={isInvalid}
           type="submit" primary={true} className="button"
           onClick={this.handleOpen} styles={styles} /> 
         <matui.Dialog
          title="Thanks For Your Co-operation"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
       <h1> You Have SuccesFully Done . To View Your Data Please Click On View Button Below</h1>
        </matui.Dialog>
          </matui.CardActions> 
                        </form>
                  </matui.Card>
            </div>

    );
  }
}

//redux

function mapStateToProps (state)  {
    return {}
}


function mapDispatchToProps (dispatch)  {
  return {
    bookingSubmit: bookingDetails => dispatch (bookingHandler(bookingDetails))
  }
}

const styles = {
 
  floatingLabelStyle: {
    color: 'green',
  },
  floatingLabelFocusStyle: {
    color: 'green',
  },
  
};


export default connect(mapStateToProps, mapDispatchToProps)(AddCrime);
