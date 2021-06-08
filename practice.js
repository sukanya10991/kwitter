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
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user-name").value;
    firebase.database().ref("/").child(user_name).update({
        sukanya:" this is ananya"
    })
}
