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
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_username");
room_name = localStorage.getItem("room_name");
document.getElementById("roomname_display").innerHTML = room_name;

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    msg: msg,
    like: 0,
  });
  document.getElementById("msg").value = "";
}

function logout() {
  localStorage.removeItem("user_username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;

        //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name_ = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>" + name_ + "<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick=updatelike(this.id)";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button> <hr>";
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
        //End code

      }
    });
  });
}
getData();

function updatelike(message_id) {
  console.log("clicked on like button" + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  update_likes = Number(likes) + 1;
  console.log(update_likes);
  firebase.database().ref(room_name).child(message_id).update({
    like: update_likes
  });
}