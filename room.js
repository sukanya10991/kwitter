// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDg-2nbFXw0mC3R4p_wtCKKXQldMtePMm4",
  authDomain: "minecraftchat-3bc04.firebaseapp.com",
  databaseURL: "https://minecraftchat-3bc04-default-rtdb.firebaseio.com",
  projectId: "minecraftchat-3bc04",
  storageBucket: "minecraftchat-3bc04.appspot.com",
  messagingSenderId: "633302403578",
  appId: "1:633302403578:web:2c06ce3abe38dfdf63bc43"
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