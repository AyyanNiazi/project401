import {fireApp,database,auth,POST} from '../../component/config/firebase'
import {detach} from 'axios'




export function bookingHandler(){

    return (dispatch) =>  {

            database.ref('child').on('value', snapshot => {
            dispatch({
                type:'BOOKINGS',
                payload: snapshot.val()
            })
        })
        // console.log('database')
        // database.ref("bookings")
        // .child(bookingDetails).child("Booked")
        // .push(bookingDetails)
        // .then(() => dispatch ({
        //     type: "BOOKINGS",
        //     payload: {...bookingDetails}
        // })).catch(error => console.log("error is : ", error))
        
    }
}




export const bookedParkingFinal  = () => {
    return (dispatch) => {
      return database().ref('bookings').on('value', (snapshot) => {
        dispatch(snapshot.val())
      });
    }
  }