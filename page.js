const firebaseConfig = {
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