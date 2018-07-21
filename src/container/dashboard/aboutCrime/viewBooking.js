import React from 'react'
import { database,auth} from '../../../component/config/firebase'
import {connect} from 'react-redux'
import * as matui from 'material-ui'

// import props from 'prop-types'

const style = {
    container: {
      position: 'relative',
    },
    refresh: {
      display: 'inline-block',
      position: 'relative',
    },
   
  };

class ViewCrime extends React.Component{
        constructor(props){

            super(props);
            this.state = {
            open: false,
            addCrime:[],
            crime_array: [],
            username: '',
            missing_peroson_name: '',
            crimetype:'',
            cityname: '',
            dated: null,
            key: [],
            error: '',
            }

        // this.bookedParkingHandler = this.bookedParkingHandler.bind(this)
        }

       

        componentDidMount(){
                auth.onAuthStateChanged(()=> {
                    if(auth.currentUser){
                        var _uid = auth.currentUser.uid;
                        console.log("user id", _uid)
                        const bookingRef = database.ref()
                        .child('crime/').orderByChild('_uid')
                        .equalTo(_uid)
                        // orderByChild('UserId').equalTo(userId)
                        .on('value', snap => {
                            let addCrime,username,dated,missing_peroson_name,cityname,crimetype
                            var userData = snap.val()
                            var key = Object.keys(userData);
                            console.log("keys", Object.keys)
                            this.setState({key:key     })
                            console.log("after set state key"+this.state.key )
                            let user_array =[];
                            let i;
                            for(let a in userData){
                                let uKey = key[i]
                                console.log("key", key)
                                user_array.push(userData[a]
                                //   {
                                //      
                                // } 
                            )
                            }

                            let finalCrime= [];
                            for (i = 0; i<user_array.length; i++){
                                let crime_array = user_array[i];
                                if(crime_array._uid === _uid){
                                    finalCrime.push({
                                           username:crime_array.username,
                                           cityname:crime_array.cityname,
                                           missing_peroson_name:crime_array.missing_peroson_name,
                                           crimetype:crime_array.crimetype,
                                           username:crime_array.username ,
                                           dated:crime_array.dated,
                                    })
                                }else{
                                    alert("sorry You didn't add any Crime yet")
                                }
                            }

                            this.setState({
                                crime_array:finalCrime,
                                
                            }), console.log(this.state.crime_array)
                        })
                    }
                 })
            }
        
    //delete booking 
    delBooking(key,index){
        database.ref().child('crime'+this.state.key[index]).remove();
        console.log("finding key",this.state)
    }
    
    // bookedParkingHandler(bookedplaceData){

    
    //     console.log('log')
    //     var bookedPlace = bookedplaceData.toString()  
        
    //     if(this.props.parkingData[bookedPlace]){
    //         console.log('first log')
    //         if(this.props.parkingData[bookedPlace]["booking"])    { 
    //         var data = this.props.parkingData[bookedPlace]["booking"];
    //         //initialise empty array for upcoming booking data
    //         var bookedParking_array = [];
    //         for (let key in data ) {
    //             bookedParking_array.push(data[key]);
    //         }
    //         this.setState({
    //             bookedParking: bookedParking_array,
    //             })
    //         }
    //          else { 
    //              this.setState({
    //                  error: 'this parking Area has free yet',
    //                  bookedParking: undefined
    //              })
    //          }
    //          console.log("solved")
    //     }
    // }

    render(){
       
      
        return (
            <div>
                {/* <div className="container" onChange={(e) => this.bookedParkingHandler(e.target.value )}  >  */}
                            
                        {this.state.crime_array === [] ? 
                         <matui.RefreshIndicator
                         size={60}
                         left={420}
                         top={320}
                         loadingColor="#FF9800"
                         status="loading"
                         style={style.refresh}
                           />
                          : 
                        //   <div>
                        //   <h1> Total Number of Crime You booked yet : {index.length} </h1>
                        //   <div>
                            this.state.crime_array.map( (item, index) => (
                              <div key={index} >
                                <div>
                                    <h4> Total No Of Crime:  {index.length} </h4>
                                </div>
                                
                                  <matui.Paper  
                                  style={style} zDepth={4} rounded={false} >
                            
                                    <p>  Name : {item.username} </p>
                                    <hr/> 
                                     <p>  crimetype : {item.crimetype} </p>
                                     <hr/>
                                      <p>  Dated : {item.dated} </p>
                                      <hr/>
                                      <p>  missing peroson name : {item.missing_peroson_name} </p>
                                      <hr/> 
                                      <p>  cityname : {item.cityname} </p>
                                      <hr/>
                                      <matui.RaisedButton label="Submit"
                                          onClick={this.delBooking} secondary={true}
                                          primary={true} className="button"
                                          style={style}>
                                          delete Booking                              
                                      </matui.RaisedButton>
                                </matui.Paper>
                                </div>
                                // </div>
                                // </div>
                        ) )} 
           
                </div>
                //  </div>
        )
    }
}


//redux

const mapStateToProps = (state) => ({
    crimeData: state.bookings
})





export default connect(mapStateToProps)(ViewCrime)
