import {fireApp , auth, database } from 'firebase'


// export const signup = () => {
//     return (email  , password ) => {
//         fireApp.auth().createUserWithEmailAndPassword(email,password)
//         .then(result => {
//             console.log('sucessfully account created')
//         })
//         .catch(error => {
//             console.log('error', error)
//         })
//     }
// }



export const login = (uid) => ({
    type: 'LOG_IN',
    uid
})


// const logout 
export const logout = () => ({
    type: 'LOG_OUT'
    
})


//functional logout

export const logoutfromAccount = () => {

   return () => {
    return fireApp.auth().signOut();
  };
};






  export function userListAction (userDetail){

    return (dispatch) => { 
    fireApp.database.ref("users").child(userDetail.userList)
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
export function createAccount(data) {
    const {username,  email, password} = data;
    return dispatch  => auth.createUserWithEmailAndPassword(email,password)
    .then((user) => { 
        if(user !== null) {
            database.ref('users').child(user.uid).set({
                username, email,
            })
        }
    })
}

// export function createAccount(data) {
//     const { fname, lname, email, password, image } = data;
//     return dispatch => auth.createUserWithEmailAndPassword(email, password)
//     .then((user) => {
//       if (user !== null) {
//         storage.child(`profile/${picture.name}/${new Date().getTime()}`).put(image[0]).then((snapshot) => {
//           database.ref('users').child(user.uid).set({
//             fname,
//             lname,
//             picture: snapshot.metadata.downloadURLs[0]
//           });
//         });
//       }
//     });
//   }