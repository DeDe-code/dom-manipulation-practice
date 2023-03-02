const buttonElement = document.querySelector(".click-button");

const bodyElement = document.querySelector("body");

buttonElement.innerHTML = "klikkelj ram";

let darkTheme = false;
buttonElement.addEventListener("click", function () {
  console.log("clicked");

  darkTheme = !darkTheme;

  if (darkTheme === true) {
    buttonElement.innerHTML = "dark theme on";
    bodyElement.classList.add("dark");
  } else {
    buttonElement.innerHTML = "dark theme off";
    bodyElement.classList.remove("dark");
  }
});
