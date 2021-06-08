// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD82Ma7K0KvtT8827RvMUHWSNP5BTUIRDg",
    authDomain: "blackpinktext-30b63.firebaseapp.com",
    projectId: "blackpinktext-30b63",
    storageBucket: "blackpinktext-30b63.appspot.com",
    messagingSenderId: "355877365574",
    appId: "1:355877365574:web:42ef0f1fd3d99190e6a747"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function login(){
    username=document.getElementById("username").value;
    localStorage.setItem("user_username",username);
    window.location="blackpinktext_room.html"
}