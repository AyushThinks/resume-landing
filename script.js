// Footer year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Hero heading change
const heading = document.querySelector(".heading-gradient");
heading.textContent = "With an ATS-Friendly Resume";

// Stats value update
const resumes = document.querySelector("#stat-resumes");
resumes.textContent = "75K+";

const home = document.getElementById("home-page");
const login = document.getElementById("login-page");
const signup = document.getElementById("signup-page");

document.getElementById("loginBtn").onclick = function () {
    home.style.display = "none";
    login.style.display = "flex";
    signup.style.display = "none";
}

document.getElementById("signupBtn").onclick = function () {
    home.style.display = "none";
    signup.style.display = "flex";
    login.style.display = "none";
}

document.getElementById("showSignup").onclick = function () {
    login.style.display = "none";
    signup.style.display = "flex";
}

document.getElementById("showLogin").onclick = function () {
    signup.style.display = "none";
    login.style.display = "flex";
}