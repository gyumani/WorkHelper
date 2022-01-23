const loginForm = document.querySelector("#login-form");
const inputUsername = document.querySelector("#login-form input");
const welcome = document.querySelector("#welcome");
const logoutButton = document.querySelector("#logout");
const content_container = document.querySelector("#content_container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const TODOS_KEY = "todos";
const REAL_USERNAME = null;

function onLoginSubmit(e) {
  e.preventDefault();
  const inputUsernameValue = inputUsername.value;
  if (REAL_USERNAME !== null) {
    if (REAL_USERNAME !== inputUsernameValue) {
      alert("사용자가 일치하지 않습니다.");
      document.body.children.remove();
    } else {
      loginForm.classList.add(HIDDEN_CLASSNAME);
      localStorage.setItem(USERNAME_KEY, inputUsernameValue);
      paintWelcome();
    }
  } else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, inputUsernameValue);
    paintWelcome();
  }
}

function paintWelcome() {
  const username = localStorage.getItem(USERNAME_KEY);
  welcome.innerText = `반가워요 ${username}님!`;
  content_container.classList.remove(HIDDEN_CLASSNAME);
}

function logout() {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintWelcome();
}

logoutButton.addEventListener("click", logout);
