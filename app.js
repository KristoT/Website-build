<<<<<<< Updated upstream
//setup date
const date = document.getElementById('date');
if (date) {
  date.innerHTML = new Date().getFullYear();
}
=======
>>>>>>> Stashed changes
// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// show nav
if (navBtn) {
  navBtn.addEventListener('click', () => {
    navbar.classList.add('showNav');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navbar.classList.remove('showNav');
  });
}
// close nav
<<<<<<< Updated upstream
=======
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
//setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
>>>>>>> Stashed changes
