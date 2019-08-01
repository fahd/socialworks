var Firebase = require("firebase")
const config = {
  apiKey: "AIzaSyBqFRxLRJ1RFyaaRHCjBxJH6hJ1i1TPTH0",
  authDomain: "socialworks-6af2a.firebaseapp.com",
  databaseURL: "https://socialworks-6af2a.firebaseio.com",
	projectId: "socialworks-6af2a"
}
Firebase.initializeApp(config)
var auth = {
  ref: Firebase.database().ref(),
  firebaseAuth: Firebase.auth
}

module.exports = auth;
