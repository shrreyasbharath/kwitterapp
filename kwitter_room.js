
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBgQ_JgM62d4omO96YVRHRKv5nJsWcXYu8",
      authDomain: "classtest-b7cc2.firebaseapp.com",
      databaseURL: "https://classtest-b7cc2-default-rtdb.firebaseio.com",
      projectId: "classtest-b7cc2",
      storageBucket: "classtest-b7cc2.appspot.com",
      messagingSenderId: "915153025337",
      appId: "1:915153025337:web:196c48ed2259a3fab7d0e8",
      measurementId: "G-7KFWXKF46H"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = " <div class = 'room' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
