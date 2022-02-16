var mode = "dark";
function toggleMode() {
  document.getElementById("toggleMode").style.display = "none";
  if (mode == "dark") {
    console.log("%c Light mode!", "color: gray;");
    mode = "light";
    changeMode();
  } else if (mode == "light") {
   console.log("%c Dark mode!", "color: black;");
    mode = "dark";
    changeMode();
  } else {
    console.error("Mode validation error!");
  }
}
function changeMode() {
  if (mode == "dark") { // Dark mode
    document.body.style.background = "linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,2,85,1) 100%)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
    document.getElementById("content-desktop").style.filter = "brightness(100%)";
    document.getElementById("homepage-signup-btn").style.backgroundColor = "white";
    document.getElementById("homepage-signup-btn").style.color = "black";
    document.getElementById("homepage-signup-btn").style.boxShadow = "0px 0px 20px black";
  } else if (mode == "light") { // Light mode
    document.body.style.background = "rgb(255,255,255)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.color = "black";
    document.getElementById("content-desktop").style.filter = "brightness(0%)";
    document.getElementById("homepage-signup-btn").style.backgroundColor = "black";
    document.getElementById("homepage-signup-btn").style.color = "white";
    document.getElementById("homepage-signup-btn").style.boxShadow = "0px 0px 20px #d6d6d6";
  } else {
    console.error("Mode validation error!")
  }
}