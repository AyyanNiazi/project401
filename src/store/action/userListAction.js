import {fireApp,database,auth} from '../../component/config/firebase'


export function userListAction (userDetail){

        return (dispatch) => { 
         fireApp.database().ref('users').child(userDetail.uid)
        // fireApp.database.ref("users").child(userDetail.userList)
        .push(userDetail)
        .then( () =>  dispatch ({
            type: "USERSLIST",
            payload: {...userDetail}
        }))
        .catch(error => {
            console.log('error raised from user list :',  error)
        })
}

}





// import {fireApp,database,auth} from '../../component/config/firebase'

// export function bookingHandler(bookingDetails){
    
//     return (dispatch) => 
//         fireApp.database().ref("bookings")
//         .child(bookingDetails.bookingPlace).child("Booked")
//         .push(bookingDetails)
//         .then(() => dispatch ({
//             type: "BOOKING",
//             payload: {...bookingDetails}
//         })).catch(error => console.log("errr is : ", error))
        
//     }
// }