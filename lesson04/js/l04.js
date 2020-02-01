var newDate = document.lastModified;
document.getElementById("currentdate").innerHTML=new Date().toLocaleDateString('en-GB',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click",toggleMenu,false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}