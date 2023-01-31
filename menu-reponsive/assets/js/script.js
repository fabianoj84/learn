function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu")
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open")
    document.querySelector(".icon").src = "assets/img/menu-white-36dp.svg"
  } else {
    menuMobile.classList.add("open")
    document.querySelector(".icon").src = "assets/img/close-menu-36dp.svg";
  }
}
