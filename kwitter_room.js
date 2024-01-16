
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCv5x-TpvzHeXPmObXznvNcDPvhsm6UavU",
      authDomain: "kwitter-3458a.firebaseapp.com",
      databaseURL: "https://kwitter-3458a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3458a",
      storageBucket: "kwitter-3458a.appspot.com",
      messagingSenderId: "306981871145",
      appId: "1:306981871145:web:c98a7418f5e4d94ec5c638",
      measurementId: "G-Q4D83212B3"
    };
  
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location= "kwitter_page.html";
}


