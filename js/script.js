console.log("hi");

let buttonLove = document.querySelector(".js-button-love");
let articleOfMoney = document.querySelector(".js-sectionLoveMoney-money");

let buttonMoney = document.querySelector(".js-button-money");
let articleOfLove = document.querySelector(".js-sectionLoveMoney-love");

let buttonTheme = document.querySelector(".js-header__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");
let navigationUnList = document.querySelector(".js-navigation-list");
let containerList = document.querySelector(".js-container-list");

let buttonImg = document.querySelector(".js-sectionLoveMoney-button");
let IMG = document.querySelector(".js-sectionLoveMoney__photo");

let sectionLoveMoney__photo = document.querySelector(
  ".js-sectionLoveMoney-photo"
);

let containerCrypto__Variable = document.querySelector(
  ".js-containerCrypto__Variable"
).innerText;

let containerCrypto__howMuch = document.querySelector(
  ".js-containerCrypto__howMuch"
);

buttonLove.addEventListener("click", () => {
  articleOfMoney.remove();
});

buttonMoney.addEventListener("click", () => {
  articleOfLove.remove();
});

buttonTheme.addEventListener("click", () => {
  body.classList.toggle("js-header__dark");
  navigationUnList.classList.toggle("js-navigation__outline");
  containerList.classList.toggle("js-containerList__backgroundcolor");

  themeName.innerText = body.classList.contains("js-header__dark")
    ? "jasny"
    : "ciemny";
});

buttonImg.addEventListener("click", () => {
  IMG.remove();
  if (
    sectionLoveMoney__photo.classList.contains("js-sectionLoveMoney-button")
  ) {
    buttonImg.classList.add("js-sectionLoveMoney-text-decoration");
  } else {
    buttonImg.remove();
  }
});

switch (containerCrypto__Variable) {
  case "-25":
    containerCrypto__howMuch.innerText = "+275";
    break;
  case "-50":
    containerCrypto__howMuch.innerText = "+250";
    break;
  case "+100":
    containerCrypto__howMuch.innerText = "400";
    break;
  default:
    containerCrypto__howMuch.innerText = "300";
}
