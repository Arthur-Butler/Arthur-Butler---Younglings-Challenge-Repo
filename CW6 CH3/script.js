var username = document.getElementById("username").textContent;
var password = document.getElementById("password").textContent;

document.getElementById("SUBMITbtn").addEventListener("click", function () {
  getlocation();
});

function getlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log(`${position.coords.latitude}/${position.coords.longitude}`);
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  if (
    (34.002345045 * -1 >= lat >= 33.9123 * -1) &
    (18.3580633333 <= long <= 18.4031083333)
  ) {
    console.log("Signed in");
    window.alert("Signed in");
  } else {
    console.log("Sign in ERROR! Not in location");
    window.alert("Sign in ERROR! Not in location");
  }
}
