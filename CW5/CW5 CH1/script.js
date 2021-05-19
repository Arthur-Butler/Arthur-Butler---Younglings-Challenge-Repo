/*perm = permission.request();*/
const permissionsToRequest = {
  permissions: ["microphone"],
  origins: ["https://developer.mozilla.org/"],
};

const url = "process.php";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    formData.append("files[]", file);
  }

  fetch(url, {
    method: "POST",
    body: formData,
  }).then((response) => {
    console.log(response);
  });
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log(position);
  var gps = (document.querySelector(
    ".permissContainer2"
  ).textContent = `Latitude:
    ${position.coords.latitude} +
    Longitude:
    ${position.coords.longitude}`);
}

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then(function (mediaStream) {
      var video = document.querySelector(".permissContainer1");
      video.srcObject = mediaStream;
      video.play();
    })
    .catch((err) => {
      console.log("error" + err);
    });
}

document.querySelector(".btnMicrophone").addEventListener("click", function () {
  getLocalStream();
});

document.querySelector(".btnLocation").addEventListener("click", function () {
  getLocation();
});
