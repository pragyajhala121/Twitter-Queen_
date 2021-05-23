
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAvQYoEieNP6G3xOl91CMa_5Ew9V7R5xqM",
      authDomain: "chat-app-f5206.firebaseapp.com",
      databaseURL: "https://chat-app-f5206-default-rtdb.firebaseio.com",
      projectId: "chat-app-f5206",
      storageBucket: "chat-app-f5206.appspot.com",
      messagingSenderId: "162000106722",
      appId: "1:162000106722:web:3206f6dfc6e2766f7e1abb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name;
    
    function addRoom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose : "add room name"
         });

         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room_name - " + Room_names);
        row = "<div class= 'room_name' id= "+Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +" </div> <hr> ";
        document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}