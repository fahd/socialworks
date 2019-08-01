var Firebase = require("firebase")
const config = {
  apiKey: "CODESAREINACTIVE",
  authDomain: "CODESAREINACTIVE",
  databaseURL: "CODESAREINACTIVE",
	projectId: "CODESAREINACTIVE"
}
Firebase.initializeApp(config)
var auth = {
  ref: Firebase.database().ref(),
  firebaseAuth: Firebase.auth
}

module.exports = auth;
