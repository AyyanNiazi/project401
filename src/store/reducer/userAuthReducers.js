// import { GET_USER } from '../';

export default (state = {}, action) => { 
    switch(action.type){
        case 'SIGN_UP':
          return { uid: action.uid}
    
        case 'LOG_IN':
          return { }
    
        case 'LOG_OUT':
         return {}

        //  case GET_USER:
        //  return action.payload;
        
         default : return state
}

  };
