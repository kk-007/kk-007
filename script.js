var toggle = document.querySelector('input[name="toggle"]');

const changeTheme = () => {
  if (toggle.checked) {
    document.getElementById("theme-style").href = "blue.css";
  } else {
    document.getElementById("theme-style").href = "default.css";
  }
};
