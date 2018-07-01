import React from 'react'
import {fireApp, databsse} from '../../../component/config/firebase'
import Select from '@material-ui/core/Select'; import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'

// import props from 'prop-types'

class ViewBooking extends React.Component{
        constructor(){
            super();
            this.state = { 
            bookedParking: undefined,
            bookedPlace: undefined,
            bookingPlace: '',
            error: '',
            }

        this.bookedParkingHandler = this.bookedParkingHandler.bind(this)
        }

    bookedParkingHandler(bookedplaceData){
        console.log('log')
        var bookedPlace = bookedplaceData.toString()  
        
        if(this.props.parkingData[bookedPlace]){
            console.log('first log')
            if(this.props.parkingData[bookedPlace]["booking"])    { 
            var data = this.props.parkingData[bookedPlace]["booking"];
            //initialise empty array for upcoming booking data
            var bookedParking_array = [];
            for (let key in data ) {
                bookedParking_array.push(data[key]);
            }
            this.setState({
                bookedParking: bookedParking_array,
                })
            }
             else { 
                 this.setState({
                     error: 'this parking Area has free yet',
                     bookedParking: undefined
                 })
             }
             console.log()
        }
    }

    render(){
        return (
            <div>
                <div className="container" onChange={(e) => this.bookedParkingHandler(e.target.value )}  > 
                <div className="form-group"  >
                     <Select className="form-control form-control-lg my-2" 
                     value={this.state.bookingPlace}
                     
                     onChange={(e)  => this.setState({bookingPlace: e.target.value}) }
                     > 
                     <MenuItem value="bookedPlace"  className="text-muted"   >
                     Please select place
                    </MenuItem>
                    <MenuItem value= "shahFaisal"  >Shah Faisal Market</MenuItem>
                    <MenuItem value= "indus" >Indus Hospital</MenuItem>
                    <MenuItem value= "seaView" >Sea View</MenuItem>
                   </Select>      
                </div>
            {/* view data screen */}
                        {this.state.bookedParking === undefined ? <h5> please select one place to view booked parking </h5>
                         : this.state.bookedParking.map( (userData, index) => (
                              <div className="row mt-3" key={index}>
                                <div>
                                    <h4> Total Number of Parking Booked yet: {index + 1} </h4>
                                </div>
                                <div className="card-body" >
                                    <h5>  Name : {userData.username} </h5>
                                    <hr/>
                                     <h5>  Booked Parking Area : {userData.bookingPlace} </h5>
                                     <hr/>
                                      <h5>  Dated : {userData.date} </h5>
                                      <hr/>
                                      console.log(userData)
                                </div>
                                </div>
                        ) )
                    } <p> {this.state.error} </p>

                </div>
                </div>
        )
    }
}


//redux

const mapStateToProps = (state) => ({
    parkingData: state.bookings
})

function mapDispatchToProps (diapatch){
    return {}
}



export default connect(mapStateToProps)(ViewBooking)
