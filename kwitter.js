function addUser() {
display_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", display_name);
window.location = "kwitter_room.html";
}