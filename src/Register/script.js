let menuOpen = false;
const button = document.querySelector("nav ul.button");

const menu = document.querySelector("nav ul.menu");

button.addEventListener("click", function () {
  if (!menuOpen) {
    menu.style.display = "flex";
    menuOpen = true;
  } else {
    menu.style.display = "none";
    menuOpen = false;
  }
});

