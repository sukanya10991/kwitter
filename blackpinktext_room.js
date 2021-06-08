//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD82Ma7K0KvtT8827RvMUHWSNP5BTUIRDg",
      authDomain: "blackpinktext-30b63.firebaseapp.com",
      databaseURL: "https://blackpinktext-30b63-default-rtdb.firebaseio.com",
      projectId: "blackpinktext-30b63",
      storageBucket: "blackpinktext-30b63.appspot.com",
      messagingSenderId: "355877365574",
      appId: "1:355877365574:web:42ef0f1fd3d99190e6a747"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_username");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";

function addroom() {
      roomname = document.getElementById("room_name_input").value;
      firebase.database().ref("/").child(roomname).update({
            purpose = "adding room name"
      });
      localStorage.setItem("room_name", roomname);
      window.location = "blackpinktext_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("trending_rooms").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room names-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("trending_rooms").innerHTML += row;
                  //End code
            });
      });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "blackpinktext_page.html";
}

function logout() {
      localStorage.removeItem("user_username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}