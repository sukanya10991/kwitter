var firebaseConfig = {
  apiKey: "AIzaSyCme94tB5-YeTiuZ1sp8KMpyFdLy6Eyog0",
  authDomain: "mc-chat-6b809.firebaseapp.com",
  databaseURL: "https://mc-chat-6b809-default-rtdb.firebaseio.com",
  projectId: "mc-chat-6b809",
  storageBucket: "mc-chat-6b809.appspot.com",
  messagingSenderId: "829803378253",
  appId: "1:829803378253:web:39bb8fabe625f6dae4ce04"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_username");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";

function addroomwdyhm() {
  room_name = document.getElementById("addroom").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("roomname", room_name);
  window.location = "page.html";
}

function getData() {
  firebase.database().ref("/")('value', function (snapshot) {
    document.getElementById("sour").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room names-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("sour").innerHTML += row;
      //End code
    });
  });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "page.html";
}

function logout() {
  localStorage.removeItem("user_username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function request() {
  window.location = "request.html";
}