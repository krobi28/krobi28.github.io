var newDate = document.currentdate;
document.getElementById("currentdate").innerHTML=new Date().toLocaleDateString(navigator.language,{weekday:'long',year:'numeric',month:'long',day:'numeric'});

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click",toggleMenu,false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}