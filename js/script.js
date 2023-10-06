// Navigation Scroll

function userScroll() {
  const navBar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navBar.classList.add("bg-dark");
      navBar.classList.add("nav-sticky");
    } else {
      navBar.classList.remove("bg-dark");
      navBar.classList.remove("nav-sticky");
    }
  });
}
document.addEventListener("DOMContentLoaded", userScroll);
