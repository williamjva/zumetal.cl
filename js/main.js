var open = document.getElementById("bars");
var menu = document.getElementById("menu");
var exit = document.getElementById("exit");

open.addEventListener("click", function (e) {
  menu.classList.toggle("mobile-hidden");
  e.preventDefault();
});

exit.addEventListener("click", function (e) {
  menu.classList.add("mobile-hidden");
  e.preventDefault();
});
