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

function login() {
    username = document.getElementById("username").value;
    localStorage.setItem("user_username", username);
    window.location = "room.html";
}