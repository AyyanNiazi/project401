import * as firebase  from 'firebase'



  var config = {
    apiKey: "AIzaSyDdiz2aLyhJxAxcOBubry9dQjaHeHLpeWE",
    authDomain: "pasking-app.firebaseapp.com",
    databaseURL: "https://pasking-app.firebaseio.com",
    projectId: "pasking-app",
    storageBucket: "pasking-app.appspot.com",
    messagingSenderId: "22680102434"
  };

  var fireApp = firebase.initializeApp(config);
  var database = firebase.database();
  var storage = firebase.storage();
  var auth = firebase.auth();
console.log('fb')


  export {
      auth,
      fireApp,
      database,
      storage,
  }