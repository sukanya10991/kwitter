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

function login() {
    username = document.getElementById("username").value;
    localStorage.setItem("user_username", username);
    window.location = "room.html";
    firebase.database().ref("/").child(username).update({
        blinks: "we love blackpink"
    })
}