const followButton = document.getElementById("followBtn");

followButton.addEventListener("click", function () {
  if (followButton.textContent === "Follow") {
    followButton.textContent = "Following";
  } else {
    followButton.textContent = "Follow";
  }
});

const themeToggleButton = document.getElementById("themeToggle");
const themeIcon = themeToggleButton.querySelector(".theme-icon");

themeToggleButton.addEventListener("click", function () {
  if (document.documentElement.dataset.theme === "dark") {
    document.documentElement.dataset.theme = "light";
    themeIcon.textContent = "🌙"; // Change to moon icon for light theme
  } else {
    document.documentElement.dataset.theme = "dark";
    themeIcon.textContent = "☀️"; // Change to sun icon for dark theme
  }
});