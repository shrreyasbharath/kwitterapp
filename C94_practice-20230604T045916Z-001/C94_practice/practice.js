
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyBgQ_JgM62d4omO96YVRHRKv5nJsWcXYu8",
  authDomain: "classtest-b7cc2.firebaseapp.com",
  projectId: "classtest-b7cc2",
  storageBucket: "classtest-b7cc2.appspot.com",
  messagingSenderId: "915153025337",
  appId: "1:915153025337:web:196c48ed2259a3fab7d0e8",
  measurementId: "G-7KFWXKF46H"
};

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


