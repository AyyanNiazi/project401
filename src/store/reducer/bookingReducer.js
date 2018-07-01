
var initialState = {
    booking : [],
    users: [],
    feedback: [],
}


const bookingReducer = (state = initialState, action ) => {
    let setNewState = {...state};
    switch (action.type) {
      // booking reducers
      case "BOOKINGS":
        console.log('logss')
        setNewState.booking.push(action.payload);
        break;
        //user arra reducer
      case "USERSLIST":
        setNewState.users.push(action.payload);
        break;
        // feedback
      case "FEEDBACK":
         setNewState.feedback.push(action.payload);
         break;
         
        case  "BOOKING_STATUS":
         action.payload
    }

    return setNewState
}

export default bookingReducer;