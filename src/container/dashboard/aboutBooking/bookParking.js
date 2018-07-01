import React from 'react';
import { connect } from "react-redux";
import {Link}  from 'react-router-dom'
import Select from '@material-ui/core/Select'; import MenuItem from '@material-ui/core/MenuItem';
import { database } from '../../../component/config/firebase';
import {bookingHandler} from '../../../store/action/bookingAction'

class BookParking extends React.Component {

  //initialise
constructor(props){
    super(props);
  this.state = {
    bookingPlace: '',
    username: '',
    date: '',
  }


}


addBookingHandler(e){
  e.preventDefault();
    // dispatch To Pops
    this.props.bookingSubmit(this.state)
    this.setState({
      bookingPlace: '',
      username: '',
      date: '',
    })
    
}

  
  render() {
    return (
      <div>

        <div className="container " >                           
      <div className="col-md-4 col-md-offset-4 ">
      <div className="jumbotron" >      
   
     <form onSubmit={this.addBookingHandler.bind(this)} >
    
     <div className="form-group"   >
          <label>  User Name </label>
            <input className="form-control form-control-lg my-2" 
            type="text"
            placeholder="User Name"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value }) }
            /> 
         

     </div><label> Chooser place
     </label>  
     <div className="form-group"   >
          
          <div className="form-group"  >
           <Select className="form-control form-control-lg my-2" 
           placeholder="ssdd"
           id="place" 
           value={this.state.bookingPlace}
           defaultChecked="sgsikasi"
           onChange={(e)  => this.setState({bookingPlace: e.target.value}) }
            > 
            <MenuItem value="bookingPlace" checked="aaasd" defaultChecked="bookingPlace" className="text-muted"   >
            Please select place
            </MenuItem>
            <MenuItem value= "shahFaisal" className="text-muted" >Shah Faisal Market</MenuItem>
            <MenuItem value= "indus" >Indus Hospital</MenuItem>
            <MenuItem value= "seaView" >Sea View</MenuItem>
          </Select>      
      </div>
      </div>
      
          <label>    Select day    </label>
           <div className="form-group"   >
          <input type="date"
          id="date"
          value={this.state.date}
          onChange={(e)  => this.setState({date: e.target.value}) }
          className="form-control form-control-lg my-2"  
        />
      </div>

    <div className="form-group"   >
    <input type="submit"
    style={{backgroundColor: '3399FF'}}
    className="form-control form-control-lg my-2 btn btn-primary"  
    />
                             </div>    
                        </form>
                  </div>
              </div>
          </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(BookParking);
