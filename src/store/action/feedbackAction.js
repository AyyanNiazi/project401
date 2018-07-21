import {fireApp,database,auth} from '../../component/config/firebase'

export function feedBackHandler(feedBackDetails){
    return (dispatch) => {
        fireApp.database().ref("feedback")
        // .child(feedBackDetails.feedBackdata)
        .child("userFeedBack").push(feedBackDetails)
        .then(() => dispatch ({
                type: "FEEDBACK",
                payload: {...feedBackDetails}
        })).catch(error => {
            console.log('feedback error', error)
        })
    }
}


// export function bookingHandler(bookingDetails){
    
//     return (dispatch) =>   {
//         fireApp.database().ref("bookings")
//         .child(bookingDetails.bookingPlace).child("Booked")
//         .push(bookingDetails)
//         .then(() => dispatch ({
//             type: "BOOKING",
//             payload: {...bookingDetails}
//         })).catch(error => console.log("errr is : ", error))
        
//     }
// }


