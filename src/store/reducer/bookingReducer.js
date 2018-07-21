
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
        console.log('booking Reducer log', action.payload)
        setNewState.booking.push(action.payload);
        break;
        //user arra reducer
      case "USERSLIST":
        setNewState.users.push(action.payload);
        break;
        // feedback
      case "FEEDBACK":
        console.log("feed back reducer log",action.payload);
         setNewState.feedback.push(action.payload);
         break;
         
        case  "BOOKING_STATUS":
         action.payload
    }

    return setNewState
}

export default bookingReducer;