const today = new Date();

const dayNumber = today.getDay();

const element = document.getElementById ("message");

if (dayNumber ==6) {
    element.classList.add("showbanner");
}
else {
    element.classList.add("hidebanner");
}