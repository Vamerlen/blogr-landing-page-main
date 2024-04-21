const findId = (id) => document.getElementById(id);
const open = (nodes) => nodes.classList.toggle("open");
const changeBurgerNav = (pathImg) =>
  hamburger.children[0].setAttribute("src", pathImg);

const navAnchor = document.querySelectorAll(".nav-list li a");

const hamburger = findId("hamburger");
const nav = findId("nav");
const login = findId("login");
const Navs = document.querySelectorAll(".nav-list li ul");

navAnchor.forEach((el) => {
  el.addEventListener("click", (e) => {
    const id = e.target.textContent;
    const elemento = findId(id);
    console.log(elemento);

    Navs.forEach((el) => el.classList.remove("active"));

    elemento.classList.toggle("active");
  });
});

hamburger.addEventListener("click", () => {
  open(nav);
  nav.classList.toggle("nav");

  if (nav.classList.contains("open")) {
    changeBurgerNav("./images/icon-close.svg");
  } else {
    Navs.forEach((el) => el.classList.remove("active"));
    changeBurgerNav("./images/icon-hamburger.svg");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    if (nav.classList.contains("open")) {
      nav.classList.replace("open", "nav");
      changeBurgerNav("./images/icon-close.svg");
    } else {
      changeBurgerNav("./images/icon-hamburger.svg");
    }
  }
});