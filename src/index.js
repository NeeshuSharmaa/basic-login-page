import "./styles.css";

const username = document.getElementById("username-input");
const nextBtn = document.getElementById("next-btn");
const password = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
const nameOutput = document.getElementById("username-output");
const passOutput = document.getElementById("password-output");
const nextBtnMsg = document.getElementById("error-msg-next");
const submitBtnMsg = document.getElementById("error-msg-submit");
const userPage = document.getElementById("user-page");
const passPage = document.getElementById("pass-page");
const finalPage = document.getElementById("final-page");

// default display
passPage.style.display = "none";
finalPage.style.display = "none";

function hideUserPage() {
  userPage.style.display = "none";
}
function hidePassPage() {
  passPage.style.display = "none";
}
function showPassPage() {
  passPage.style.display = "flex";
}
function showFinalPage() {
  finalPage.style.display = "flex";
}

function nextBtnHandler() {
  var name = username.value;

  if (name !== "") {
    hideUserPage();
    showPassPage();
    nameOutput.innerHTML = `Your username is <b>${name}</b>.`;
  } else {
    nextBtnMsg.innerText = "Type a username first!!";
    nextBtn.style.backgroundColor = "red";
  }
}

function submitBtnHandler() {
  var pass = password.value;

  if (pass !== "") {
    hideUserPage();
    hidePassPage();
    showFinalPage();
    passOutput.innerHTML = `Your password is <b>${pass}</b>.`;
  } else {
    submitBtnMsg.innerText = "Type a password first!!";
    submitBtn.style.backgroundColor = "red";
  }
}

function errorUserPageHandler() {
  if (nextBtn.style.backgroundColor === "red") {
    nextBtn.style.backgroundColor = "#D3D3D3";
  }
}
function errorPassPageHandler() {
  if (submitBtn.style.backgroundColor === "red") {
    submitBtn.style.backgroundColor = "#D3D3D3";
  }
}

nextBtn.addEventListener("click", nextBtnHandler);
submitBtn.addEventListener("click", submitBtnHandler);
username.addEventListener("click", errorUserPageHandler);
password.addEventListener("click", errorPassPageHandler);
