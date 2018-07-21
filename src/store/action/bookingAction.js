import {fireApp,database,auth} from '../../component/config/firebase'
// import {detach} from 'axios'

export function bookingHandler(bookingDetails){

    return (dispatch) =>  {
       console.log('database')
        database.ref()
        .child('crime/')
        .push(bookingDetails)
        .then( (res) => dispatch ({
            type: "BOOKINGS",
            payload: {...bookingDetails}
        }, console.log ("success"))).catch(error => console.log("error is : ", error))
        
    }
}




// export const bookedParkingFinal  = () => {
//     return (dispatch) => {
//       return database().ref('bookings').on('value', (snapshot) => {
//         dispatch(snapshot.val())
//       });
//     }
//   }