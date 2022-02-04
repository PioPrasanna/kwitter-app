// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCVmwBX6GNGU94-tfLVEp4RRVXwlWejGwA",
      authDomain: "kwitter2-2fd96.firebaseapp.com",
      databaseURL: "https://kwitter2-2fd96-default-rtdb.firebaseio.com",
      projectId: "kwitter2-2fd96",
      storageBucket: "kwitter2-2fd96.appspot.com",
      messagingSenderId: "736223034695",
      appId: "1:736223034695:web:666a1547d53ea67dd06062"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); 
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name = "+Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


